import type { Entities } from "./entities";
import type { Entity, EntityBase } from "./entity";

// type AddEntityParams = {};

type AddEntityType = <T extends EntityBase>(
  eid: number,
  entity: Entity<T>,
  entities: Entities<T>
) => Entities<T>;

const addEntity: AddEntityType = (eid, entity, entities) => {
  const updatedEntities = new Map(entities).set(eid, entity);

  return updatedEntities;
};

export { addEntity };
export type { AddEntityType };
