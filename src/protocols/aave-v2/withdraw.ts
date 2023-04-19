import { Declasifying, Logic } from 'src/types';
import { getProtocolTokenList, quote } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';

export type WithdrawParams = Declasifying<logics.aavev2.WithdrawLogicParams>;

export type WithdrawFields = Declasifying<logics.aavev2.WithdrawLogicFields>;

export type WithdrawLogic = Logic<WithdrawFields>;

export async function getWithdrawTokenList(chainId: number): Promise<logics.aavev2.WithdrawLogicTokenList> {
  return getProtocolTokenList(chainId, logics.aavev2.WithdrawLogic.rid);
}

export async function getWithdrawQuotation(
  chainId: number,
  params: WithdrawParams
): Promise<logics.aavev2.WithdrawLogicFields> {
  return quote(chainId, logics.aavev2.WithdrawLogic.rid, params);
}

export function newWithdrawLogic(fields: WithdrawFields): WithdrawLogic {
  return { rid: logics.aavev2.WithdrawLogic.rid, fields };
}
