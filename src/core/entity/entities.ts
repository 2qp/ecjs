import type { Entity, EntityBase } from "./entity";

type Entities<T extends EntityBase> = Map<number, Entity<T>>;

export type { Entities };
