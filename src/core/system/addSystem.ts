import type { System, SystemBase } from "./system";

// type AddSystemParams = {};

type AddSystemType = <T extends SystemBase<U>, U>(
  system: System<T, U>,
  systems: System<T, U>[]
) => System<T, U>[];

const addSystem: AddSystemType = (system, systems) => [...systems, system];

export { addSystem };
export type { AddSystemType };
