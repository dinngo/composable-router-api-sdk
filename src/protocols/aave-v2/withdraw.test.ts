import * as common from '@furucombo/composable-router-common';
import { expect } from 'chai';
import { getWithdrawQuotation, getWithdrawTokenList } from './withdraw';
import * as logics from '@furucombo/composable-router-logics';

describe('AaveV2 WithdrawLogic', function () {
  context('Test getTokenList', async function () {
    logics.aavev2.WithdrawLogic.supportedChainIds.forEach((chainId) => {
      it(`network: ${common.getNetworkId(chainId)}`, async function () {
        const tokenList = await getWithdrawTokenList(chainId);
        expect(tokenList).to.have.lengthOf.above(0);
      });
    });
  });

  context('Test getQuotation', async function () {
    const chainId = common.ChainId.mainnet;

    const testCases: logics.aavev2.WithdrawLogicParams[] = [
      {
        input: new common.TokenAmount(logics.aavev2.mainnetTokens.aWETH, '1'),
        tokenOut: logics.aavev2.mainnetTokens.ETH,
      },
      {
        input: new common.TokenAmount(logics.aavev2.mainnetTokens.aUSDC, '1'),
        tokenOut: logics.aavev2.mainnetTokens.USDC,
      },
    ];

    testCases.forEach((params, i) => {
      it(`case ${i + 1}`, async function () {
        const quotation = await getWithdrawQuotation(chainId, params);
        expect(quotation).to.include.all.keys('input', 'output');
      });
    });
  });
});
