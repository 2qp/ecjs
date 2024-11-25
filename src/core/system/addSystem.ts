import type { System, SystemBase } from "./system";

// type AddSystemParams = {};

type AddSystemType = <T extends SystemBase<T>>(
  system: System<T>,
  systems: System<T>[]
) => System<T>[];

const addSystem: AddSystemType = (system, systems) => [...systems, system];

export { addSystem };
export type { AddSystemType };
