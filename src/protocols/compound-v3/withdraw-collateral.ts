import { Declasifying, LogicFormData } from 'src/types';
import * as logics from '@composable-router/logics';
import { v4 as uuidv4 } from 'uuid';

export type WithdrawCollateralFields = Declasifying<logics.compoundv3.WithdrawCollateralLogicFields>;

export type WithdrawCollateralFormData = LogicFormData<WithdrawCollateralFields>;

export function newWithdrawCollateralFormData(fields: WithdrawCollateralFields): WithdrawCollateralFormData {
  return { id: uuidv4(), rid: logics.compoundv3.WithdrawCollateralLogic.rid, fields };
}
