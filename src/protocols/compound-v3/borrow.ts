import { Declasifying, LogicFormData } from 'src/types';
import { getProtocolTokenList } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export type BorrowFields = Declasifying<logics.compoundv3.BorrowLogicFields>;

export type BorrowFormData = LogicFormData<BorrowFields>;

export function newBorrowFormData(fields: BorrowFields): BorrowFormData {
  return { id: uuidv4(), rid: logics.compoundv3.BorrowLogic.rid, fields };
}

export async function getBorrowTokenList(chainId: number): Promise<logics.compoundv3.BorrowLogicTokenList> {
  return getProtocolTokenList(chainId, logics.compoundv3.BorrowLogic.rid);
}
