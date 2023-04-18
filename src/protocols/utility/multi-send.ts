import { Declasifying, Logic } from 'src/types';
import { getProtocolTokenList } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export type MultiSendFields = Declasifying<logics.utility.MultiSendLogicFields>;

export type MultiSendLogic = Logic<MultiSendFields>;

export function newMultiSendLogic(fields: MultiSendFields): MultiSendLogic {
  return { id: uuidv4(), rid: logics.utility.MultiSendLogic.rid, fields };
}

export async function getMultiSendTokenList(chainId: number): Promise<logics.utility.MultiSendLogicTokenList> {
  return getProtocolTokenList(chainId, logics.utility.MultiSendLogic.rid);
}
