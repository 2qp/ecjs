import type { Entities } from "./entities";

// type RemoveEntityParams = {};

type RemoveEntityType = (eid: number, entities: Entities) => Entities;

const removeEntity: RemoveEntityType = (eid, entities) => {
  //
  const updatedEntities = new Map(entities);
  updatedEntities.delete(eid);

  return updatedEntities;
};

export { removeEntity };
export type { RemoveEntityType };
