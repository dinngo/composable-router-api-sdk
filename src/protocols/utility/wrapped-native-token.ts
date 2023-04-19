import { Declasifying, Logic } from 'src/types';
import { getProtocolTokenList, quote } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';

export type WrappedNativeTokenParams = Declasifying<logics.utility.WrappedNativeTokenLogicParams>;

export type WrappedNativeTokenFields = Declasifying<logics.utility.WrappedNativeTokenLogicFields>;

export type WrappedNativeTokenLogic = Logic<WrappedNativeTokenFields>;

export async function getWrappedNativeTokenTokenList(
  chainId: number
): Promise<logics.utility.WrappedNativeTokenLogicTokenList> {
  return getProtocolTokenList(chainId, logics.utility.WrappedNativeTokenLogic.rid);
}

export async function getWrappedNativeTokenQuotation(
  chainId: number,
  params: WrappedNativeTokenParams
): Promise<logics.utility.WrappedNativeTokenLogicFields> {
  return quote(chainId, logics.utility.WrappedNativeTokenLogic.rid, params);
}

export function newWrappedNativeTokenLogic(fields: WrappedNativeTokenFields): WrappedNativeTokenLogic {
  return { rid: logics.utility.WrappedNativeTokenLogic.rid, fields };
}
