"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const contracts_1 = require("../contracts");
const common = tslib_1.__importStar(require("@composable-router/common"));
const fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
const path_1 = require("path");
const cTokenAddresses = [
    '0xe65cdB6479BaC1e22340E4E755fAE7E509EcD06c',
    '0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E',
    '0x70e36f6BF80a52b3B46b3aF8e106CC0ed743E8e4',
    '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643',
    '0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5',
    '0x7713DD9Ca933848F6819F38B8352D9A15EA73F67',
    '0xFAce851a4921ce59e912d19329929CE6da6EB0c7',
    '0x95b4eF2869eBD94BEb4eEE400a99824BF5DC325b',
    '0x158079Ee67Fce2f58472A96584A73C7Ab9AC95c1',
    '0xF5DCe57282A584D2746FaF1593d3121Fcac444dC',
    '0x4B0181102A0112A2ef11AbEE5563bb4a3176c9d7',
    '0x12392F67bdf24faE0AF363c24aC620a2f67DAd86',
    '0x35A18000230DA775CAc24873d00Ff85BccdeD550',
    '0x39AA39c021dfbaE8faC545936693aC917d5E7563',
    '0x041171993284df560249B57358F931D9eB7b925D',
    '0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9',
    '0xC11b1268C1A384e55C48c2391d8d480264A3A7F4',
    '0xccF4429DB6322D5C611ee964527D42E5d685DD6a',
    '0x80a2AE356fc9ef4305676f7a3E2Ed04e12C33946',
    '0xB3319f5D18Bc0D84dD1b4825Dcde5d5f7266d407', // cZRX
];
async function default_1() {
    const chainId = common.ChainId.mainnet;
    const web3Toolkit = new common.Web3Toolkit(chainId);
    const cTokens = await web3Toolkit.getTokens(cTokenAddresses);
    const calls = [];
    const iface = contracts_1.CErc20__factory.createInterface();
    for (const cToken of cTokens) {
        if (cToken.symbol !== 'cETH') {
            calls.push({ target: cToken.address, callData: iface.encodeFunctionData('underlying') });
        }
    }
    const { returnData } = await web3Toolkit.multicall2.callStatic.aggregate(calls);
    const tokenAddresses = [];
    let j = 0;
    for (const cToken of cTokens) {
        if (cToken.symbol === 'cETH') {
            tokenAddresses.push(web3Toolkit.nativeToken.address);
        }
        else {
            const [underlying] = iface.decodeFunctionResult('underlying', returnData[j]);
            j++;
            tokenAddresses.push(underlying);
        }
    }
    const underlyingTokens = await web3Toolkit.getTokens(tokenAddresses);
    const cTokenMap = {};
    const underlyingTokenMap = {};
    cTokens.forEach((cToken, i) => {
        cTokenMap[cToken.symbol] = cToken;
        const underlyingToken = underlyingTokens[i];
        underlyingTokenMap[underlyingToken.symbol] = underlyingToken;
    });
    const cTokenDataPath = (0, path_1.resolve)(__dirname, '..', 'tokens', 'data', 'cTokens.json');
    fs_extra_1.default.outputJSONSync(cTokenDataPath, cTokenMap, { spaces: 2 });
    const underlyingTokenDataPath = (0, path_1.resolve)(__dirname, '..', 'tokens', 'data', 'underlyingTokens.json');
    fs_extra_1.default.outputJSONSync(underlyingTokenDataPath, underlyingTokenMap, { spaces: 2 });
}
exports.default = default_1;
//# sourceMappingURL=get-tokens-data.js.map