import type { Entities } from "../entities/entities";
import type { Entity } from "./entity";

// type GetEntityParams = {};

type GetEntityType = <T extends Entity>(
  eid: number,
  entities: Entities<T>
) => Entity<T> | undefined;

const getEntity: GetEntityType = (eid, entities) => entities.get(eid);

export { getEntity };
export type { GetEntityType };
