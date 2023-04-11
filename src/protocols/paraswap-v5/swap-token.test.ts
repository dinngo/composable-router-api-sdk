import * as common from '@furucombo/composable-router-common';
import { expect } from 'chai';
import { getSwapTokenQuotation, getSwapTokenTokenList } from './swap-token';
import * as logics from '@furucombo/composable-router-logics';
import { mainnetTokens } from '@furucombo/composable-router-test-helpers';

describe('ParaswapV5 SwapTokenLogic', function () {
  context('Test getTokenList', async function () {
    logics.paraswapv5.SwapTokenLogic.supportedChainIds.forEach((chainId) => {
      it(`network: ${common.getNetworkId(chainId)}`, async function () {
        const tokenList = await getSwapTokenTokenList(chainId);
        expect(tokenList).to.have.lengthOf.above(0);
      });
    });
  });

  context('Test getQuotation', async function () {
    const chainId = common.ChainId.mainnet;

    const testCases = [
      { input: new common.TokenAmount(mainnetTokens.ETH, '1'), tokenOut: mainnetTokens.USDC },
      { input: new common.TokenAmount(mainnetTokens.USDC, '1'), tokenOut: mainnetTokens.ETH },
      { input: new common.TokenAmount(mainnetTokens.USDC, '1'), tokenOut: mainnetTokens.DAI },
    ];

    testCases.forEach((params, i) => {
      it(`case ${i + 1}`, async function () {
        const quotation = await getSwapTokenQuotation(chainId, params);
        expect(quotation).to.include.all.keys('input', 'output');
      });
    });
  });
});
