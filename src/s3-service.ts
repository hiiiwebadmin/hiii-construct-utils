import { BlockPublicAccess, Bucket, BucketAccessControl, BucketEncryption } from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';
import { RemovalPolicy } from '@aws-cdk/core';
import { printOutput } from './common/util';

export interface S3ServiceProps {
  readonly bucketName: string;
  readonly accessLogBucket: boolean;
  readonly accessControl?: BucketAccessControl;
}

export class S3Service extends cdk.Construct {
  private readonly logPrefix: string = '-logs';
  readonly bucketName: string;
  readonly bucketWebsiteUrl: string;
  readonly bucketRegionalDomainName: string;
  readonly bucketArn: string;

  constructor(scope: cdk.Construct, id: string, props: S3ServiceProps) {
    super(scope, id);

    var logBucket = undefined;
    if (props.accessLogBucket) {
      logBucket = new Bucket(this, 'HiiiBucketLog', {
        encryption: BucketEncryption.S3_MANAGED,
        accessControl: BucketAccessControl.LOG_DELIVERY_WRITE,
        publicReadAccess: false,
        blockPublicAccess: new BlockPublicAccess({
          blockPublicAcls: true,
          ignorePublicAcls: true,
          blockPublicPolicy: true,
          restrictPublicBuckets: true,
        }),
        bucketName: props.bucketName + this.logPrefix,
        enforceSSL: true,
      });

      printOutput(this, 'HiiiLogBucketArn - ', logBucket.bucketArn);
      printOutput(this, 'HiiiLogBucketName - ', logBucket.bucketName);
    }

    const bucket = new Bucket(this, 'HiiiBucketSource', {
      bucketName: props.bucketName,
      encryption: BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      accessControl: props.accessControl,
      removalPolicy: RemovalPolicy.RETAIN,
      blockPublicAccess: new BlockPublicAccess({
        blockPublicAcls: false,
        ignorePublicAcls: false,
        blockPublicPolicy: true,
        restrictPublicBuckets: true,
      }),
      serverAccessLogsBucket: logBucket,
      serverAccessLogsPrefix: 'source-bucket-logs/',
    });

    printOutput(this, 'HiiiCBucketArn - ', bucket.bucketArn);
    printOutput(this, 'HiiiCBucketName - ', bucket.bucketName);

    this.bucketName = bucket.bucketName;
    this.bucketArn = bucket.bucketArn;
    this.bucketRegionalDomainName = bucket.bucketRegionalDomainName;
    this.bucketWebsiteUrl = bucket.bucketWebsiteUrl;
  }
}


