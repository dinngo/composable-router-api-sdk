import { Declasifying, Logic } from 'src/types';
import { getProtocolTokenList } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export type BorrowFields = Declasifying<logics.aavev3.BorrowLogicFields>;

export type BorrowLogic = Logic<BorrowFields>;

export function newBorrowLogic(fields: BorrowFields): BorrowLogic {
  return { id: uuidv4(), rid: logics.aavev3.BorrowLogic.rid, fields };
}

export async function getBorrowTokenList(chainId: number): Promise<logics.aavev3.BorrowLogicTokenList> {
  return getProtocolTokenList(chainId, logics.aavev3.BorrowLogic.rid);
}
