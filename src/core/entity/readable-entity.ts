import type { Entity, EntityBase } from "./entity";

type ReadableEntity<T extends EntityBase> = Omit<Entity<T>, "pools"> & {
  pools: string[];
};

export type { ReadableEntity };
