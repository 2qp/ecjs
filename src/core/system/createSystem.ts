import type { System } from "./system";

type CreateSystemParams<
  TPool,
  TSystem extends System<TPool> = System<TPool>
> = {} & System<TPool, TSystem>;

type CreateSystemType = <TPool, TSystem extends System<TPool> = System<TPool>>(
  params: CreateSystemParams<TPool, TSystem>
) => System<TPool, TSystem>;

const createSystem: CreateSystemType = (params) => params;

export { createSystem };
export type { CreateSystemParams, CreateSystemType };
