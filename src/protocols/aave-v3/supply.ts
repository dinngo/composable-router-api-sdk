import { LogicFormData, ToObjectFields } from 'src/types';
import { protocols } from '@composable-router/protocol-logics';
import { v4 as uuidv4 } from 'uuid';

export type SupplyFields = ToObjectFields<protocols.aavev3.SupplyLogicFields>;

export type SupplyFormData = LogicFormData<SupplyFields>;

export function newSupplyFormData(fields: SupplyFields): SupplyFormData {
  return { id: uuidv4(), rid: protocols.aavev3.SupplyLogic.rid, fields };
}
