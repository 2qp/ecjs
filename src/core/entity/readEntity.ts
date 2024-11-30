import type { Entity } from "./entity";
import type { ReadableEntity } from "./readable-entity";

// type ReadEntityParams = {};

type ReadEntityType = <T extends Entity>(
  eid: number,
  entity: Entity<T> | undefined
) => ReadableEntity<T> | undefined;

const readEntity: ReadEntityType = (eid, entity) => {
  if (!entity) return undefined;

  return {
    ...entity,
    id: eid,
    pools: Array.from(entity.pools),
  };
};

export { readEntity };
export type { ReadEntityType };
