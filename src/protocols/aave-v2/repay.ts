import { Declasifying, LogicFormData } from 'src/types';
import { getProtocolTokenList, quote } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export type RepayParams = Declasifying<logics.aavev2.RepayLogicParams>;

export type RepayFields = Declasifying<logics.aavev2.RepayLogicFields>;

export type RepayFormData = LogicFormData<RepayFields>;

export function newRepayFormData(fields: RepayFields): RepayFormData {
  return { id: uuidv4(), rid: logics.aavev2.RepayLogic.rid, fields };
}

export async function getRepayTokenList(chainId: number): Promise<logics.aavev2.RepayLogicTokenList> {
  return getProtocolTokenList(chainId, logics.aavev2.RepayLogic.rid);
}

export async function getRepayQuotation(
  chainId: number,
  params: logics.aavev2.RepayLogicParams
): Promise<logics.aavev2.RepayLogicFields> {
  return quote(chainId, logics.aavev2.RepayLogic.rid, params);
}
