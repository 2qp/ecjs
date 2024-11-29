import type { EntityBase } from "../entity/entity";
import type { SystemBase } from "../system";
import type { ECS, ECSBase } from "./ecs";

type CreateECSParams<
  TECS extends ECSBase<TPools, TSystems, TEntities>,
  TPools,
  TEntities extends EntityBase,
  TSystems extends SystemBase<TPools>
> = {} & ECS<TPools, TSystems, TEntities, TECS>;

type CreateECSType = <
  TPools,
  TEntities extends EntityBase = EntityBase,
  TSystems extends SystemBase<TPools> = SystemBase<TPools>,
  TECS extends ECSBase<TPools, TSystems, TEntities> = ECSBase<
    TPools,
    TSystems,
    TEntities
  >
>(
  params: CreateECSParams<TECS, TPools, TEntities, TSystems>
) => ECS<TPools, TSystems, TEntities, TECS>;

const createECS: CreateECSType = (props) => props;

export { createECS };
export type { CreateECSParams, CreateECSType };
