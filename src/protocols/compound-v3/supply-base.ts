import { Declasifying, LogicFormData } from 'src/types';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export type SupplyBaseParams = Declasifying<logics.compoundv3.SupplyBaseLogicParams>;

export type SupplyBaseFields = Declasifying<logics.compoundv3.SupplyBaseLogicFields>;

export type SupplyBaseFormData = LogicFormData<SupplyBaseFields>;

export function newSupplyBaseFormData(fields: SupplyBaseFields): SupplyBaseFormData {
  return { id: uuidv4(), rid: logics.compoundv3.SupplyBaseLogic.rid, fields };
}
