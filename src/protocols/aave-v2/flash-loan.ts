import { FlashLoanFields, FlashLoanLogic } from 'src/types';
import { getProtocolTokenList } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export function newFlashLoanLogic(fields: FlashLoanFields): FlashLoanLogic {
  return { id: uuidv4(), rid: logics.aavev2.FlashLoanLogic.rid, fields };
}

export async function getFlashLoanTokenList(chainId: number): Promise<logics.aavev2.FlashLoanLogicTokenList> {
  return getProtocolTokenList(chainId, logics.aavev2.FlashLoanLogic.rid);
}
