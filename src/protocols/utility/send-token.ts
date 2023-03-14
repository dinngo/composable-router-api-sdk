import { LogicFormData } from '../../types';
import * as common from '@composable-router/common';
import { protocols } from '@composable-router/protocol-logics';

export type SendTokenFormData = LogicFormData<protocols.utility.SendTokenLogicFields>;

export function newSendTokenFormData(input: common.TokenAmountObject, recipient: string): SendTokenFormData {
  return { rid: protocols.utility.SendTokenLogic.rid, fields: { input, recipient } };
}
