import type { Pools } from "../pools/pools";

type SystemBase<T> = {
  update: (pools: Pools<T>, delta: number) => void | Promise<void>;
  priority?: number;
  initialize?: () => void | Promise<void>;
  initialized?: boolean;
  cleanup?: () => void | Promise<void>;
};

type System<T extends SystemBase<T>> = T;

export type { System, SystemBase };
