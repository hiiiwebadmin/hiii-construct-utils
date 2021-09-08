# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CNameService <a name="hiii-construct-utils.CNameService"></a>

#### Initializers <a name="hiii-construct-utils.CNameService.Initializer"></a>

```typescript
import { CNameService } from 'hiii-construct-utils'

new CNameService(scope: Construct, id: string, props: CNameProps)
```

##### `scope`<sup>Required</sup> <a name="hiii-construct-utils.CNameService.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="hiii-construct-utils.CNameService.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="hiii-construct-utils.CNameService.parameter.props"></a>

- *Type:* [`hiii-construct-utils.CNameProps`](#hiii-construct-utils.CNameProps)

---





### RdsService <a name="hiii-construct-utils.RdsService"></a>

#### Initializers <a name="hiii-construct-utils.RdsService.Initializer"></a>

```typescript
import { RdsService } from 'hiii-construct-utils'

new RdsService(scope: Construct, id: string, props: RdsServiceProps)
```

##### `scope`<sup>Required</sup> <a name="hiii-construct-utils.RdsService.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="hiii-construct-utils.RdsService.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="hiii-construct-utils.RdsService.parameter.props"></a>

- *Type:* [`hiii-construct-utils.RdsServiceProps`](#hiii-construct-utils.RdsServiceProps)

---



#### Properties <a name="Properties"></a>

##### `clusterEndpointHostname`<sup>Required</sup> <a name="hiii-construct-utils.RdsService.property.clusterEndpointHostname"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="hiii-construct-utils.RdsService.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `connections`<sup>Required</sup> <a name="hiii-construct-utils.RdsService.property.connections"></a>

- *Type:* [`@aws-cdk/aws-ec2.Connections`](#@aws-cdk/aws-ec2.Connections)

---

##### `secret`<sup>Required</sup> <a name="hiii-construct-utils.RdsService.property.secret"></a>

- *Type:* [`@aws-cdk/aws-secretsmanager.ISecret`](#@aws-cdk/aws-secretsmanager.ISecret)

---


### S3Service <a name="hiii-construct-utils.S3Service"></a>

#### Initializers <a name="hiii-construct-utils.S3Service.Initializer"></a>

```typescript
import { S3Service } from 'hiii-construct-utils'

new S3Service(scope: Construct, id: string, props: S3ServiceProps)
```

##### `scope`<sup>Required</sup> <a name="hiii-construct-utils.S3Service.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="hiii-construct-utils.S3Service.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="hiii-construct-utils.S3Service.parameter.props"></a>

- *Type:* [`hiii-construct-utils.S3ServiceProps`](#hiii-construct-utils.S3ServiceProps)

---



#### Properties <a name="Properties"></a>

##### `bucketArn`<sup>Required</sup> <a name="hiii-construct-utils.S3Service.property.bucketArn"></a>

- *Type:* `string`

---

##### `bucketName`<sup>Required</sup> <a name="hiii-construct-utils.S3Service.property.bucketName"></a>

- *Type:* `string`

---

##### `bucketRegionalDomainName`<sup>Required</sup> <a name="hiii-construct-utils.S3Service.property.bucketRegionalDomainName"></a>

- *Type:* `string`

---

##### `bucketWebsiteUrl`<sup>Required</sup> <a name="hiii-construct-utils.S3Service.property.bucketWebsiteUrl"></a>

- *Type:* `string`

---


## Structs <a name="Structs"></a>

### CNameProps <a name="hiii-construct-utils.CNameProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { CNameProps } from 'hiii-construct-utils'

const cNameProps: CNameProps = { ... }
```

##### `elbv2`<sup>Required</sup> <a name="hiii-construct-utils.CNameProps.property.elbv2"></a>

- *Type:* [`@aws-cdk/aws-elasticloadbalancingv2.ApplicationLoadBalancer`](#@aws-cdk/aws-elasticloadbalancingv2.ApplicationLoadBalancer)

---

##### `hostZoneId`<sup>Required</sup> <a name="hiii-construct-utils.CNameProps.property.hostZoneId"></a>

- *Type:* `string`

---

##### `recordName`<sup>Required</sup> <a name="hiii-construct-utils.CNameProps.property.recordName"></a>

- *Type:* `string`

---

##### `zoneName`<sup>Required</sup> <a name="hiii-construct-utils.CNameProps.property.zoneName"></a>

- *Type:* `string`

---

### DatabaseCofig <a name="hiii-construct-utils.DatabaseCofig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DatabaseCofig } from 'hiii-construct-utils'

const databaseCofig: DatabaseCofig = { ... }
```

##### `connections`<sup>Required</sup> <a name="hiii-construct-utils.DatabaseCofig.property.connections"></a>

- *Type:* [`@aws-cdk/aws-ec2.Connections`](#@aws-cdk/aws-ec2.Connections)

The database connnections.

---

##### `endpoint`<sup>Required</sup> <a name="hiii-construct-utils.DatabaseCofig.property.endpoint"></a>

- *Type:* `string`

The endpoint address for the database.

---

##### `identifier`<sup>Required</sup> <a name="hiii-construct-utils.DatabaseCofig.property.identifier"></a>

- *Type:* `string`

The databasae identifier.

---

##### `secret`<sup>Required</sup> <a name="hiii-construct-utils.DatabaseCofig.property.secret"></a>

- *Type:* [`@aws-cdk/aws-secretsmanager.ISecret`](#@aws-cdk/aws-secretsmanager.ISecret)

The database secret.

---

### RdsServiceProps <a name="hiii-construct-utils.RdsServiceProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RdsServiceProps } from 'hiii-construct-utils'

const rdsServiceProps: RdsServiceProps = { ... }
```

##### `cluster`<sup>Required</sup> <a name="hiii-construct-utils.RdsServiceProps.property.cluster"></a>

- *Type:* `boolean`

---

##### `username`<sup>Required</sup> <a name="hiii-construct-utils.RdsServiceProps.property.username"></a>

- *Type:* `string`

---

##### `vpc`<sup>Required</sup> <a name="hiii-construct-utils.RdsServiceProps.property.vpc"></a>

- *Type:* [`@aws-cdk/aws-ec2.IVpc`](#@aws-cdk/aws-ec2.IVpc)

---

##### `backupRetention`<sup>Optional</sup> <a name="hiii-construct-utils.RdsServiceProps.property.backupRetention"></a>

- *Type:* [`@aws-cdk/core.Duration`](#@aws-cdk/core.Duration)

---

##### `databaseName`<sup>Optional</sup> <a name="hiii-construct-utils.RdsServiceProps.property.databaseName"></a>

- *Type:* `string`

---

##### `securityGroup`<sup>Optional</sup> <a name="hiii-construct-utils.RdsServiceProps.property.securityGroup"></a>

- *Type:* [`@aws-cdk/aws-ec2.ISecurityGroup`](#@aws-cdk/aws-ec2.ISecurityGroup)[]

---

### S3ServiceProps <a name="hiii-construct-utils.S3ServiceProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { S3ServiceProps } from 'hiii-construct-utils'

const s3ServiceProps: S3ServiceProps = { ... }
```

##### `accessLogBucket`<sup>Required</sup> <a name="hiii-construct-utils.S3ServiceProps.property.accessLogBucket"></a>

- *Type:* `boolean`

---

##### `bucketName`<sup>Required</sup> <a name="hiii-construct-utils.S3ServiceProps.property.bucketName"></a>

- *Type:* `string`

---

##### `accessControl`<sup>Optional</sup> <a name="hiii-construct-utils.S3ServiceProps.property.accessControl"></a>

- *Type:* [`@aws-cdk/aws-s3.BucketAccessControl`](#@aws-cdk/aws-s3.BucketAccessControl)

---

## Classes <a name="Classes"></a>

### Hello <a name="hiii-construct-utils.Hello"></a>

#### Initializers <a name="hiii-construct-utils.Hello.Initializer"></a>

```typescript
import { Hello } from 'hiii-construct-utils'

new Hello()
```

#### Methods <a name="Methods"></a>

##### `sayHello` <a name="hiii-construct-utils.Hello.sayHello"></a>

```typescript
public sayHello()
```





