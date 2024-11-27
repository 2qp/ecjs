import type { Entity, EntityBase } from "../entity/entity";

type Entities<T extends EntityBase> = Map<number, Entity<T>>;

type EntityList<T extends EntityBase> = Entity<T>[];

export type { Entities, EntityList };
