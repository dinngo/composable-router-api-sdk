import { LogicFormData, ToObjectFields } from 'src/types';
import { protocols } from '@composable-router/protocol-logics';
import { v4 as uuidv4 } from 'uuid';

export type SupplyBaseFields = ToObjectFields<protocols.compoundv3.SupplyBaseLogicFields>;

export type SupplyBaseFormData = LogicFormData<SupplyBaseFields>;

export function newSupplyBaseFormData(fields: SupplyBaseFields): SupplyBaseFormData {
  return { id: uuidv4(), rid: protocols.compoundv3.SupplyBaseLogic.rid, fields };
}
