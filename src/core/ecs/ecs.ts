import { Entities } from "../entity/entities";
import { Pools } from "../pools/pools";
import { System } from "../system/system";

type ECS<T> = {
  entities: Entities;
  pools: Pools<T>;
  systems: System<T>[];

  initialized: boolean | null;
};

export type { ECS };
