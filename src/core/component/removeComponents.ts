import type { Pool } from "../pool/pool";

// type RemoveComponentParams = {};

type RemoveComponentType = <T>(eid: number, pool: Pool<T>) => Pool<T>;

const removeComponent: RemoveComponentType = (eid, pool) => {
  const updatedPool = new Map(pool);
  updatedPool.delete(eid);

  return updatedPool;
};

export { removeComponent };
export type { RemoveComponentType };
