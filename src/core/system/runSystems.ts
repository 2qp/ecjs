import type { Pools } from "../pools/pools";
import type { System, SystemBase } from "./system";

// type RunSystemsParams = {};

type RunSystemsType = <T, U extends SystemBase<T>>(
  pools: Pools<T>,
  systems: System<U, T>[],
  delta: number
) => Pools<T>;

const runSystems: RunSystemsType = (pools, systems, delta) => {
  const updatedPools = new Map(pools);

  for (let i = 0, len = systems.length; i < len; i++) {
    const system = systems[i];
    system.initialize?.();
    system.update(updatedPools, delta);
  }

  return updatedPools;
};

export { runSystems };
export type { RunSystemsType };
