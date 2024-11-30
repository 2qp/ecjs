import type { Pools } from "../pools";
import type { System } from "./system";

type RunSystemsWithConcurrencyControlParams = {};

type RunSystemsWithConcurrencyControlType = <
  TPool extends System<TPool>,
  TSystem extends System<TPool>
>(
  pools: Pools<TPool>,
  systems: System<TPool, TSystem>[],
  delta: number,
  limitFn: (task: () => void | Promise<void>) => Promise<void>
) => Pools<TPool> | Promise<Pools<TPool>>;

/**
 * concurrently with cb
 * @param pools
 * @param systems
 * @param delta
 * @param limitFn concurrency control fn
 * @returns
 */
const runSystemsWithConcurrencyControl: RunSystemsWithConcurrencyControlType =
  async (pools, systems, delta, limitFn) => {
    const updatedPools = new Map(pools);

    const promises = systems.flatMap((system) => {
      if (system?.initialized || !system?.initialize) {
        return [() => system.update(updatedPools, delta)];
      }

      const initPromise = system.initialize(updatedPools, delta);
      if (initPromise) {
        system.initialized = true;
        return [
          () => initPromise.then(() => system.update(updatedPools, delta)),
        ];
      }

      return [() => system.update(updatedPools, delta)];
    });

    await Promise.all(promises.map(limitFn));

    return updatedPools;
  };

export { runSystemsWithConcurrencyControl };

export type {
  RunSystemsWithConcurrencyControlParams,
  RunSystemsWithConcurrencyControlType,
};
