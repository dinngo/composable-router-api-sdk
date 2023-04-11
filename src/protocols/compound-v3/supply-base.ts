import { Declasifying, LogicFormData } from 'src/types';
import { getProtocolTokenList, quote } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export type SupplyBaseParams = Declasifying<logics.compoundv3.SupplyBaseLogicParams>;

export type SupplyBaseFields = Declasifying<logics.compoundv3.SupplyBaseLogicFields>;

export type SupplyBaseFormData = LogicFormData<SupplyBaseFields>;

export function newSupplyBaseFormData(fields: SupplyBaseFields): SupplyBaseFormData {
  return { id: uuidv4(), rid: logics.compoundv3.SupplyBaseLogic.rid, fields };
}

export async function getSupplyBaseTokenList(chainId: number): Promise<logics.compoundv3.SupplyBaseLogicTokenList> {
  return getProtocolTokenList(chainId, logics.compoundv3.SupplyBaseLogic.rid);
}

export async function getSupplyBaseQuotation(
  chainId: number,
  params: logics.compoundv3.SupplyBaseLogicParams
): Promise<logics.compoundv3.SupplyBaseLogicFields> {
  return quote(chainId, logics.compoundv3.SupplyBaseLogic.rid, params);
}
