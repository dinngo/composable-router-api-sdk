import { Declasifying, LogicFormData } from 'src/types';
import { getProtocolTokenList, quote } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export type ClaimParams = Declasifying<logics.compoundv3.ClaimLogicParams>;

export type ClaimFields = Declasifying<logics.compoundv3.ClaimLogicFields>;

export type ClaimFormData = LogicFormData<ClaimFields>;

export function newClaimFormData(fields: ClaimFields): ClaimFormData {
  return { id: uuidv4(), rid: logics.compoundv3.ClaimLogic.rid, fields };
}

export async function getClaimTokenList(chainId: number): Promise<logics.compoundv3.ClaimLogicTokenList> {
  return getProtocolTokenList(chainId, logics.compoundv3.ClaimLogic.rid);
}

export async function getClaimQuotation(
  chainId: number,
  params: ClaimParams
): Promise<logics.compoundv3.ClaimLogicFields> {
  return quote(chainId, logics.compoundv3.ClaimLogic.rid, params);
}
