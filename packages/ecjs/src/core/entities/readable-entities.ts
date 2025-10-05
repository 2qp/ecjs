import type { Entity } from "../entity/entity";
import type { ReadableEntity } from "../entity/readable-entity";

type ReadableEntities<T extends Entity> = Map<number, ReadableEntity<T>>;

export type { ReadableEntities };
