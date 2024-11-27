import type { Pool } from "../pool/pool";
import type { Pools } from "./pools";

type CreatePoolsParams = {};

type Entries<T> = [string, [number, T][]][];

type ExtractT<T> = T extends [string, [number, infer U][]][] ? U : never;

type CreatePoolsType = <T>(entries: Entries<T>) => Pools<T>;

const createPools: CreatePoolsType = (entries) => {
  return entries.reduce((acc, [poolName, poolEntries]) => {
    acc.set(poolName, new Map(poolEntries));

    return acc;
  }, new Map<string, Pool<ExtractT<typeof entries>>>());
};

export { createPools };
export type { CreatePoolsParams, CreatePoolsType, Entries, ExtractT };
