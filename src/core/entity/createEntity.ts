import type { Entity, EntityBase } from "./entity";

// type CreateEntityParams = {};

type CreateEntityType = <T extends EntityBase>(props: Entity<T>) => Entity<T>;

const createEntity: CreateEntityType = (props) => props;

export { createEntity };
export type { CreateEntityType };
