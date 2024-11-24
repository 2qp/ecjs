import type { Pools } from "../pools/pools";

type System<T> = {
  update: (pools: Pools<T>, delta: number) => void | Promise<void>;
  priority?: number;
  initialize?: () => void | Promise<void>;
  initialized?: boolean;
  cleanup?: () => void | Promise<void>;
};

export type { System };
