/**
 * Use a utility like `readEntity` to convert the `pools` Set to an array.
 *
 * making the `Entity` more readable (e.g., for JSON or API).
 */

type EntityBase = {
  id: number;
  pools: Set<string>;
};

type Entity<TEntity extends EntityBase = EntityBase> = TEntity;

export type { Entity, EntityBase };
