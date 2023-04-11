import * as common from '@furucombo/composable-router-common';
import { expect } from 'chai';
import { getSupplyCollateralTokenList } from './supply-collateral';
import * as logics from '@furucombo/composable-router-logics';

describe('CompoundV3 SupplyCollateralLogic', function () {
  context('Test getTokenList', async function () {
    logics.compoundv3.SupplyCollateralLogic.supportedChainIds.forEach((chainId) => {
      it(`network: ${common.getNetworkId(chainId)}`, async function () {
        const tokenList = await getSupplyCollateralTokenList(chainId);
        const marketIds = Object.keys(tokenList);
        expect(marketIds).to.have.lengthOf.above(0);
        for (const marketId of marketIds) {
          expect(tokenList[marketId]).to.have.lengthOf.above(0);
        }
      });
    });
  });
});
