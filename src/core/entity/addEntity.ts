import type { Entities } from "../entities/entities";
import type { Entity, EntityBase } from "./entity";

// type AddEntityParams = {};

type AddEntityType = <T extends EntityBase>(
  entity: Entity<T>,
  entities: Entities<T>
) => Entities<T>;

const addEntity: AddEntityType = (entity, entities) => {
  const updatedEntities = new Map(entities).set(entity.id, entity);

  return updatedEntities;
};

export { addEntity };
export type { AddEntityType };
