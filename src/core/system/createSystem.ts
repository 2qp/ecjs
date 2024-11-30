import type { System } from "./system";

type CreateSystemParams<TSystem extends System<TPool>, TPool> = {} & System<
  TPool,
  TSystem
>;

type CreateSystemType = <TPool, TSystem extends System<TPool> = System<TPool>>(
  params: CreateSystemParams<TSystem, TPool>
) => System<TPool, TSystem>;

const createSystem: CreateSystemType = (params) => params;

export { createSystem };
export type { CreateSystemParams, CreateSystemType };
