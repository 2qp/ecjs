import type { Entity } from "./entity";

// type CreateEntityParams = {};

type CreateEntityType = <T extends Entity>(props: Entity<T>) => Entity<T>;

const createEntity: CreateEntityType = (props) => props;

export { createEntity };
export type { CreateEntityType };
