import { Declasifying, LogicFormData } from 'src/types';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export type RepayParams = Declasifying<logics.aavev2.RepayLogicParams>;

export type RepayFields = Declasifying<logics.aavev2.RepayLogicFields>;

export type RepayFormData = LogicFormData<RepayFields>;

export function newRepayFormData(fields: RepayFields): RepayFormData {
  return { id: uuidv4(), rid: logics.aavev2.RepayLogic.rid, fields };
}
