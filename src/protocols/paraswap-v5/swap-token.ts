import { Declasifying, LogicFormData } from 'src/types';
import * as logics from '@composable-router/logics';
import { v4 as uuidv4 } from 'uuid';

export type SwapTokenParams = Declasifying<logics.paraswapv5.SwapTokenLogicParams>;

export type SwapTokenFields = Declasifying<logics.paraswapv5.SwapTokenLogicFields>;

export type SwapTokenFormData = LogicFormData<SwapTokenFields>;

export function newSwapTokenFormData(fields: SwapTokenFields): SwapTokenFormData {
  return { id: uuidv4(), rid: logics.paraswapv5.SwapTokenLogic.rid, fields };
}
