import type { Pools } from "../pools/pools";

type SystemBase<TPool> = {
  update: (pools: Pools<TPool>, delta: number) => void | Promise<void>;
  priority?: number;
  initialize?: (pools: Pools<TPool>, delta: number) => void | Promise<void>;
  initialized?: boolean;
  cleanup?: () => void | Promise<void>;
};

type System<
  TPool,
  TSystem extends SystemBase<TPool> = SystemBase<TPool>
> = TSystem;

export type { System, SystemBase };
