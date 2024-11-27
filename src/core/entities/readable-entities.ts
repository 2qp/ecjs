import type { EntityBase } from "../entity/entity";
import type { ReadableEntity } from "../entity/readable-entity";

type ReadableEntities<T extends EntityBase> = Map<number, ReadableEntity<T>>;

export type { ReadableEntities };
