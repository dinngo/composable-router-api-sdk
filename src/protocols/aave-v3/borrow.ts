import { Declasifying, Logic } from 'src/types';
import { getProtocolTokenList } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';

export type BorrowFields = Declasifying<logics.aavev3.BorrowLogicFields>;

export type BorrowLogic = Logic<BorrowFields>;

export async function getBorrowTokenList(chainId: number): Promise<logics.aavev3.BorrowLogicTokenList> {
  return getProtocolTokenList(chainId, logics.aavev3.BorrowLogic.rid);
}

export function newBorrowLogic(fields: BorrowFields): BorrowLogic {
  return { rid: logics.aavev3.BorrowLogic.rid, fields };
}
