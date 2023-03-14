import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';
export interface SpenderAaveV2DelegationInterface extends utils.Interface {
    functions: {
        'aaveV2Provider()': FunctionFragment;
        'borrow(address,uint256,uint256)': FunctionFragment;
        'router()': FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: 'aaveV2Provider' | 'borrow' | 'router'): FunctionFragment;
    encodeFunctionData(functionFragment: 'aaveV2Provider', values?: undefined): string;
    encodeFunctionData(functionFragment: 'borrow', values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'router', values?: undefined): string;
    decodeFunctionResult(functionFragment: 'aaveV2Provider', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'borrow', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'router', data: BytesLike): Result;
    events: {};
}
export interface SpenderAaveV2Delegation extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SpenderAaveV2DelegationInterface;
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
        aaveV2Provider(overrides?: CallOverrides): Promise<[string]>;
        borrow(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        router(overrides?: CallOverrides): Promise<[string]>;
    };
    aaveV2Provider(overrides?: CallOverrides): Promise<string>;
    borrow(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    router(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        aaveV2Provider(overrides?: CallOverrides): Promise<string>;
        borrow(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        router(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        aaveV2Provider(overrides?: CallOverrides): Promise<BigNumber>;
        borrow(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        router(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        aaveV2Provider(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrow(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        router(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
