# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### BaseFargateService <a name="hiii-construct-utils.BaseFargateService"></a>

#### Initializers <a name="hiii-construct-utils.BaseFargateService.Initializer"></a>

```typescript
import { BaseFargateService } from 'hiii-construct-utils'

new BaseFargateService(scope: Construct, id: string, props: BaseFargateServiceProps)
```

##### `scope`<sup>Required</sup> <a name="hiii-construct-utils.BaseFargateService.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="hiii-construct-utils.BaseFargateService.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="hiii-construct-utils.BaseFargateService.parameter.props"></a>

- *Type:* [`hiii-construct-utils.BaseFargateServiceProps`](#hiii-construct-utils.BaseFargateServiceProps)

---



#### Properties <a name="Properties"></a>

##### `service`<sup>Required</sup> <a name="hiii-construct-utils.BaseFargateService.property.service"></a>

- *Type:* [`@aws-cdk/aws-ecs.FargateService`](#@aws-cdk/aws-ecs.FargateService)[]

The service(s) created from the task(s).

---

##### `vpc`<sup>Required</sup> <a name="hiii-construct-utils.BaseFargateService.property.vpc"></a>

- *Type:* [`@aws-cdk/aws-ec2.IVpc`](#@aws-cdk/aws-ec2.IVpc)

The VPC.

---


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





### DualAlbFargateService <a name="hiii-construct-utils.DualAlbFargateService"></a>

#### Initializers <a name="hiii-construct-utils.DualAlbFargateService.Initializer"></a>

```typescript
import { DualAlbFargateService } from 'hiii-construct-utils'

new DualAlbFargateService(scope: Construct, id: string, props: DualAlbFargateServiceProps)
```

##### `scope`<sup>Required</sup> <a name="hiii-construct-utils.DualAlbFargateService.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="hiii-construct-utils.DualAlbFargateService.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="hiii-construct-utils.DualAlbFargateService.parameter.props"></a>

- *Type:* [`hiii-construct-utils.DualAlbFargateServiceProps`](#hiii-construct-utils.DualAlbFargateServiceProps)

---



#### Properties <a name="Properties"></a>

##### `externalAlb`<sup>Optional</sup> <a name="hiii-construct-utils.DualAlbFargateService.property.externalAlb"></a>

- *Type:* [`@aws-cdk/aws-elasticloadbalancingv2.ApplicationLoadBalancer`](#@aws-cdk/aws-elasticloadbalancingv2.ApplicationLoadBalancer)

The external ALB.

---

##### `internalAlb`<sup>Optional</sup> <a name="hiii-construct-utils.DualAlbFargateService.property.internalAlb"></a>

- *Type:* [`@aws-cdk/aws-elasticloadbalancingv2.ApplicationLoadBalancer`](#@aws-cdk/aws-elasticloadbalancingv2.ApplicationLoadBalancer)

The internal ALB.

---


### DualNlbFargateService <a name="hiii-construct-utils.DualNlbFargateService"></a>

#### Initializers <a name="hiii-construct-utils.DualNlbFargateService.Initializer"></a>

```typescript
import { DualNlbFargateService } from 'hiii-construct-utils'

new DualNlbFargateService(scope: Construct, id: string, props: DualNlbFargateServiceProps)
```

##### `scope`<sup>Required</sup> <a name="hiii-construct-utils.DualNlbFargateService.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="hiii-construct-utils.DualNlbFargateService.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="hiii-construct-utils.DualNlbFargateService.parameter.props"></a>

- *Type:* [`hiii-construct-utils.DualNlbFargateServiceProps`](#hiii-construct-utils.DualNlbFargateServiceProps)

---



#### Properties <a name="Properties"></a>

##### `externalNlb`<sup>Optional</sup> <a name="hiii-construct-utils.DualNlbFargateService.property.externalNlb"></a>

- *Type:* [`@aws-cdk/aws-elasticloadbalancingv2.NetworkLoadBalancer`](#@aws-cdk/aws-elasticloadbalancingv2.NetworkLoadBalancer)

The external Nlb.

---

##### `internalNlb`<sup>Optional</sup> <a name="hiii-construct-utils.DualNlbFargateService.property.internalNlb"></a>

- *Type:* [`@aws-cdk/aws-elasticloadbalancingv2.NetworkLoadBalancer`](#@aws-cdk/aws-elasticloadbalancingv2.NetworkLoadBalancer)

The internal Nlb.

---


### LaravelService <a name="hiii-construct-utils.LaravelService"></a>

#### Initializers <a name="hiii-construct-utils.LaravelService.Initializer"></a>

```typescript
import { LaravelService } from 'hiii-construct-utils'

new LaravelService(scope: Construct, id: string, props: LaravelProps)
```

##### `scope`<sup>Required</sup> <a name="hiii-construct-utils.LaravelService.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="hiii-construct-utils.LaravelService.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="hiii-construct-utils.LaravelService.parameter.props"></a>

- *Type:* [`hiii-construct-utils.LaravelProps`](#hiii-construct-utils.LaravelProps)

---



#### Properties <a name="Properties"></a>

##### `svc`<sup>Required</sup> <a name="hiii-construct-utils.LaravelService.property.svc"></a>

- *Type:* [`hiii-construct-utils.DualAlbFargateService`](#hiii-construct-utils.DualAlbFargateService)

---

##### `vpc`<sup>Required</sup> <a name="hiii-construct-utils.LaravelService.property.vpc"></a>

- *Type:* [`@aws-cdk/aws-ec2.IVpc`](#@aws-cdk/aws-ec2.IVpc)

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

### BaseFargateServiceProps <a name="hiii-construct-utils.BaseFargateServiceProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { BaseFargateServiceProps } from 'hiii-construct-utils'

const baseFargateServiceProps: BaseFargateServiceProps = { ... }
```

##### `tasks`<sup>Required</sup> <a name="hiii-construct-utils.BaseFargateServiceProps.property.tasks"></a>

- *Type:* [`hiii-construct-utils.FargateTaskProps`](#hiii-construct-utils.FargateTaskProps)[]

---

##### `circuitBreaker`<sup>Optional</sup> <a name="hiii-construct-utils.BaseFargateServiceProps.property.circuitBreaker"></a>

- *Type:* `boolean`
- *Default:* true

Enable the ECS service circuit breaker.

> - https://aws.amazon.com/tw/blogs/containers/announcing-amazon-ecs-deployment-circuit-breaker/

---

##### `cluster`<sup>Optional</sup> <a name="hiii-construct-utils.BaseFargateServiceProps.property.cluster"></a>

- *Type:* [`@aws-cdk/aws-ecs.ICluster`](#@aws-cdk/aws-ecs.ICluster)
- *Default:* create a new ECS Cluster.

Use existing ECS Cluster.

---

##### `clusterProps`<sup>Optional</sup> <a name="hiii-construct-utils.BaseFargateServiceProps.property.clusterProps"></a>

- *Type:* [`@aws-cdk/aws-ecs.ClusterProps`](#@aws-cdk/aws-ecs.ClusterProps)
- *Default:* Create vpc and enable Fargate Capacity Providers.

The properties used to define an ECS cluster.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="hiii-construct-utils.BaseFargateServiceProps.property.enableExecuteCommand"></a>

- *Type:* `boolean`
- *Default:* false

Whether to enable ECS Exec support.

> https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html

---

##### `route53Ops`<sup>Optional</sup> <a name="hiii-construct-utils.BaseFargateServiceProps.property.route53Ops"></a>

- *Type:* [`hiii-construct-utils.Route53Options`](#hiii-construct-utils.Route53Options)

---

##### `spot`<sup>Optional</sup> <a name="hiii-construct-utils.BaseFargateServiceProps.property.spot"></a>

- *Type:* `boolean`
- *Default:* false

create a FARGATE_SPOT only cluster.

---

##### `spotTerminationHandler`<sup>Optional</sup> <a name="hiii-construct-utils.BaseFargateServiceProps.property.spotTerminationHandler"></a>

- *Type:* `boolean`
- *Default:* true

Enable the fargate spot termination handler.

> https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html#fargate-capacity-providers-termination

---

##### `vpc`<sup>Optional</sup> <a name="hiii-construct-utils.BaseFargateServiceProps.property.vpc"></a>

- *Type:* [`@aws-cdk/aws-ec2.IVpc`](#@aws-cdk/aws-ec2.IVpc)

---

##### `vpcSubnets`<sup>Optional</sup> <a name="hiii-construct-utils.BaseFargateServiceProps.property.vpcSubnets"></a>

- *Type:* [`@aws-cdk/aws-ec2.SubnetSelection`](#@aws-cdk/aws-ec2.SubnetSelection)
- *Default:* {
subnetType: ec2.SubnetType.PRIVATE,
}

The subnets to associate with the service.

---

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

### DualAlbFargateServiceProps <a name="hiii-construct-utils.DualAlbFargateServiceProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DualAlbFargateServiceProps } from 'hiii-construct-utils'

const dualAlbFargateServiceProps: DualAlbFargateServiceProps = { ... }
```

##### `tasks`<sup>Required</sup> <a name="hiii-construct-utils.DualAlbFargateServiceProps.property.tasks"></a>

- *Type:* [`hiii-construct-utils.FargateTaskProps`](#hiii-construct-utils.FargateTaskProps)[]

---

##### `circuitBreaker`<sup>Optional</sup> <a name="hiii-construct-utils.DualAlbFargateServiceProps.property.circuitBreaker"></a>

- *Type:* `boolean`
- *Default:* true

Enable the ECS service circuit breaker.

> - https://aws.amazon.com/tw/blogs/containers/announcing-amazon-ecs-deployment-circuit-breaker/

---

##### `cluster`<sup>Optional</sup> <a name="hiii-construct-utils.DualAlbFargateServiceProps.property.cluster"></a>

- *Type:* [`@aws-cdk/aws-ecs.ICluster`](#@aws-cdk/aws-ecs.ICluster)
- *Default:* create a new ECS Cluster.

Use existing ECS Cluster.

---

##### `clusterProps`<sup>Optional</sup> <a name="hiii-construct-utils.DualAlbFargateServiceProps.property.clusterProps"></a>

- *Type:* [`@aws-cdk/aws-ecs.ClusterProps`](#@aws-cdk/aws-ecs.ClusterProps)
- *Default:* Create vpc and enable Fargate Capacity Providers.

The properties used to define an ECS cluster.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="hiii-construct-utils.DualAlbFargateServiceProps.property.enableExecuteCommand"></a>

- *Type:* `boolean`
- *Default:* false

Whether to enable ECS Exec support.

> https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html

---

##### `route53Ops`<sup>Optional</sup> <a name="hiii-construct-utils.DualAlbFargateServiceProps.property.route53Ops"></a>

- *Type:* [`hiii-construct-utils.Route53Options`](#hiii-construct-utils.Route53Options)

---

##### `spot`<sup>Optional</sup> <a name="hiii-construct-utils.DualAlbFargateServiceProps.property.spot"></a>

- *Type:* `boolean`
- *Default:* false

create a FARGATE_SPOT only cluster.

---

##### `spotTerminationHandler`<sup>Optional</sup> <a name="hiii-construct-utils.DualAlbFargateServiceProps.property.spotTerminationHandler"></a>

- *Type:* `boolean`
- *Default:* true

Enable the fargate spot termination handler.

> https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html#fargate-capacity-providers-termination

---

##### `vpc`<sup>Optional</sup> <a name="hiii-construct-utils.DualAlbFargateServiceProps.property.vpc"></a>

- *Type:* [`@aws-cdk/aws-ec2.IVpc`](#@aws-cdk/aws-ec2.IVpc)

---

##### `vpcSubnets`<sup>Optional</sup> <a name="hiii-construct-utils.DualAlbFargateServiceProps.property.vpcSubnets"></a>

- *Type:* [`@aws-cdk/aws-ec2.SubnetSelection`](#@aws-cdk/aws-ec2.SubnetSelection)
- *Default:* {
subnetType: ec2.SubnetType.PRIVATE,
}

The subnets to associate with the service.

---

##### `externalAlbIdleTimeout`<sup>Optional</sup> <a name="hiii-construct-utils.DualAlbFargateServiceProps.property.externalAlbIdleTimeout"></a>

- *Type:* [`@aws-cdk/core.Duration`](#@aws-cdk/core.Duration)
- *Default:* 60.

The external load balancer idle timeout, in seconds.

---

##### `externalAlbName`<sup>Optional</sup> <a name="hiii-construct-utils.DualAlbFargateServiceProps.property.externalAlbName"></a>

- *Type:* `string`

Set Up The external ALB Name.

---

##### `internalAlbIdleTimeout`<sup>Optional</sup> <a name="hiii-construct-utils.DualAlbFargateServiceProps.property.internalAlbIdleTimeout"></a>

- *Type:* [`@aws-cdk/core.Duration`](#@aws-cdk/core.Duration)
- *Default:* 60.

The internal load balancer idle timeout, in seconds.

---

##### `internalAlbName`<sup>Optional</sup> <a name="hiii-construct-utils.DualAlbFargateServiceProps.property.internalAlbName"></a>

- *Type:* `string`

Set Up The internal ALB Name.

---

### DualNlbFargateServiceProps <a name="hiii-construct-utils.DualNlbFargateServiceProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DualNlbFargateServiceProps } from 'hiii-construct-utils'

const dualNlbFargateServiceProps: DualNlbFargateServiceProps = { ... }
```

##### `tasks`<sup>Required</sup> <a name="hiii-construct-utils.DualNlbFargateServiceProps.property.tasks"></a>

- *Type:* [`hiii-construct-utils.FargateTaskProps`](#hiii-construct-utils.FargateTaskProps)[]

---

##### `circuitBreaker`<sup>Optional</sup> <a name="hiii-construct-utils.DualNlbFargateServiceProps.property.circuitBreaker"></a>

- *Type:* `boolean`
- *Default:* true

Enable the ECS service circuit breaker.

> - https://aws.amazon.com/tw/blogs/containers/announcing-amazon-ecs-deployment-circuit-breaker/

---

##### `cluster`<sup>Optional</sup> <a name="hiii-construct-utils.DualNlbFargateServiceProps.property.cluster"></a>

- *Type:* [`@aws-cdk/aws-ecs.ICluster`](#@aws-cdk/aws-ecs.ICluster)
- *Default:* create a new ECS Cluster.

Use existing ECS Cluster.

---

##### `clusterProps`<sup>Optional</sup> <a name="hiii-construct-utils.DualNlbFargateServiceProps.property.clusterProps"></a>

- *Type:* [`@aws-cdk/aws-ecs.ClusterProps`](#@aws-cdk/aws-ecs.ClusterProps)
- *Default:* Create vpc and enable Fargate Capacity Providers.

The properties used to define an ECS cluster.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="hiii-construct-utils.DualNlbFargateServiceProps.property.enableExecuteCommand"></a>

- *Type:* `boolean`
- *Default:* false

Whether to enable ECS Exec support.

> https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html

---

##### `route53Ops`<sup>Optional</sup> <a name="hiii-construct-utils.DualNlbFargateServiceProps.property.route53Ops"></a>

- *Type:* [`hiii-construct-utils.Route53Options`](#hiii-construct-utils.Route53Options)

---

##### `spot`<sup>Optional</sup> <a name="hiii-construct-utils.DualNlbFargateServiceProps.property.spot"></a>

- *Type:* `boolean`
- *Default:* false

create a FARGATE_SPOT only cluster.

---

##### `spotTerminationHandler`<sup>Optional</sup> <a name="hiii-construct-utils.DualNlbFargateServiceProps.property.spotTerminationHandler"></a>

- *Type:* `boolean`
- *Default:* true

Enable the fargate spot termination handler.

> https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html#fargate-capacity-providers-termination

---

##### `vpc`<sup>Optional</sup> <a name="hiii-construct-utils.DualNlbFargateServiceProps.property.vpc"></a>

- *Type:* [`@aws-cdk/aws-ec2.IVpc`](#@aws-cdk/aws-ec2.IVpc)

---

##### `vpcSubnets`<sup>Optional</sup> <a name="hiii-construct-utils.DualNlbFargateServiceProps.property.vpcSubnets"></a>

- *Type:* [`@aws-cdk/aws-ec2.SubnetSelection`](#@aws-cdk/aws-ec2.SubnetSelection)
- *Default:* {
subnetType: ec2.SubnetType.PRIVATE,
}

The subnets to associate with the service.

---

### FargateTaskProps <a name="hiii-construct-utils.FargateTaskProps"></a>

Task properties for the Fargate.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { FargateTaskProps } from 'hiii-construct-utils'

const fargateTaskProps: FargateTaskProps = { ... }
```

##### `task`<sup>Required</sup> <a name="hiii-construct-utils.FargateTaskProps.property.task"></a>

- *Type:* [`@aws-cdk/aws-ecs.FargateTaskDefinition`](#@aws-cdk/aws-ecs.FargateTaskDefinition)

---

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="hiii-construct-utils.FargateTaskProps.property.capacityProviderStrategy"></a>

- *Type:* [`@aws-cdk/aws-ecs.CapacityProviderStrategy`](#@aws-cdk/aws-ecs.CapacityProviderStrategy)[]

Customized capacity provider strategy.

---

##### `desiredCount`<sup>Optional</sup> <a name="hiii-construct-utils.FargateTaskProps.property.desiredCount"></a>

- *Type:* `number`
- *Default:* 1

desired number of tasks for the service.

---

##### `external`<sup>Optional</sup> <a name="hiii-construct-utils.FargateTaskProps.property.external"></a>

- *Type:* [`hiii-construct-utils.LoadBalancerAccessibility`](#hiii-construct-utils.LoadBalancerAccessibility)
- *Default:* no external listener

The external ELB listener.

---

##### `healthCheck`<sup>Optional</sup> <a name="hiii-construct-utils.FargateTaskProps.property.healthCheck"></a>

- *Type:* [`@aws-cdk/aws-elasticloadbalancingv2.HealthCheck`](#@aws-cdk/aws-elasticloadbalancingv2.HealthCheck)

health check from elbv2 target group.

---

##### `healthCheckGracePeriod`<sup>Optional</sup> <a name="hiii-construct-utils.FargateTaskProps.property.healthCheckGracePeriod"></a>

- *Type:* [`@aws-cdk/core.Duration`](#@aws-cdk/core.Duration)
- *Default:* cdk.Duration.seconds(60),

The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing target health checks after a task has first started.

---

##### `internal`<sup>Optional</sup> <a name="hiii-construct-utils.FargateTaskProps.property.internal"></a>

- *Type:* [`hiii-construct-utils.LoadBalancerAccessibility`](#hiii-construct-utils.LoadBalancerAccessibility)
- *Default:* no internal listener

The internal ELB listener.

---

##### `maxHealthyPercent`<sup>Optional</sup> <a name="hiii-construct-utils.FargateTaskProps.property.maxHealthyPercent"></a>

- *Type:* `number`
- *Default:* 200

The maximum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that can run in a service during a deployment.

---

##### `minHealthyPercent`<sup>Optional</sup> <a name="hiii-construct-utils.FargateTaskProps.property.minHealthyPercent"></a>

- *Type:* `number`
- *Default:* 50

The minimum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that must continue to run and remain healthy during a deployment.

---

##### `protocol`<sup>Optional</sup> <a name="hiii-construct-utils.FargateTaskProps.property.protocol"></a>

- *Type:* [`@aws-cdk/aws-elasticloadbalancingv2.Protocol`](#@aws-cdk/aws-elasticloadbalancingv2.Protocol)
- *Default:* TCP

The target group protocol for NLB.

For ALB, this option will be ignored and always set to HTTP.

---

##### `protocolVersion`<sup>Optional</sup> <a name="hiii-construct-utils.FargateTaskProps.property.protocolVersion"></a>

- *Type:* [`@aws-cdk/aws-elasticloadbalancingv2.ApplicationProtocolVersion`](#@aws-cdk/aws-elasticloadbalancingv2.ApplicationProtocolVersion)

The protocol version to use.

---

##### `scalingPolicy`<sup>Optional</sup> <a name="hiii-construct-utils.FargateTaskProps.property.scalingPolicy"></a>

- *Type:* [`hiii-construct-utils.ServiceScalingPolicy`](#hiii-construct-utils.ServiceScalingPolicy)
- *Default:* { maxCapacity: 10, targetCpuUtilization: 50, requestsPerTarget: 1000 }

service autoscaling policy.

---

##### `serviceName`<sup>Optional</sup> <a name="hiii-construct-utils.FargateTaskProps.property.serviceName"></a>

- *Type:* `string`
- *Default:* auto-generated

The serviceName.

---

### LaravelProps <a name="hiii-construct-utils.LaravelProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { LaravelProps } from 'hiii-construct-utils'

const laravelProps: LaravelProps = { ... }
```

##### `code`<sup>Required</sup> <a name="hiii-construct-utils.LaravelProps.property.code"></a>

- *Type:* `string`

The local path to the Laravel code base.

---

##### `fromRegistry`<sup>Required</sup> <a name="hiii-construct-utils.LaravelProps.property.fromRegistry"></a>

- *Type:* `boolean`

---

##### `cert`<sup>Optional</sup> <a name="hiii-construct-utils.LaravelProps.property.cert"></a>

- *Type:* [`@aws-cdk/aws-certificatemanager.ICertificate`](#@aws-cdk/aws-certificatemanager.ICertificate)

This is the FargateTaskProps below.

---

##### `cluster`<sup>Optional</sup> <a name="hiii-construct-utils.LaravelProps.property.cluster"></a>

- *Type:* [`@aws-cdk/aws-ecs.ICluster`](#@aws-cdk/aws-ecs.ICluster)
- *Default:* create a new ECS Cluster.

Use existing ECS Cluster.

---

##### `containerPort`<sup>Optional</sup> <a name="hiii-construct-utils.LaravelProps.property.containerPort"></a>

- *Type:* `number`
- *Default:* 80

The Laravel container port.

---

##### `db`<sup>Optional</sup> <a name="hiii-construct-utils.LaravelProps.property.db"></a>

- *Type:* [`hiii-construct-utils.RdsService`](#hiii-construct-utils.RdsService)

---

##### `efsFileSystem`<sup>Optional</sup> <a name="hiii-construct-utils.LaravelProps.property.efsFileSystem"></a>

- *Type:* [`@aws-cdk/aws-efs.FileSystemProps`](#@aws-cdk/aws-efs.FileSystemProps)

Options to create the EFS FileSystem.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="hiii-construct-utils.LaravelProps.property.enableExecuteCommand"></a>

- *Type:* `boolean`

enable ECS Exec.

---

##### `environment`<sup>Optional</sup> <a name="hiii-construct-utils.LaravelProps.property.environment"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `externalAlbIdleTimeout`<sup>Optional</sup> <a name="hiii-construct-utils.LaravelProps.property.externalAlbIdleTimeout"></a>

- *Type:* [`@aws-cdk/core.Duration`](#@aws-cdk/core.Duration)
- *Default:* 60.

The external load balancer idle timeout, in seconds.

---

##### `externalAlbName`<sup>Optional</sup> <a name="hiii-construct-utils.LaravelProps.property.externalAlbName"></a>

- *Type:* `string`

Set Up The external ALB Name.

---

##### `fargateTaskDefinitionProps`<sup>Optional</sup> <a name="hiii-construct-utils.LaravelProps.property.fargateTaskDefinitionProps"></a>

- *Type:* [`@aws-cdk/aws-ecs.FargateTaskDefinitionProps`](#@aws-cdk/aws-ecs.FargateTaskDefinitionProps)

https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-cpu-memory-error.html.

---

##### `healthCheckCode`<sup>Optional</sup> <a name="hiii-construct-utils.LaravelProps.property.healthCheckCode"></a>

- *Type:* `string`

---

##### `healthCheckPath`<sup>Optional</sup> <a name="hiii-construct-utils.LaravelProps.property.healthCheckPath"></a>

- *Type:* `string`

---

##### `internalAlbIdleTimeout`<sup>Optional</sup> <a name="hiii-construct-utils.LaravelProps.property.internalAlbIdleTimeout"></a>

- *Type:* [`@aws-cdk/core.Duration`](#@aws-cdk/core.Duration)
- *Default:* 60.

The internal load balancer idle timeout, in seconds.

---

##### `internalAlbName`<sup>Optional</sup> <a name="hiii-construct-utils.LaravelProps.property.internalAlbName"></a>

- *Type:* `string`

Set Up The internal ALB Name.

---

##### `secretEnvironment`<sup>Optional</sup> <a name="hiii-construct-utils.LaravelProps.property.secretEnvironment"></a>

- *Type:* {[ key: string ]: [`@aws-cdk/aws-ecs.Secret`](#@aws-cdk/aws-ecs.Secret)}

---

##### `spot`<sup>Optional</sup> <a name="hiii-construct-utils.LaravelProps.property.spot"></a>

- *Type:* `boolean`

enable fargate spot.

---

##### `vpc`<sup>Optional</sup> <a name="hiii-construct-utils.LaravelProps.property.vpc"></a>

- *Type:* [`@aws-cdk/aws-ec2.IVpc`](#@aws-cdk/aws-ec2.IVpc)

---

### LoadBalancerAccessibility <a name="hiii-construct-utils.LoadBalancerAccessibility"></a>

The load balancer accessibility.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { LoadBalancerAccessibility } from 'hiii-construct-utils'

const loadBalancerAccessibility: LoadBalancerAccessibility = { ... }
```

##### `port`<sup>Required</sup> <a name="hiii-construct-utils.LoadBalancerAccessibility.property.port"></a>

- *Type:* `number`

The port of the listener.

---

##### `certificate`<sup>Optional</sup> <a name="hiii-construct-utils.LoadBalancerAccessibility.property.certificate"></a>

- *Type:* [`@aws-cdk/aws-certificatemanager.ICertificate`](#@aws-cdk/aws-certificatemanager.ICertificate)[]
- *Default:* no certificate(HTTP only)

The ACM certificate for the HTTPS listener.

---

##### `forwardConditions`<sup>Optional</sup> <a name="hiii-construct-utils.LoadBalancerAccessibility.property.forwardConditions"></a>

- *Type:* [`@aws-cdk/aws-elasticloadbalancingv2.ListenerCondition`](#@aws-cdk/aws-elasticloadbalancingv2.ListenerCondition)[]
- *Default:* no forward conditions.

Listener forward conditions.

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

##### `backupRetention`<sup>Optional</sup> <a name="hiii-construct-utils.RdsServiceProps.property.backupRetention"></a>

- *Type:* [`@aws-cdk/core.Duration`](#@aws-cdk/core.Duration)

---

##### `databaseName`<sup>Optional</sup> <a name="hiii-construct-utils.RdsServiceProps.property.databaseName"></a>

- *Type:* `string`

---

##### `securityGroup`<sup>Optional</sup> <a name="hiii-construct-utils.RdsServiceProps.property.securityGroup"></a>

- *Type:* [`@aws-cdk/aws-ec2.ISecurityGroup`](#@aws-cdk/aws-ec2.ISecurityGroup)[]

---

##### `vpc`<sup>Optional</sup> <a name="hiii-construct-utils.RdsServiceProps.property.vpc"></a>

- *Type:* [`@aws-cdk/aws-ec2.IVpc`](#@aws-cdk/aws-ec2.IVpc)

---

### Route53Options <a name="hiii-construct-utils.Route53Options"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { Route53Options } from 'hiii-construct-utils'

const route53Options: Route53Options = { ... }
```

##### `enableLoadBalancerAlias`<sup>Optional</sup> <a name="hiii-construct-utils.Route53Options.property.enableLoadBalancerAlias"></a>

- *Type:* `boolean`
- *Default:* true

Whether to configure the ALIAS for the LB.

---

##### `externalElbRecordName`<sup>Optional</sup> <a name="hiii-construct-utils.Route53Options.property.externalElbRecordName"></a>

- *Type:* `string`
- *Default:* external

the external ELB record name.

---

##### `internalElbRecordName`<sup>Optional</sup> <a name="hiii-construct-utils.Route53Options.property.internalElbRecordName"></a>

- *Type:* `string`
- *Default:* internal

the internal ELB record name.

---

##### `zoneName`<sup>Optional</sup> <a name="hiii-construct-utils.Route53Options.property.zoneName"></a>

- *Type:* `string`
- *Default:* svc.local

private zone name.

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

### ServiceScalingPolicy <a name="hiii-construct-utils.ServiceScalingPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceScalingPolicy } from 'hiii-construct-utils'

const serviceScalingPolicy: ServiceScalingPolicy = { ... }
```

##### `maxCapacity`<sup>Optional</sup> <a name="hiii-construct-utils.ServiceScalingPolicy.property.maxCapacity"></a>

- *Type:* `number`
- *Default:* 10

max capacity for the service autoscaling.

---

##### `requestPerTarget`<sup>Optional</sup> <a name="hiii-construct-utils.ServiceScalingPolicy.property.requestPerTarget"></a>

- *Type:* `number`
- *Default:* 1000

request per target.

---

##### `targetCpuUtilization`<sup>Optional</sup> <a name="hiii-construct-utils.ServiceScalingPolicy.property.targetCpuUtilization"></a>

- *Type:* `number`
- *Default:* 50

target cpu utilization.

---



