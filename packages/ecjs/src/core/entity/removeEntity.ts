import type { Entities } from "../entities/entities";
import type { Entity } from "./entity";

// type RemoveEntityParams = {};

type RemoveEntityType = <T extends Entity>(
  eid: number,
  entities: Entities<T>
) => Entities<T>;

const removeEntity: RemoveEntityType = (eid, entities) => {
  //
  const updatedEntities = new Map(entities);
  updatedEntities.delete(eid);

  return updatedEntities;
};

export { removeEntity };
export type { RemoveEntityType };
