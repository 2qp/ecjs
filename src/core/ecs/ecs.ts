import type { Entities } from "../entities/entities";
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
  systems: System<TPools, TSystem>[];
  initialized: boolean | null;
};

type ECS<
  TPools,
  TSystems extends SystemBase<TPools>,
  TEntities extends EntityBase,
  TECS extends ECSBase<TPools, TSystems, TEntities> = ECSBase<
    TPools,
    TSystems,
    TEntities
  >
> = TECS;

export type { ECS, ECSBase };
