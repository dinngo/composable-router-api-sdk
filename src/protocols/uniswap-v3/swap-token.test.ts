import * as common from '@furucombo/composable-router-common';
import { expect } from 'chai';
import { getSwapTokenQuotation, getSwapTokenTokenList } from './swap-token';
import * as logics from '@furucombo/composable-router-logics';
import { mainnetTokens } from '@furucombo/composable-router-test-helpers';

describe('UniswapV3 SwapTokenLogic', function () {
  context('Test getTokenList', async function () {
    logics.uniswapv3.SwapTokenLogic.supportedChainIds.forEach((chainId) => {
      it(`network: ${common.getNetworkId(chainId)}`, async function () {
        const tokenList = await getSwapTokenTokenList(chainId);
        expect(tokenList).to.have.lengthOf.above(0);
      });
    });
  });

  context('Test getQuotation', async function () {
    const chainId = common.ChainId.mainnet;

    const testCases: logics.uniswapv3.SwapTokenLogicParams[] = [
      { input: new common.TokenAmount(mainnetTokens.ETH, '1'), tokenOut: mainnetTokens.USDC },
      { input: new common.TokenAmount(mainnetTokens.USDC, '1'), tokenOut: mainnetTokens.ETH },
      { input: new common.TokenAmount(mainnetTokens.USDC, '1'), tokenOut: mainnetTokens.DAI },
      { tokenIn: mainnetTokens.ETH, output: new common.TokenAmount(mainnetTokens.USDC, '1') },
      { tokenIn: mainnetTokens.USDC, output: new common.TokenAmount(mainnetTokens.ETH, '1') },
      { tokenIn: mainnetTokens.USDC, output: new common.TokenAmount(mainnetTokens.DAI, '1') },
    ];

    testCases.forEach((params, i) => {
      it(`case ${i + 1}`, async function () {
        const quotation = await getSwapTokenQuotation(chainId, params);
        expect(quotation).to.include.all.keys('tradeType', 'input', 'output');
        expect(quotation).to.have.any.keys('path', 'fee');
      });
    });
  });
});
