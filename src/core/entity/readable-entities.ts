import type { EntityBase } from "./entity";
import type { ReadableEntity } from "./readable-entity";

type ReadableEntities<T extends EntityBase> = Map<number, ReadableEntity<T>>;

export type { ReadableEntities };
