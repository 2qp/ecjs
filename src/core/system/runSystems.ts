import type { Pools } from "../pools/pools";
import type { System } from "./system";

// type RunSystemsParams = {};

type RunSystemsType = <TPool, TSystem extends System<TPool> = System<TPool>>(
  pools: Pools<TPool>,
  systems: System<TPool, TSystem>[],
  delta: number
) => Pools<TPool>;

/**
 * sequential processing
 * @param pools
 * @param systems
 * @param delta
 * @returns
 */
const runSystems: RunSystemsType = (pools, systems, delta) => {
  const updatedPools = new Map(pools);

  for (let i = 0, len = systems.length; i < len; i++) {
    const system = systems[i];

    if (system.initialized || system.initialize) {
      system.initialize?.(updatedPools, delta);
      system.initialized = true;
    }

    system.update(updatedPools, delta);
  }

  return updatedPools;
};

export { runSystems };
export type { RunSystemsType };
