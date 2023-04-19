import { FlashLoanFields, FlashLoanLogic } from 'src/types';
import { getProtocolTokenList } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';

export async function getFlashLoanTokenList(chainId: number): Promise<logics.aavev2.FlashLoanLogicTokenList> {
  return getProtocolTokenList(chainId, logics.aavev2.FlashLoanLogic.rid);
}

export function newFlashLoanLogic(fields: FlashLoanFields): FlashLoanLogic {
  return { rid: logics.aavev2.FlashLoanLogic.rid, fields };
}
