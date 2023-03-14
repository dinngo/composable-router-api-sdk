import { LogicFormData, ToObjectFields } from 'src/types';
import { protocols } from '@composable-router/protocol-logics';

export type RepayFields = ToObjectFields<protocols.aavev2.RepayLogicFields>;

export type RepayFormData = LogicFormData<RepayFields>;

export function newRepayFormData(fields: RepayFields): RepayFormData {
  return { rid: protocols.aavev2.RepayLogic.rid, fields };
}
