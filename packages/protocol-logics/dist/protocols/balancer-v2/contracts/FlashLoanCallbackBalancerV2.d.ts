import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';
export interface FlashLoanCallbackBalancerV2Interface extends utils.Interface {
    functions: {
        'balancerV2Vault()': FunctionFragment;
        'receiveFlashLoan(address[],uint256[],uint256[],bytes)': FunctionFragment;
        'router()': FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: 'balancerV2Vault' | 'receiveFlashLoan' | 'router'): FunctionFragment;
    encodeFunctionData(functionFragment: 'balancerV2Vault', values?: undefined): string;
    encodeFunctionData(functionFragment: 'receiveFlashLoan', values: [
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: 'router', values?: undefined): string;
    decodeFunctionResult(functionFragment: 'balancerV2Vault', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'receiveFlashLoan', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'router', data: BytesLike): Result;
    events: {};
}
export interface FlashLoanCallbackBalancerV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FlashLoanCallbackBalancerV2Interface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        balancerV2Vault(overrides?: CallOverrides): Promise<[string]>;
        receiveFlashLoan(tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], feeAmounts: PromiseOrValue<BigNumberish>[], userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        router(overrides?: CallOverrides): Promise<[string]>;
    };
    balancerV2Vault(overrides?: CallOverrides): Promise<string>;
    receiveFlashLoan(tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], feeAmounts: PromiseOrValue<BigNumberish>[], userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    router(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        balancerV2Vault(overrides?: CallOverrides): Promise<string>;
        receiveFlashLoan(tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], feeAmounts: PromiseOrValue<BigNumberish>[], userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        router(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        balancerV2Vault(overrides?: CallOverrides): Promise<BigNumber>;
        receiveFlashLoan(tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], feeAmounts: PromiseOrValue<BigNumberish>[], userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        router(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        balancerV2Vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        receiveFlashLoan(tokens: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], feeAmounts: PromiseOrValue<BigNumberish>[], userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        router(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
