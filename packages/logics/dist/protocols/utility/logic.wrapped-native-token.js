"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrappedNativeTokenLogic = void 0;
const tslib_1 = require("tslib");
const ethers_1 = require("ethers");
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
let WrappedNativeTokenLogic = class WrappedNativeTokenLogic extends core.Logic {
    getTokenList() {
        return [
            [this.nativeToken, this.wrappedNativeToken],
            [this.wrappedNativeToken, this.nativeToken],
        ];
    }
    quote(params) {
        const { input, tokenOut } = params;
        const output = new common.TokenAmount(tokenOut, input.amount);
        return { input, output };
    }
    async getLogic(fields) {
        const { input, amountBps } = fields;
        const to = this.wrappedNativeToken.address;
        const iface = common.WETH__factory.createInterface();
        let data;
        let amountOffset;
        if (input.token.isNative) {
            data = iface.encodeFunctionData('deposit');
            if (amountBps)
                amountOffset = ethers_1.constants.MaxUint256;
        }
        else {
            data = iface.encodeFunctionData('withdraw', [input.amountWei]);
            if (amountBps)
                amountOffset = common.getParamOffset(0);
        }
        const inputs = [core.newLogicInput({ input, amountBps, amountOffset })];
        return core.newLogic({ to, data, inputs });
    }
};
WrappedNativeTokenLogic.supportedChainIds = [
    common.ChainId.mainnet,
    common.ChainId.polygon,
    common.ChainId.arbitrum,
    common.ChainId.optimism,
    common.ChainId.avalanche,
    common.ChainId.fantom,
];
WrappedNativeTokenLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], WrappedNativeTokenLogic);
exports.WrappedNativeTokenLogic = WrappedNativeTokenLogic;
//# sourceMappingURL=logic.wrapped-native-token.js.map