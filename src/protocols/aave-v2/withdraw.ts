import { LogicFormData, ToObjectFields } from 'src/types';
import { protocols } from '@composable-router/protocol-logics';

export type WithdrawFields = ToObjectFields<protocols.aavev2.WithdrawLogicFields>;

export type WithdrawFormData = LogicFormData<WithdrawFields>;

export function newWithdrawFormData(fields: WithdrawFields): WithdrawFormData {
  return { rid: protocols.aavev2.WithdrawLogic.rid, fields };
}
