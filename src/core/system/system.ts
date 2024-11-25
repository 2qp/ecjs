import type { Pools } from "../pools/pools";

type SystemBase<TPools> = {
  update: (pools: Pools<TPools>, delta: number) => void | Promise<void>;
  priority?: number;
  initialize?: () => void | Promise<void>;
  initialized?: boolean;
  cleanup?: () => void | Promise<void>;
};

type System<TSystem extends SystemBase<TPools>, TPools> = TSystem;

export type { System, SystemBase };
