import type { Pools } from "../pools/pools";
import type { Pool } from "./pool";

// type getPoolParams = {};

type GetPoolType = <T>(pool: string, pools: Pools<T>) => Pool<T> | undefined;

const getPool: GetPoolType = (pool, pools) => pools.get(pool);

export { getPool };
export type { GetPoolType };
