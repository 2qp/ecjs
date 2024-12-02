import type { Pools } from "../pools/pools";

type SystemBase<TPool> = {
  enabled: boolean;
  priority?: number;
  initialized?: boolean;

  initialize?: (pools: Pools<TPool>, delta: number) => Pools<TPool>;
  update: (pools: Pools<TPool>, delta: number) => Pools<TPool>;
  cleanup?: () => void;
};

type System<
  TPool,
  TSystem extends SystemBase<TPool> = SystemBase<TPool>
> = TSystem;

export type { System, SystemBase };
