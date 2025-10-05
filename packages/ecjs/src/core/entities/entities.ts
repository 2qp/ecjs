import type { Entity } from "../entity/entity";

type Entities<T extends Entity> = Map<number, Entity<T>>;

type EntityList<T extends Entity> = Entity<T>[];

export type { Entities, EntityList };
