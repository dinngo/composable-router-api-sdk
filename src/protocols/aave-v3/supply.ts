import { Declasifying, LogicFormData } from 'src/types';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export type SupplyParams = Declasifying<logics.aavev3.SupplyLogicParams>;

export type SupplyFields = Declasifying<logics.aavev3.SupplyLogicFields>;

export type SupplyFormData = LogicFormData<SupplyFields>;

export function newSupplyFormData(fields: SupplyFields): SupplyFormData {
  return { id: uuidv4(), rid: logics.aavev3.SupplyLogic.rid, fields };
}
