"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplyLogic = void 0;
const tslib_1 = require("tslib");
const ethers_1 = require("ethers");
const contracts_1 = require("./contracts");
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
const tokens_1 = require("./tokens");
let SupplyLogic = class SupplyLogic extends core.Logic {
    getTokenList() {
        return tokens_1.tokenPairs.map((tokenPair) => [tokenPair.underlyingToken, tokenPair.cToken]);
    }
    async quote(params) {
        const { input, tokenOut } = params;
        const exchangeRateCurrent = await contracts_1.CErc20__factory.connect(tokenOut.address, this.provider).callStatic.exchangeRateCurrent();
        const amountOutWei = input.amountWei.mul(ethers_1.BigNumber.from(10).pow(18)).div(exchangeRateCurrent);
        const output = new common.TokenAmount(tokenOut).setWei(amountOutWei);
        return { input, output };
    }
    async build(fields) {
        const { input, output, amountBps } = fields;
        const to = output.token.address;
        let data;
        let amountOffset;
        if (input.token.isNative) {
            data = contracts_1.CEther__factory.createInterface().encodeFunctionData('mint');
            if (amountBps)
                amountOffset = ethers_1.constants.MaxUint256;
        }
        else {
            data = contracts_1.CErc20__factory.createInterface().encodeFunctionData('mint', [input.amountWei]);
            if (amountBps)
                amountOffset = common.getParamOffset(0);
        }
        const inputs = [core.newLogicInput({ input, amountBps, amountOffset })];
        return core.newLogic({ to, data, inputs });
    }
};
SupplyLogic.supportedChainIds = [common.ChainId.mainnet];
SupplyLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], SupplyLogic);
exports.SupplyLogic = SupplyLogic;
//# sourceMappingURL=logic.supply.js.map