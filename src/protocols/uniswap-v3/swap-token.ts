import { LogicFormData, ToObjectFields } from 'src/types';
import { protocols } from '@composable-router/protocol-logics';

export type SwapTokenFields = ToObjectFields<protocols.uniswapv3.SwapTokenLogicFields>;

export type SwapTokenFormData = LogicFormData<SwapTokenFields>;

export function newSwapTokenFormData(fields: SwapTokenFields): SwapTokenFormData {
  return { rid: protocols.uniswapv3.SwapTokenLogic.rid, fields };
}
