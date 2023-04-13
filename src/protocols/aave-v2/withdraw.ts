import { Declasifying, LogicFormData } from 'src/types';
import { getProtocolTokenList, quote } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export type WithdrawParams = Declasifying<logics.aavev2.WithdrawLogicParams>;

export type WithdrawFields = Declasifying<logics.aavev2.WithdrawLogicFields>;

export type WithdrawFormData = LogicFormData<WithdrawFields>;

export function newWithdrawFormData(fields: WithdrawFields): WithdrawFormData {
  return { id: uuidv4(), rid: logics.aavev2.WithdrawLogic.rid, fields };
}

export async function getWithdrawTokenList(chainId: number): Promise<logics.aavev2.WithdrawLogicTokenList> {
  return getProtocolTokenList(chainId, logics.aavev2.WithdrawLogic.rid);
}

export async function getWithdrawQuotation(
  chainId: number,
  params: WithdrawParams
): Promise<logics.aavev2.WithdrawLogicFields> {
  return quote(chainId, logics.aavev2.WithdrawLogic.rid, params);
}
