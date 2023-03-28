import { LogicFormData, ToObjectFields } from 'src/types';
import { protocols } from '@composable-router/protocol-logics';
import { v4 as uuidv4 } from 'uuid';

export type SwapTokenFields = ToObjectFields<protocols.paraswapv5.SwapTokenLogicFields>;

export type SwapTokenFormData = LogicFormData<SwapTokenFields>;

export function newSwapTokenFormData(fields: SwapTokenFields): SwapTokenFormData {
  return { id: uuidv4(), rid: protocols.paraswapv5.SwapTokenLogic.rid, fields };
}
