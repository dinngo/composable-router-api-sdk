import { FlashLoanFields, FlashLoanLogic } from 'src/types';
import { getProtocolTokenList } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';

export async function getFlashLoanTokenList(chainId: number): Promise<logics.aavev3.FlashLoanLogicTokenList> {
  return getProtocolTokenList(chainId, logics.aavev3.FlashLoanLogic.rid);
}

export function newFlashLoanLogic(fields: FlashLoanFields): FlashLoanLogic {
  return { rid: logics.aavev3.FlashLoanLogic.rid, fields };
}
