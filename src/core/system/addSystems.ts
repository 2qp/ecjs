import type { System } from "./system";

// type AddSystemsParams = {};

type AddSystemsType = <TPool, TSystem extends System<TPool> = System<TPool>>(
  system: System<TPool, TSystem>[],
  systems: System<TPool, TSystem>[]
) => System<TPool, TSystem>[];

const addSystems: AddSystemsType = (system, systems) => [...systems, ...system];

export { addSystems };
export type { AddSystemsType };
