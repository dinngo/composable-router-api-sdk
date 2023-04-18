import { Declasifying, Logic } from 'src/types';
import { getProtocolTokenList, quote } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export type SwapTokenParams = Declasifying<logics.uniswapv3.SwapTokenLogicParams>;

export type SwapTokenFields = Declasifying<logics.uniswapv3.SwapTokenLogicFields>;

export type SwapTokenLogic = Logic<SwapTokenFields>;

export function newSwapTokenLogic(fields: SwapTokenFields): SwapTokenLogic {
  return { id: uuidv4(), rid: logics.uniswapv3.SwapTokenLogic.rid, fields };
}

export async function getSwapTokenTokenList(chainId: number): Promise<logics.uniswapv3.SwapTokenLogicTokenList> {
  return getProtocolTokenList(chainId, logics.uniswapv3.SwapTokenLogic.rid);
}

export async function getSwapTokenQuotation(
  chainId: number,
  params: SwapTokenParams
): Promise<logics.uniswapv3.SwapTokenLogicFields> {
  return quote(chainId, logics.uniswapv3.SwapTokenLogic.rid, params);
}
