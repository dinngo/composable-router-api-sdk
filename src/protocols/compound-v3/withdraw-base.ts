import { LogicFormData, ToObjectFields } from 'src/types';
import { protocols } from '@composable-router/protocol-logics';
import { v4 as uuidv4 } from 'uuid';

export type WithdrawBaseFields = ToObjectFields<protocols.compoundv3.WithdrawBaseLogicFields>;

export type WithdrawBaseFormData = LogicFormData<WithdrawBaseFields>;

export function newWithdrawBaseFormData(fields: WithdrawBaseFields): WithdrawBaseFormData {
  return { id: uuidv4(), rid: protocols.compoundv3.WithdrawBaseLogic.rid, fields };
}
