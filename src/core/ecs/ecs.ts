import type { Entities } from "../entity/entities";
import type { EntityBase } from "../entity/entity";
import type { Pools } from "../pools/pools";
import type { System, SystemBase } from "../system/system";

type ECSBase<
  TPools,
  TSystem extends SystemBase<TPools>,
  TEntity extends EntityBase
> = {
  entities: Entities<TEntity>;
  pools: Pools<TPools>;
  systems: System<TSystem, TPools>[];
  initialized: boolean | null;
};

type ECS<
  TECS extends ECSBase<TPools, TSystem, TEntity>,
  TSystem extends SystemBase<TPools>,
  TEntity extends EntityBase,
  TPools
> = TECS;

export type { ECS };
