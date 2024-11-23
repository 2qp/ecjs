import type { Pools } from "../pools/pools";
import type { Pool } from "./pool";

// type getPoolParams = {};

type getPoolType = <T>(pool: string, pools: Pools<T>) => Pool<T> | undefined;

const getPool: getPoolType = (pool, pools) => pools.get(pool);

export { getPool };
export type { getPoolType };
