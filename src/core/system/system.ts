import type { Pools } from "../pools/pools";

type SystemBase<TPools> = {
  update: (pools: Pools<TPools>, delta: number) => void | Promise<void>;
  priority?: number;
  initialize?: () => void | Promise<void>;
  initialized?: boolean;
  cleanup?: () => void | Promise<void>;
};

type System<
  TPools,
  TSystem extends SystemBase<TPools> = SystemBase<TPools>
> = TSystem;

export type { System, SystemBase };
