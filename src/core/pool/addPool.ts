import type { Pools } from "../pools/pools";
import type { Pool } from "./pool";

// type addPoolParams = {};

type addPoolType = <T>(
  name: string,
  pool: Pool<T>,
  pools: Pools<T>
) => Pools<T>;

const addPool: addPoolType = (name, pool, pools) => {
  const updatedPools = new Map(pools).set(name, pool);

  return updatedPools;
};

export { addPool };
export type { addPoolType };
