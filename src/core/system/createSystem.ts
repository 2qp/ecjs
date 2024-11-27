import type { System, SystemBase } from "./system";

type CreateSystemParams<
  TSystem extends SystemBase<TPools>,
  TPools
> = {} & System<TSystem, TPools>;

type CreateSystemType = <TSystem extends SystemBase<TPools>, TPools>(
  params: CreateSystemParams<TSystem, TPools>
) => System<TSystem, TPools>;

const createSystem: CreateSystemType = (params) => params;

export { createSystem };
export type { CreateSystemParams, CreateSystemType };
