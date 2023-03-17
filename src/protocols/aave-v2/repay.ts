import { LogicFormData, ToObjectFields } from 'src/types';
import { protocols } from '@composable-router/protocol-logics';
import { v4 as uuidv4 } from 'uuid';

export type RepayFields = ToObjectFields<protocols.aavev2.RepayLogicFields>;

export type RepayFormData = LogicFormData<RepayFields>;

export function newRepayFormData(fields: RepayFields): RepayFormData {
  return { id: uuidv4(), rid: protocols.aavev2.RepayLogic.rid, fields };
}
