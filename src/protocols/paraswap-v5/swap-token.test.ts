import { SwapTokenParams, getSwapTokenQuotation, getSwapTokenTokenList } from './swap-token';
import * as common from '@furucombo/composable-router-common';
import { expect } from 'chai';
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

    const testCases: SwapTokenParams[] = [
      {
        input: { token: mainnetTokens.ETH, amount: '1' },
        tokenOut: mainnetTokens.USDC,
      },
      {
        input: { token: mainnetTokens.USDC, amount: '1' },
        tokenOut: mainnetTokens.ETH,
      },
      {
        input: { token: mainnetTokens.USDC, amount: '1' },
        tokenOut: mainnetTokens.DAI,
      },
    ];

    testCases.forEach((params, i) => {
      it(`case ${i + 1}`, async function () {
        const quotation = await getSwapTokenQuotation(chainId, params);
        expect(quotation).to.include.all.keys('input', 'output');
      });
    });
  });
});
