import { Entity } from "./entity";
import { ReadableEntity } from "./readable-entity";

const readEntity = (
  entity: Entity | undefined,
  eid: number
): ReadableEntity | undefined => {
  if (!entity) return undefined;

  return {
    id: eid,
    pools: Array.from(entity.pools),
  };
};

export { readEntity };
