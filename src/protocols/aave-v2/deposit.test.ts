import * as common from '@furucombo/composable-router-common';
import { expect } from 'chai';
import { getDepositQuotation, getDepositTokenList } from './deposit';
import * as logics from '@furucombo/composable-router-logics';

describe('AaveV2 DepositLogic', function () {
  context('Test getTokenList', async function () {
    logics.aavev2.DepositLogic.supportedChainIds.forEach((chainId) => {
      it(`network: ${common.getNetworkId(chainId)}`, async function () {
        const tokenList = await getDepositTokenList(chainId);
        expect(tokenList).to.have.lengthOf.above(0);
      });
    });
  });

  context('Test getQuotation', async function () {
    const chainId = common.ChainId.mainnet;

    const testCases: logics.aavev2.DepositLogicParams[] = [
      {
        input: new common.TokenAmount(logics.aavev2.mainnetTokens.ETH, '1'),
        tokenOut: logics.aavev2.mainnetTokens.aWETH,
      },
      {
        input: new common.TokenAmount(logics.aavev2.mainnetTokens.USDC, '1'),
        tokenOut: logics.aavev2.mainnetTokens.aUSDC,
      },
    ];

    testCases.forEach((params, i) => {
      it(`case ${i + 1}`, async function () {
        const quotation = await getDepositQuotation(chainId, params);
        expect(quotation).to.include.all.keys('input', 'output');
      });
    });
  });
});
