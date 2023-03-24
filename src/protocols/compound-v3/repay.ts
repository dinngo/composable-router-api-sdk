import { LogicFormData, ToObjectFields } from 'src/types';
import { protocols } from '@composable-router/protocol-logics';
import { v4 as uuidv4 } from 'uuid';

export type RepayFields = ToObjectFields<protocols.compoundv3.RepayLogicFields>;

export type RepayFormData = LogicFormData<RepayFields>;

export function newRepayFormData(fields: RepayFields): RepayFormData {
  return { id: uuidv4(), rid: protocols.compoundv3.RepayLogic.rid, fields };
}
