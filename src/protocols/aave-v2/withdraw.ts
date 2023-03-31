import { LogicFormData, ToObjectFields } from 'src/types';
import { protocols } from '@composable-router/logics';
import { v4 as uuidv4 } from 'uuid';

export type WithdrawFields = ToObjectFields<protocols.aavev2.WithdrawLogicFields>;

export type WithdrawFormData = LogicFormData<WithdrawFields>;

export function newWithdrawFormData(fields: WithdrawFields): WithdrawFormData {
  return { id: uuidv4(), rid: protocols.aavev2.WithdrawLogic.rid, fields };
}
