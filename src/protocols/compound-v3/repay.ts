import { Declasifying, LogicFormData } from 'src/types';
import { getProtocolTokenList, quote } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export type RepayParams = Declasifying<logics.compoundv3.RepayLogicParams>;

export type RepayFields = Declasifying<logics.compoundv3.RepayLogicFields>;

export type RepayFormData = LogicFormData<RepayFields>;

export function newRepayFormData(fields: RepayFields): RepayFormData {
  return { id: uuidv4(), rid: logics.compoundv3.RepayLogic.rid, fields };
}

export async function getRepayTokenList(chainId: number): Promise<logics.compoundv3.RepayLogicTokenList> {
  return getProtocolTokenList(chainId, logics.compoundv3.RepayLogic.rid);
}

export async function getRepayQuotation(
  chainId: number,
  params: logics.compoundv3.RepayLogicParams
): Promise<logics.compoundv3.RepayLogicFields> {
  return quote(chainId, logics.compoundv3.RepayLogic.rid, params);
}
