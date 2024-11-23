import type { Entities } from "../entity/entities";
import type { Pools } from "../pools/pools";
import type { System } from "../system/system";

type ECS<T> = {
  entities: Entities;
  pools: Pools<T>;
  systems: System<T>[];
  initialized: boolean | null;
};

export type { ECS };
