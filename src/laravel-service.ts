import * as acm from '@aws-cdk/aws-certificatemanager';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as ecs from '@aws-cdk/aws-ecs';
import * as efs from '@aws-cdk/aws-efs';
import * as logs from '@aws-cdk/aws-logs';
import * as cdk from '@aws-cdk/core';
import { DualAlbFargateService, RdsService } from './';
import { getOrCreateVpc } from './common/util';


export interface LaravelProps {
  readonly vpc?: ec2.IVpc;
  /**
   * enable fargate spot
   */
  readonly spot?: boolean;
  /**
   * enable ECS Exec
   */
  readonly enableExecuteCommand?: boolean;
  /**
   * The local path to the Laravel code base.
   */
  readonly code: string;
  /**
   * The Laravel container port
   * @default 80
   */
  readonly containerPort?: number;
  /**
   * Options to create the EFS FileSystem
   */
  readonly efsFileSystem?: efs.FileSystemProps;

  readonly db?: RdsService;

  /**
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-cpu-memory-error.html
  */
  readonly fargateTaskDefinitionProps? : ecs.FargateTaskDefinitionProps;

  /**
  *This is the FargateTaskProps below
  */
  readonly cert? : acm.ICertificate;

  readonly healthCheckPath? : string;
  readonly healthCheckCode? : string;
}

export class LaravelService extends cdk.Construct {
  readonly vpc: ec2.IVpc;
  readonly svc: DualAlbFargateService;
  constructor(scope: cdk.Construct, id: string, props: LaravelProps) {
    super(scope, id);

    this.vpc = props.vpc ?? getOrCreateVpc(this);

    const logGroup = new logs.LogGroup(this, 'LogGroup', {
      retention: logs.RetentionDays.ONE_MONTH,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const task = new ecs.FargateTaskDefinition(this, 'Task', props.fargateTaskDefinitionProps ? props.fargateTaskDefinitionProps : {
      cpu: 512,
      memoryLimitMiB: 1024,
    });

    task.addContainer('Laravel', {
      image: ecs.ContainerImage.fromAsset(props.code),
      portMappings: [{ containerPort: props.containerPort ?? 80 }],
      environment: props.db ? {
        Laravel_DB_NAME: 'Laravel',
      } : {},
      logging: new ecs.AwsLogDriver({
        streamPrefix: 'Laravel-Service',
        logGroup,
      }),
      secrets: props.db ? {
        LARAVEL_DB_HOST: ecs.Secret.fromSecretsManager(
          props.db.secret,
          'host',
        ),
        LARAVEL_DB_USER: ecs.Secret.fromSecretsManager(
          props.db.secret,
          'username',
        ),
        LARAVEL_DB_PASSWORD: ecs.Secret.fromSecretsManager(
          props.db.secret,
          'password',
        ),
      } : {},
    });

    const healthCheck = {
      path: props.healthCheckPath ? props.healthCheckPath : '/',
      interval: cdk.Duration.minutes(1),
      healthCheck: {
        healthyHttpCodes: props.healthCheckCode ? props.healthCheckCode : '200',
      },
    };

    var serviceProps = [
      {
        external: props.cert ? { port: 443, certificate: [props.cert] } : { port: 80 },
        task,
        healthCheck,
      },
    ];

    this.svc = new DualAlbFargateService(this, 'ALBFargateService', {
      vpc: this.vpc,
      spot: props.spot,
      enableExecuteCommand: props.enableExecuteCommand,
      tasks: serviceProps,
      route53Ops: { enableLoadBalancerAlias: false },
    });

    if (props.efsFileSystem) {
      // EFS volume
      const filesystem = new efs.FileSystem(this, 'FileSystem', props.efsFileSystem);

      const volumeName = 'efs';
      this.svc.service[0].taskDefinition.addVolume({
        name: volumeName,
        efsVolumeConfiguration: {
          fileSystemId: filesystem.fileSystemId,
        },
      });

      // fix me - tentatively mount to /efsmount
      this.svc.service[0].taskDefinition.defaultContainer?.addMountPoints({
        containerPath: '/efsmount',
        readOnly: false,
        sourceVolume: volumeName,
      });

      filesystem.connections.allowFrom(new ec2.Connections({ securityGroups: this.svc.service[0].connections.securityGroups }), ec2.Port.tcp(2049), 'allow Laravel to connect to efs filesystem');
    }
  }
}