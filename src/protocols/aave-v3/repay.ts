import { Declasifying, Logic } from 'src/types';
import { getProtocolTokenList, quote } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export type RepayParams = Declasifying<logics.aavev3.RepayLogicParams>;

export type RepayFields = Declasifying<logics.aavev3.RepayLogicFields>;

export type RepayLogic = Logic<RepayFields>;

export function newRepayLogic(fields: RepayFields): RepayLogic {
  return { id: uuidv4(), rid: logics.aavev3.RepayLogic.rid, fields };
}

export async function getRepayTokenList(chainId: number): Promise<logics.aavev3.RepayLogicTokenList> {
  return getProtocolTokenList(chainId, logics.aavev3.RepayLogic.rid);
}

export async function getRepayQuotation(chainId: number, params: RepayParams): Promise<logics.aavev3.RepayLogicFields> {
  return quote(chainId, logics.aavev3.RepayLogic.rid, params);
}
