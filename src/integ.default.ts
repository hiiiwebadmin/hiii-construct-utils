import * as cdk from '@aws-cdk/core';

import * as hiii from './index';

export class IntegTesting {

  readonly stacks: cdk.Stack[];

  constructor() {
    const env = { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION };
    const app = new cdk.App();
    const stackName = 'rds-service-stack';
    const stack = new cdk.Stack(app, stackName, { env });

    new hiii.RdsService(stack, 'rds-service', {
      cluster: true,
      username: 'hiii',
      vpc: hiii.getOrCreateVpc(stack),
      databaseName: 'hiii_default',
    });
    this.stacks = [stack];
  }
}

new IntegTesting();