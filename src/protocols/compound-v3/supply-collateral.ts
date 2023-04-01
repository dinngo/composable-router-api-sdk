import { Declasifying, LogicFormData } from 'src/types';
import * as logics from '@composable-router/logics';
import { v4 as uuidv4 } from 'uuid';

export type SupplyCollateralFields = Declasifying<logics.compoundv3.SupplyCollateralLogicFields>;

export type SupplyCollateralFormData = LogicFormData<SupplyCollateralFields>;

export function newSupplyCollateralFormData(fields: SupplyCollateralFields): SupplyCollateralFormData {
  return { id: uuidv4(), rid: logics.compoundv3.SupplyCollateralLogic.rid, fields };
}
