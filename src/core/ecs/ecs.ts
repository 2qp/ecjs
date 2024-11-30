import type { Entities } from "../entities/entities";
import type { Entity } from "../entity/entity";
import type { Pools } from "../pools/pools";
import type { System } from "../system/system";

type ECSBase<
  TPools,
  TEntity extends Entity = Entity,
  TSystem extends System<TPools> = System<TPools>
> = {
  entities: Entities<TEntity>;
  pools: Pools<TPools>;
  systems: System<TPools, TSystem>[];
  initialized: boolean | null;
};

type ECS<
  TPools,
  TEntities extends Entity = Entity,
  TSystems extends System<TPools> = System<TPools>,
  TECS extends ECSBase<TPools, TEntities, TSystems> = ECSBase<
    TPools,
    TEntities,
    TSystems
  >
> = TECS;

export type { ECS, ECSBase };
