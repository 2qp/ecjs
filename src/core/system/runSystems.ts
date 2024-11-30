import type { Pools } from "../pools/pools";
import type { System } from "./system";

// type RunSystemsParams = {};

type RunSystemsType = <T extends System<T>, U extends System<T>>(
  pools: Pools<T>,
  systems: System<T, U>[],
  delta: number
) => Pools<T> | Promise<Pools<T>>;

/**
 * sequential processing
 * @param pools
 * @param systems
 * @param delta
 * @returns
 */
const runSystems: RunSystemsType = async (pools, systems, delta) => {
  const updatedPools = new Map(pools);

  for (let i = 0, len = systems.length; i < len; i++) {
    const system = systems[i];

    if (system.initialized || system.initialize) {
      await system.initialize?.(updatedPools, delta);
      system.initialized = true;
    }

    await system.update(updatedPools, delta);
  }

  return updatedPools;
};

export { runSystems };
export type { RunSystemsType };
