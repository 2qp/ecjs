import type { Pools } from "../pools/pools";
import type { System } from "./system";

// type RunSystemsParams = {};

type RunSystemsType = <TPool, TSystem extends System<TPool> = System<TPool>>(
  pools: Pools<TPool>,
  systems: System<TPool, TSystem>[],
  delta: number
) => Generator<Pools<TPool>>;

/**
 * sequential yielding
 * @param pools
 * @param systems
 * @param delta
 * @returns
 */
const runSystems: RunSystemsType = (pools, systems, delta) => {
  const length = systems.length;

  function* generator() {
    for (let i = 0; i < length; i++) {
      const system = systems[i];

      if (!system) continue;
      if (!system.enabled) continue;

      if (!system.initialized && system.initialize) {
        const initializedPools = system.initialize(pools, delta);
        system.initialized = true;

        const updatedPools = system.update(initializedPools, delta);
        yield updatedPools;
        continue;
      }

      const updatedPools = system.update(pools, delta);
      yield updatedPools;
    }
  }
  return generator();
};

export { runSystems };
export type { RunSystemsType };
