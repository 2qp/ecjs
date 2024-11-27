import type { System, SystemBase } from "./system";

// type AddSystemsParams = {};

type AddSystemsType = <T extends SystemBase<U>, U>(
  system: System<T, U>[],
  systems: System<T, U>[]
) => System<T, U>[];

const addSystems: AddSystemsType = (system, systems) => [...systems, ...system];

export { addSystems };
export type { AddSystemsType };
