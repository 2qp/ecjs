import type { Entities } from "../entities/entities";
import type { Entity } from "../entity/entity";
import type { Pools } from "../pools/pools";
import type { System } from "../system/system";

type ECSBase<
  TPool,
  TEntity extends Entity = Entity,
  TSystem extends System<TPool> = System<TPool>
> = {
  entities: Entities<TEntity>;
  pools: Pools<TPool>;
  systems: System<TPool, TSystem>[];
  initialized: boolean | null;
};

type ECS<
  TPool,
  TEntity extends Entity = Entity,
  TSystem extends System<TPool> = System<TPool>,
  TECS extends ECSBase<TPool, TEntity, TSystem> = ECSBase<
    TPool,
    TEntity,
    TSystem
  >
> = TECS;

export type { ECS, ECSBase };
