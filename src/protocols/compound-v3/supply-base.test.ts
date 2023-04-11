import * as common from '@furucombo/composable-router-common';
import { expect } from 'chai';
import { getSupplyBaseQuotation, getSupplyBaseTokenList } from './supply-base';
import * as logics from '@furucombo/composable-router-logics';

describe('CompoundV3 SupplyBaseLogic', function () {
  context('Test getTokenList', async function () {
    logics.compoundv3.SupplyBaseLogic.supportedChainIds.forEach((chainId) => {
      it(`network: ${common.getNetworkId(chainId)}`, async function () {
        const tokenList = await getSupplyBaseTokenList(chainId);
        const marketIds = Object.keys(tokenList);
        expect(marketIds).to.have.lengthOf.above(0);
        for (const marketId of marketIds) {
          expect(tokenList[marketId]).to.have.lengthOf.above(0);
        }
      });
    });
  });

  context('Test getQuotation', async function () {
    const chainId = common.ChainId.mainnet;

    const testCases: logics.compoundv3.SupplyBaseLogicParams[] = [
      {
        marketId: logics.compoundv3.MarketId.USDC,
        input: new common.TokenAmount(logics.compoundv3.mainnetTokens.USDC, '1'),
        tokenOut: logics.compoundv3.mainnetTokens.cUSDCv3,
      },
      {
        marketId: logics.compoundv3.MarketId.ETH,
        input: new common.TokenAmount(logics.compoundv3.mainnetTokens.ETH, '1'),
        tokenOut: logics.compoundv3.mainnetTokens.cWETHv3,
      },
      {
        marketId: logics.compoundv3.MarketId.ETH,
        input: new common.TokenAmount(logics.compoundv3.mainnetTokens.WETH, '1'),
        tokenOut: logics.compoundv3.mainnetTokens.cWETHv3,
      },
    ];

    testCases.forEach((params, i) => {
      it(`case ${i + 1}`, async function () {
        const quotation = await getSupplyBaseQuotation(chainId, params);
        expect(quotation).to.include.all.keys('marketId', 'input', 'output');
      });
    });
  });
});
