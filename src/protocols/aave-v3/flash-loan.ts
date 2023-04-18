import { FlashLoanFields, FlashLoanLogic } from 'src/types';
import { getProtocolTokenList } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export function newFlashLoanLogic(fields: FlashLoanFields): FlashLoanLogic {
  return { id: uuidv4(), rid: logics.aavev3.FlashLoanLogic.rid, fields };
}

export async function getFlashLoanTokenList(chainId: number): Promise<logics.aavev3.FlashLoanLogicTokenList> {
  return getProtocolTokenList(chainId, logics.aavev3.FlashLoanLogic.rid);
}
