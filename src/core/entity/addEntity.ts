import type { Entities } from "./entities";
import type { Entity } from "./entity";

// type AddEntityParams = {};

type AddEntityType = (
  eid: number,
  entity: Entity,
  entities: Entities
) => Entities;

const addEntity: AddEntityType = (eid, entity, entities) => {
  const updatedEntities = new Map(entities).set(eid, entity);

  return updatedEntities;
};

export { addEntity };
export type { AddEntityType };
