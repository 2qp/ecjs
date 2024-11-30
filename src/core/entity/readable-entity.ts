import type { Entity } from "./entity";

type ReadableEntity<T extends Entity> = Omit<Entity<T>, "pools"> & {
  pools: string[];
};

export type { ReadableEntity };
