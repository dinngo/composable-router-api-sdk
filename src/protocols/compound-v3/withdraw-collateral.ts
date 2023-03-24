import { LogicFormData, ToObjectFields } from 'src/types';
import { protocols } from '@composable-router/protocol-logics';
import { v4 as uuidv4 } from 'uuid';

export type WithdrawCollateralFields = ToObjectFields<protocols.compoundv3.WithdrawCollateralLogicFields>;

export type WithdrawCollateralFormData = LogicFormData<WithdrawCollateralFields>;

export function newWithdrawCollateralFormData(fields: WithdrawCollateralFields): WithdrawCollateralFormData {
  return { id: uuidv4(), rid: protocols.compoundv3.WithdrawCollateralLogic.rid, fields };
}
