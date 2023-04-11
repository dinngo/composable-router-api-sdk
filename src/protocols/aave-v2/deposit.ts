import { Declasifying, LogicFormData } from 'src/types';
import { getProtocolTokenList, quote } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export type DepositParams = Declasifying<logics.aavev2.DepositLogicParams>;

export type DepositFields = Declasifying<logics.aavev2.DepositLogicFields>;

export type DepositFormData = LogicFormData<DepositFields>;

export function newDepositFormData(fields: DepositFields): DepositFormData {
  return { id: uuidv4(), rid: logics.aavev2.DepositLogic.rid, fields };
}

export async function getDepositTokenList(chainId: number): Promise<logics.aavev2.DepositLogicTokenList> {
  return getProtocolTokenList(chainId, logics.aavev2.DepositLogic.rid);
}

export async function getDepositQuotation(
  chainId: number,
  params: logics.aavev2.DepositLogicParams
): Promise<logics.aavev2.DepositLogicFields> {
  return quote(chainId, logics.aavev2.DepositLogic.rid, params);
}
