import type { Entity } from "./entity";

// type UpdateEntityParams = {};

type UpdateEntityType = <T extends Entity>(
  components: string[],
  entity: Entity<T>,
  remove?: string[]
) => Entity<T>;

const updateEntity: UpdateEntityType = (components, entity, remove) => {
  const removeSet = remove ? new Set(remove) : new Set();

  const combinedPools = [...entity.pools, ...components];

  const filteredPools = combinedPools.filter(
    (component) => !removeSet.has(component)
  );

  const pools = new Set(filteredPools);

  return {
    ...entity,
    id: entity.id,
    pools,
  };
};

export { updateEntity };
export type { UpdateEntityType };
