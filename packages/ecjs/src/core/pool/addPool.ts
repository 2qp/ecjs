import type { Pools } from "../pools/pools";
import type { Pool } from "./pool";

// type addPoolParams = {};

type AddPoolType = <T>(
  name: string,
  pool: Pool<T>,
  pools: Pools<T>
) => Pools<T>;

const addPool: AddPoolType = (name, pool, pools) => {
  const updatedPools = new Map(pools).set(name, pool);

  return updatedPools;
};

export { addPool };
export type { AddPoolType };
