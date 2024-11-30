import type { Pools } from "../pools/pools";
import type { System } from "./system";

// type RunSystemsConcurrentlyParams = {};

type RunSystemsConcurrentlyType = <
  TPool extends System<TPool>,
  TSystem extends System<TPool>
>(
  pools: Pools<TPool>,
  systems: System<TPool, TSystem>[],
  delta: number
) => Pools<TPool> | Promise<Pools<TPool>>;

/**
 * concurrently
 * @param pools
 * @param systems
 * @param delta
 * @returns
 */
const runSystemsConcurrently: RunSystemsConcurrentlyType = async (
  pools,
  systems,
  delta
) => {
  const updatedPools = new Map(pools);

  const promises = systems.flatMap((system) => {
    if (system?.initialized || !system?.initialize) {
      return [system.update(updatedPools, delta)];
    }

    const initPromise = system.initialize(updatedPools, delta);
    if (initPromise) {
      system.initialized = true;
      return [initPromise.then(() => system.update(updatedPools, delta))];
    }

    return [system.update(updatedPools, delta)];
  });

  await Promise.all(promises);

  return updatedPools;
};

export { runSystemsConcurrently };
export type { RunSystemsConcurrentlyType };
