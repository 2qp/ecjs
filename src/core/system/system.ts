import { Pools } from "../pools/pools";

type System<T> = {
  update: (pools: Pools<T>, delta: number) => void;
  priority?: number;
  initialize?: () => void;
  initialized?: boolean;
  cleanup?: () => void;
};

export type { System };
