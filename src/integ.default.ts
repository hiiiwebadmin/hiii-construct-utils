import * as path from 'path';
import * as cdk from '@aws-cdk/core';
import * as hiii from './index';

export class IntegTesting {
  readonly stacks: cdk.Stack[];
  constructor() {
    const env = { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION };
    const app = new cdk.App();
    //this is rds service stack
    const stack = new cdk.Stack(app, 'rds-service-stack', { env });
    new hiii.RdsService(stack, 'rds-service', {
      cluster: true,
      username: 'hiii',
      vpc: hiii.getOrCreateVpc(stack),
      databaseName: 'hiii_default',
    });

    //this is laravel service stack
    const laravelStack = new cdk.Stack(app, 'laravel-service-stack', { env });
    new hiii.LaravelService(laravelStack, 'laravel-service', {
      fromRegistry: false,
      environment: {
        TEST: 'Hiii Test',
      },
      spot: true,
      enableExecuteCommand: true,
      code: path.join(__dirname, '../services/'),
    });
    this.stacks = [stack, laravelStack];
  }
}

new IntegTesting();