import { LogicFormData, ToObjectFields } from 'src/types';
import { protocols } from '@composable-router/logics';
import { v4 as uuidv4 } from 'uuid';

export type SupplyCollateralFields = ToObjectFields<protocols.compoundv3.SupplyCollateralLogicFields>;

export type SupplyCollateralFormData = LogicFormData<SupplyCollateralFields>;

export function newSupplyCollateralFormData(fields: SupplyCollateralFields): SupplyCollateralFormData {
  return { id: uuidv4(), rid: protocols.compoundv3.SupplyCollateralLogic.rid, fields };
}
