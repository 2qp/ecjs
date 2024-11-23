import type { Entities } from "./entities";
import type { Entity } from "./entity";

// type GetEntityParams = {};

type GetEntityType = (eid: number, entities: Entities) => Entity | undefined;

const getEntity: GetEntityType = (eid, entities) => {
  return entities.get(eid);
};

export { getEntity };
export type { GetEntityType };
