/**
 * Use a utility like `readEntity` to convert the `pools` Set to an array.
 *
 * making the `Entity` more readable (e.g., for JSON or API).
 */
type Entity = {
  id: number;
  pools: Set<string>;
};

export type { Entity };
