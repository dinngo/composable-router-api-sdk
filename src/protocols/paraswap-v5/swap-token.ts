import { Declasifying, LogicFormData } from 'src/types';
import { getProtocolTokenList, quote } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export type SwapTokenParams = Declasifying<logics.paraswapv5.SwapTokenLogicParams>;

export type SwapTokenFields = Declasifying<logics.paraswapv5.SwapTokenLogicFields>;

export type SwapTokenFormData = LogicFormData<SwapTokenFields>;

export function newSwapTokenFormData(fields: SwapTokenFields): SwapTokenFormData {
  return { id: uuidv4(), rid: logics.paraswapv5.SwapTokenLogic.rid, fields };
}

export async function getSwapTokenTokenList(chainId: number): Promise<logics.paraswapv5.SwapTokenLogicTokenList> {
  return getProtocolTokenList(chainId, logics.paraswapv5.SwapTokenLogic.rid);
}

export async function getSwapTokenQuotation(
  chainId: number,
  params: logics.paraswapv5.SwapTokenLogicParams
): Promise<logics.paraswapv5.SwapTokenLogicFields> {
  return quote(chainId, logics.paraswapv5.SwapTokenLogic.rid, params);
}
