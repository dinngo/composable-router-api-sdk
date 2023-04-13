import * as api from '@furucombo/composable-router-api';
import * as common from '@furucombo/composable-router-common';
import { expect } from 'chai';

it('Uniswap V3 Swap + Aave V3 Supply', async function () {
  // Description:
  // Suppose a user (0xaAaAaAaaAaAaAaaAaAAAAAAAAaaaAaAaAaaAaaAa) has 1000 USDC in Ethereum
  // and wants to earn interest by supplying in the WBTC pool on the Aave V3 lending platform.
  // This can be done through the following steps:

  const chainId = common.ChainId.mainnet;

  // Tokens Used:
  const USDC = {
    chainId: 1,
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    decimals: 6,
    symbol: 'USDC',
    name: 'USD Coin',
  };
  const WBTC = {
    chainId: 1,
    address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    decimals: 8,
    symbol: 'WBTC',
    name: 'Wrapped BTC',
  };
  const aEthWBTC = {
    chainId: 1,
    address: '0x5Ee5bf7ae06D1Be5997A1A72006FE6C607eC6DE8',
    decimals: 8,
    symbol: 'aEthWBTC',
    name: 'Aave Ethereum WBTC',
  };

  // Step 1.
  // Use `api.protocols.uniswapv3.getSwapTokenQuotation` to get a quote for
  // exchanging 1000 USDC to WBTC on Uniswap V3.
  const swapQuotation = await api.protocols.uniswapv3.getSwapTokenQuotation(chainId, {
    input: { token: USDC, amount: '1000' },
    tokenOut: WBTC,
  });

  // Step 2.
  // Use `api.protocols.uniswapv3.newSwapTokenFormData` to build the swap Logic data.
  const swapLogic = api.protocols.uniswapv3.newSwapTokenFormData(swapQuotation);

  // Step 3.
  // Use `api.protocols.aavev3.getSupplyQuotation` to get a quote for supplying WBTC, which will essentially
  // provide a 1:1 aEthWBTC.
  const supplyQuotation = await api.protocols.aavev3.getSupplyQuotation(chainId, {
    input: swapQuotation.output,
    tokenOut: aEthWBTC,
  });

  // Step 4.
  // Use `api.protocols.aavev3.newSupplyFormData` to build the supply Logic data.
  const supplyLogic = api.protocols.aavev3.newSupplyFormData(supplyQuotation);

  // Step 5.
  // Next, prepare the Router Form Data, which will basically include chainId, account, logics, and slippage data.
  // Additionally, slippage is optional and defaults to 1%. If customization is desired, the type should be a number,
  // and the value should be in Basis Points, where 1 Basis Point equals 0.01%.
  const routerFormData: api.RouterFormData = {
    chainId,
    account: '0xaAaAaAaaAaAaAaaAaAAAAAAAAaaaAaAaAaaAaaAa',
    logics: [swapLogic, supplyLogic],
    slippage: 300, // 3%
  };

  // Step 6.
  // Next, use `api.estimateRouterFormData` to estimate how much funds will be spent (funds) and
  // how many balances will be obtained (balances) from this transaction.
  // It will also identify any approvals that the user needs to execute (approvals) before the transaction
  // and whether there is any permit2 data that the user needs to sign before proceeding (permitData).
  const estimateResult = await api.estimateRouterFormData(routerFormData);
  expect(estimateResult).to.include.all.keys('funds', 'balances', 'approvals', 'permitData');
  expect(estimateResult.funds).to.have.lengthOf(1);
  expect(estimateResult.funds.get(USDC).amount).to.be.eq('1000');
  expect(estimateResult.balances).to.have.lengthOf(1);
  expect(estimateResult.balances.get(aEthWBTC).amount).to.be.eq(supplyQuotation.output.amount);
  expect(estimateResult.approvals).to.have.lengthOf(1);

  // Step 7.
  // If there is any permit2 data that needs to be signed, the signed permit data and signature
  // should be added to the original Router Form Data.
  const permitSig =
    '0xbb8d0cf3e494c2ed4dc1057ee31c90cab5387b8a606019cc32a6d12f714303df183b1b0cd7a1114bd952a4c533ac18606056dda61f922e030967df0836cf76f91c'; // for example
  routerFormData.permitData = estimateResult.permitData;
  routerFormData.permitSig = permitSig;

  // Step 8.
  // Next, use `api.buildRouterTransactionRequest` to get the transaction request to be sent,
  // which will essentially include the Router contract address (to), transaction data (data),
  // and ETH to be carried in the transaction (value).
  const transactionRequest = await api.buildRouterTransactionRequest(routerFormData);
  expect(transactionRequest).to.include.all.keys('to', 'data', 'value');
});
