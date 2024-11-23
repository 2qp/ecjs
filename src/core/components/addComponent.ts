import type { Pool } from "../pool/pool";

// type addComponentParams = {};

type AddComponentType = <T>(
  eid: number,
  component: T,
  pool: Pool<T>
) => Pool<T>;

const addComponent: AddComponentType = (eid, component, pool) => {
  const updatedPool = new Map(pool).set(eid, component);

  return updatedPool;
};

export { addComponent };
export type { AddComponentType };
