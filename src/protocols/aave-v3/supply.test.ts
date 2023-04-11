import * as common from '@furucombo/composable-router-common';
import { expect } from 'chai';
import { getSupplyQuotation, getSupplyTokenList } from './supply';
import * as logics from '@furucombo/composable-router-logics';

describe('AaveV3 SupplyLogic', function () {
  context('Test getTokenList', async function () {
    logics.aavev3.SupplyLogic.supportedChainIds.forEach((chainId) => {
      it(`network: ${common.getNetworkId(chainId)}`, async function () {
        const tokenList = await getSupplyTokenList(chainId);
        expect(tokenList).to.have.lengthOf.above(0);
      });
    });
  });

  context('Test getQuotation', async function () {
    const chainId = common.ChainId.mainnet;

    const testCases: logics.aavev3.SupplyLogicParams[] = [
      {
        input: new common.TokenAmount(logics.aavev3.mainnetTokens.ETH, '1'),
        tokenOut: logics.aavev3.mainnetTokens.aEthWETH,
      },
      {
        input: new common.TokenAmount(logics.aavev3.mainnetTokens.USDC, '1'),
        tokenOut: logics.aavev3.mainnetTokens.aEthUSDC,
      },
    ];

    testCases.forEach((params, i) => {
      it(`case ${i + 1}`, async function () {
        const quotation = await getSupplyQuotation(chainId, params);
        expect(quotation).to.include.all.keys('input', 'output');
      });
    });
  });
});
