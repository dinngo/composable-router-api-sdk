import { Declasifying, Logic } from 'src/types';
import { getProtocolTokenList } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export type SendTokenFields = Declasifying<logics.utility.SendTokenLogicFields>;

export type SendTokenLogic = Logic<SendTokenFields>;

export function newSendTokenLogic(fields: SendTokenFields): SendTokenLogic {
  return { id: uuidv4(), rid: logics.utility.SendTokenLogic.rid, fields };
}

export async function getSendTokenTokenList(chainId: number): Promise<logics.utility.SendTokenLogicTokenList> {
  return getProtocolTokenList(chainId, logics.utility.SendTokenLogic.rid);
}
