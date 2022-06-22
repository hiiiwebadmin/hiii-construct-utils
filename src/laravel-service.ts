import * as acm from '@aws-cdk/aws-certificatemanager';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as ecr from '@aws-cdk/aws-ecr';
import * as ecs from '@aws-cdk/aws-ecs';
import * as efs from '@aws-cdk/aws-efs';
import * as logs from '@aws-cdk/aws-logs';
import * as cdk from '@aws-cdk/core';
import { DualAlbFargateService, RdsService } from './';
import { getOrCreateVpc, printOutput } from './common/util';


export interface LaravelProps {
  readonly fromRegistry: boolean;

  /**
   * Use existing ECS Cluster.
   * @default - create a new ECS Cluster.
   */
  readonly cluster?: ecs.ICluster;

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
  readonly fargateTaskDefinitionProps?: ecs.FargateTaskDefinitionProps;

  /**
  *This is the FargateTaskProps below
  */

  readonly cert?: acm.ICertificate[];

  readonly healthCheckPath?: string;
  readonly healthCheckCode?: string;

  readonly environment?: {
    [key: string]: string;
  };

  readonly secretEnvironment?: {
    [key: string]: ecs.Secret;
  };

  /**
   * Set Up The external ALB Name
   */
  readonly externalAlbName?: string;
  /**
   * Set Up The internal ALB Name
   */
  readonly internalAlbName?: string;

  /**
   * The external load balancer idle timeout, in seconds.
   * @default - 60.
  */
  readonly externalAlbIdleTimeout?: cdk.Duration;

  /**
   * The internal load balancer idle timeout, in seconds.
   * @default - 60.
  */
  readonly internalAlbIdleTimeout?: cdk.Duration;


  /**
   * Set Deployment Type
   * @default ecs.DeploymentControllerType.ECS
  */
  readonly deployType?: ecs.DeploymentControllerType;


  /**
   * Set Log Group Name
   * @default null
  */
  readonly logGroupName?: string;

  /**
 * The security groups to associate with the fargate service.
 *
 * @default - A new security group is created.
 */
  readonly fargateServiceSecruityGroups?: ec2.ISecurityGroup[];


  /**
* The security groups to associate with the Load Balancer.
*
* @default - A new security group is created.
*/
  readonly albSecruityGroup?: ec2.ISecurityGroup;
}

export class LaravelService extends cdk.Construct {
  readonly vpc: ec2.IVpc;
  readonly svc: DualAlbFargateService;
  constructor(scope: cdk.Construct, id: string, props: LaravelProps) {
    super(scope, id);

    this.vpc = props.vpc ?? getOrCreateVpc(this);

    const logGroup = new logs.LogGroup(this, 'LogGroup', {
      logGroupName: props.logGroupName,
      retention: logs.RetentionDays.ONE_MONTH,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const task = new ecs.FargateTaskDefinition(this, 'Task', props.fargateTaskDefinitionProps ? props.fargateTaskDefinitionProps : {
      cpu: 512,
      memoryLimitMiB: 1024,
    });

    var image = null;
    if (props.fromRegistry) {
      const repos = ecr.Repository.fromRepositoryName(this, 'from-arn', props.code);
      image = ecs.ContainerImage.fromEcrRepository(repos, 'latest');
    } else {
      image = ecs.ContainerImage.fromAsset(props.code);
    }

    task.addContainer('Laravel', {
      image: image,
      portMappings: [{ containerPort: props.containerPort ?? 80 }],
      environment: props.environment,
      logging: new ecs.AwsLogDriver({
        streamPrefix: 'Laravel-Service',
        logGroup,
      }),
      secrets: props.secretEnvironment,
    });

    printOutput(this, 'HiiiFromRegistry - ', String(props.fromRegistry));
    printOutput(this, 'HiiihealthCheckCode - ', props.healthCheckCode ? props.healthCheckCode : '200');
    printOutput(this, 'HiiihealthCheckPath - ', props.healthCheckPath ? props.healthCheckPath : '/');

    this.svc = new DualAlbFargateService(this, 'ALBFargateService', {
      albSecruityGroup: props.albSecruityGroup,
      fargateServiceSecruityGroups: props.fargateServiceSecruityGroups,
      internalAlbName: props.internalAlbName,
      externalAlbName: props.externalAlbName,
      externalAlbIdleTimeout: props.externalAlbIdleTimeout ? props.externalAlbIdleTimeout : cdk.Duration.seconds(3600),
      internalAlbIdleTimeout: props.internalAlbIdleTimeout ? props.internalAlbIdleTimeout : cdk.Duration.seconds(3600),
      vpc: props.cluster == null ? this.vpc : undefined,
      cluster: props.cluster,
      spot: props.spot,
      enableExecuteCommand: props.enableExecuteCommand,
      tasks: [
        {
          forceHttps: props.cert != null && props.cert.length > 0,
          external: props.cert != null && props.cert.length > 0 ? { port: 443, certificate: props.cert } : { port: 80 },
          deployType: props.deployType,
          task,
          healthCheck: {
            path: props.healthCheckPath ? props.healthCheckPath : '/',
            interval: cdk.Duration.seconds(90),
            healthyHttpCodes: props.healthCheckCode ? props.healthCheckCode : '200',
          },
        },
      ],
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