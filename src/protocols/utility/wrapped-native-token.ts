import { Declasifying, LogicFormData } from 'src/types';
import { getProtocolTokenList, quote } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export type WrappedNativeTokenParams = Declasifying<logics.utility.WrappedNativeTokenLogicParams>;

export type WrappedNativeTokenFields = Declasifying<logics.utility.WrappedNativeTokenLogicFields>;

export type WrappedNativeTokenFormData = LogicFormData<WrappedNativeTokenFields>;

export function newWrappedNativeTokenFormData(fields: WrappedNativeTokenFields): WrappedNativeTokenFormData {
  return { id: uuidv4(), rid: logics.utility.WrappedNativeTokenLogic.rid, fields };
}

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
