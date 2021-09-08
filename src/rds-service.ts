import * as ec2 from '@aws-cdk/aws-ec2';
import * as rds from '@aws-cdk/aws-rds';
import * as secretsmanager from '@aws-cdk/aws-secretsmanager';
import * as cdk from '@aws-cdk/core';
import { printOutput } from './common/util';

export interface RdsServiceProps {
  readonly cluster: Boolean;
  // readonly instanceType: ec2.InstanceType,
  // readonly version: rds.AuroraMysqlEngineVersion,
  // readonly version: rds.MariaDbEngineVersion,
  readonly username: string;
  readonly vpc: ec2.IVpc;
  // readonly vpcSubnetType: ec2.SubnetType,
  readonly securityGroup?: ec2.ISecurityGroup[];
  readonly databaseName?: string;
  readonly backupRetention?: cdk.Duration;
}

export interface DatabaseCofig {
  /**
     * The database secret.
     */
  readonly secret: secretsmanager.ISecret;
  /**
     * The database connnections.
     */
  readonly connections: ec2.Connections;
  /**
     * The endpoint address for the database.
     */
  readonly endpoint: string;
  /**
     * The databasae identifier.
     */
  readonly identifier: string;
}

export class RdsService extends cdk.Construct {
  readonly clusterEndpointHostname: string;
  readonly clusterIdentifier: string;
  readonly secret: secretsmanager.ISecret;
  readonly connections: ec2.Connections;

  constructor(scope: cdk.Construct, id: string, props: RdsServiceProps) {
    super(scope, id);
    var config = null;
    if (props.cluster) {
      config = this._createRdsCluster(props);
    } else {
      config = this._createRdsInstance(props);
    }

    this.secret = config.secret;
    this.clusterEndpointHostname = config.endpoint;
    this.clusterIdentifier = config.identifier;
    this.connections = config.connections;


    printOutput(this, 'HiiiDBSecretArn - ', config.secret.secretArn);
    printOutput(this, 'HiiiDBSecretValue - ', config.secret.secretValue.toJSON());
    printOutput(this, 'HiiiClusterEndpointHostname - ', this.clusterEndpointHostname);
    printOutput(this, 'HiiiClusterIdentifier - ', this.clusterIdentifier);
  }

  private _createRdsInstance(props: RdsServiceProps): DatabaseCofig {
    const dbInstance = new rds.DatabaseInstance(this, 'HiiiDbInstance', {
      vpc: props.vpc,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PUBLIC,
      },
      engine: rds.DatabaseInstanceEngine.mariaDb({ version: rds.MariaDbEngineVersion.VER_10_5_9 }),
      credentials: rds.Credentials.fromGeneratedSecret(props.username),
      databaseName: props.databaseName,
      //cluster 最小 t3.MICRO
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
      securityGroups: props.securityGroup,
    });

    return {
      connections: dbInstance.connections,
      endpoint: dbInstance.dbInstanceEndpointAddress,
      identifier: dbInstance.instanceIdentifier,
      secret: dbInstance.secret!,
    };
  }

  private _createRdsCluster(props: RdsServiceProps): DatabaseCofig {
    const dbCluster = new rds.DatabaseCluster(this, 'HiiiDBCluster', {
      engine: rds.DatabaseClusterEngine.auroraMysql({ version: rds.AuroraMysqlEngineVersion.VER_2_08_1 }),
      credentials: rds.Credentials.fromGeneratedSecret(props.username),
      defaultDatabaseName: props.databaseName,
      instanceProps: {
        //cluster 最小 t3.small
        instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.SMALL),
        vpcSubnets: {
          subnetType: ec2.SubnetType.PUBLIC,
        },
        securityGroups: props.securityGroup,
        vpc: props.vpc,
      },
      parameterGroup: rds.ParameterGroup.fromParameterGroupName(this, 'HiiiParameterGroup', 'default.aurora-mysql5.7'),
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    return {
      connections: dbCluster.connections,
      endpoint: dbCluster.clusterEndpoint.hostname,
      identifier: dbCluster.clusterIdentifier,
      secret: dbCluster.secret!,
    };
  }
}


