import type { Entities } from "../entity/entities";
import type { EntityBase } from "../entity/entity";
import type { Pools } from "../pools/pools";
import type { System, SystemBase } from "../system/system";

type ECSBase<T extends SystemBase<T>, U extends EntityBase> = {
  entities: Entities<U>;
  pools: Pools<T>;
  systems: System<T>[];
  initialized: boolean | null;
};

type ECS<
  T extends ECSBase<U, V>,
  U extends SystemBase<U>,
  V extends EntityBase
> = T;

export type { ECS };
