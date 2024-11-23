import type { Entity } from "./entity";

// type CreateEntityParams = {};

type CreateEntityType = (eid: number, components: string[]) => Entity;

const createEntity: CreateEntityType = (eid, components) => ({
  id: eid,
  pools: new Set(components),
});

export { createEntity };
export type { CreateEntityType };
