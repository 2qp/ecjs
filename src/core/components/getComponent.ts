import type { Pool } from "../pool/pool";

// type GetComponentParams = {};

type GetComponentType = <T>(eid: number, pool: Pool<T>) => T | undefined;

const getComponent: GetComponentType = (eid, pool) => {
  return pool.get(eid);
};

export { getComponent };
export type { GetComponentType };
