import type { Entity, EntityBase } from "../entity/entity";
import type { Entities } from "./entities";

// type CreateEntitiesParams = {};

type CreateEntitiesType = <T extends EntityBase>(
  entries: [number, Entity<T>][]
) => Entities<T>;

const createEntities: CreateEntitiesType = (entries) => new Map(entries);

export { createEntities };
export type { CreateEntitiesType };
