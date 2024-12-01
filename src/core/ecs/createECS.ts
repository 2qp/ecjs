import type { Entity } from "../entity/entity";
import type { System } from "../system";
import type { ECS } from "./ecs";

type CreateECSParams<
  TPool,
  TEntity extends Entity,
  TSystem extends System<TPool>,
  TECS extends ECS<TPool, TEntity, TSystem>
> = {} & ECS<TPool, TEntity, TSystem, TECS>;

type CreateECSType = <
  TPool,
  TEntity extends Entity = Entity,
  TSystem extends System<TPool> = System<TPool>,
  TECS extends ECS<TPool, TEntity, TSystem> = ECS<TPool, TEntity, TSystem>
>(
  params: CreateECSParams<TPool, TEntity, TSystem, TECS>
) => ECS<TPool, TEntity, TSystem, TECS>;

const createECS: CreateECSType = (props) => props;

export { createECS };
export type { CreateECSParams, CreateECSType };
