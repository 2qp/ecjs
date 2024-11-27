import type { Pools } from "../pools/pools";

// type RemovePoolParams = {};

type RemovePoolType = <T>(name: string, pools: Pools<T>) => Pools<T>;

const removePool: RemovePoolType = (name, pools) => {
  const updated = new Map(pools);
  updated.delete(name);
  return updated;
};

export { removePool };
export type { RemovePoolType };
