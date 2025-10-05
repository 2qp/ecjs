import type { System } from "./system";

// type AddSystemParams = {};

type AddSystemType = <TPool, TSystem extends System<TPool> = System<TPool>>(
  system: System<TPool, TSystem>,
  systems: System<TPool, TSystem>[]
) => System<TPool, TSystem>[];

const addSystem: AddSystemType = (system, systems) => [...systems, system];

export { addSystem };
export type { AddSystemType };
