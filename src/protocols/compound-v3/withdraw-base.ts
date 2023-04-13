import { Declasifying, LogicFormData } from 'src/types';
import { getProtocolTokenList, quote } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export type WithdrawBaseParams = Declasifying<logics.compoundv3.WithdrawBaseLogicParams>;

export type WithdrawBaseFields = Declasifying<logics.compoundv3.WithdrawBaseLogicFields>;

export type WithdrawBaseFormData = LogicFormData<WithdrawBaseFields>;

export function newWithdrawBaseFormData(fields: WithdrawBaseFields): WithdrawBaseFormData {
  return { id: uuidv4(), rid: logics.compoundv3.WithdrawBaseLogic.rid, fields };
}

export async function getWithdrawBaseTokenList(chainId: number): Promise<logics.compoundv3.WithdrawBaseLogicTokenList> {
  return getProtocolTokenList(chainId, logics.compoundv3.WithdrawBaseLogic.rid);
}

export async function getWithdrawBaseQuotation(
  chainId: number,
  params: WithdrawBaseParams
): Promise<logics.compoundv3.WithdrawBaseLogicFields> {
  return quote(chainId, logics.compoundv3.WithdrawBaseLogic.rid, params);
}
