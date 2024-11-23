import type { Entity } from "./entity";

// type UpdateEntityParams = {};

type UpdateEntityType = (
  components: string[],
  entity: Entity,
  remove?: string[]
) => Entity;

const updateEntity: UpdateEntityType = (components, entity, remove) => {
  const removeSet = remove ? new Set(remove) : new Set();

  const combinedPools = [...entity.pools, ...components];

  const filteredPools = combinedPools.filter(
    (component) => !removeSet.has(component)
  );

  const pools = new Set(filteredPools);

  return {
    id: entity.id,
    pools,
  };
};

export { updateEntity };
export type { UpdateEntityType };
