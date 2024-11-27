import type { Entities } from "../entities/entities";
import type { Entity, EntityBase } from "./entity";

// type GetEntityParams = {};

type GetEntityType = <T extends EntityBase>(
  eid: number,
  entities: Entities<T>
) => Entity<T> | undefined;

const getEntity: GetEntityType = (eid, entities) => entities.get(eid);

export { getEntity };
export type { GetEntityType };
