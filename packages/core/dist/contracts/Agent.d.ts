import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';
export declare namespace IParam {
    type InputStruct = {
        token: PromiseOrValue<string>;
        amountBps: PromiseOrValue<BigNumberish>;
        amountOrOffset: PromiseOrValue<BigNumberish>;
    };
    type InputStructOutput = [string, BigNumber, BigNumber] & {
        token: string;
        amountBps: BigNumber;
        amountOrOffset: BigNumber;
    };
    type LogicStruct = {
        to: PromiseOrValue<string>;
        data: PromiseOrValue<BytesLike>;
        inputs: IParam.InputStruct[];
        wrapMode: PromiseOrValue<BigNumberish>;
        approveTo: PromiseOrValue<string>;
        callback: PromiseOrValue<string>;
    };
    type LogicStructOutput = [string, string, IParam.InputStructOutput[], number, string, string] & {
        to: string;
        data: string;
        inputs: IParam.InputStructOutput[];
        wrapMode: number;
        approveTo: string;
        callback: string;
    };
}
export interface AgentInterface extends utils.Interface {
    functions: {
        'execute((address,bytes,(address,uint256,uint256)[],uint8,address,address)[],address[],bool)': FunctionFragment;
        'initialize()': FunctionFragment;
        'onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)': FunctionFragment;
        'onERC1155Received(address,address,uint256,uint256,bytes)': FunctionFragment;
        'onERC721Received(address,address,uint256,bytes)': FunctionFragment;
        'router()': FunctionFragment;
        'supportsInterface(bytes4)': FunctionFragment;
        'wrappedNative()': FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: 'execute' | 'initialize' | 'onERC1155BatchReceived' | 'onERC1155Received' | 'onERC721Received' | 'router' | 'supportsInterface' | 'wrappedNative'): FunctionFragment;
    encodeFunctionData(functionFragment: 'execute', values: [IParam.LogicStruct[], PromiseOrValue<string>[], PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: 'initialize', values?: undefined): string;
    encodeFunctionData(functionFragment: 'onERC1155BatchReceived', values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: 'onERC1155Received', values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: 'onERC721Received', values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: 'router', values?: undefined): string;
    encodeFunctionData(functionFragment: 'supportsInterface', values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: 'wrappedNative', values?: undefined): string;
    decodeFunctionResult(functionFragment: 'execute', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'onERC1155BatchReceived', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'onERC1155Received', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'onERC721Received', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'router', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'supportsInterface', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'wrappedNative', data: BytesLike): Result;
    events: {
        'FeeCharged(address,uint256)': EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: 'FeeCharged'): EventFragment;
}
export interface FeeChargedEventObject {
    token: string;
    amount: BigNumber;
}
export type FeeChargedEvent = TypedEvent<[string, BigNumber], FeeChargedEventObject>;
export type FeeChargedEventFilter = TypedEventFilter<FeeChargedEvent>;
export interface Agent extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AgentInterface;
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
        execute(logics: IParam.LogicStruct[], tokensReturn: PromiseOrValue<string>[], isFeeEnabled: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialize(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        router(overrides?: CallOverrides): Promise<[string]>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        wrappedNative(overrides?: CallOverrides): Promise<[string]>;
    };
    execute(logics: IParam.LogicStruct[], tokensReturn: PromiseOrValue<string>[], isFeeEnabled: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialize(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    router(overrides?: CallOverrides): Promise<string>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    wrappedNative(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        execute(logics: IParam.LogicStruct[], tokensReturn: PromiseOrValue<string>[], isFeeEnabled: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        initialize(overrides?: CallOverrides): Promise<void>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        router(overrides?: CallOverrides): Promise<string>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        wrappedNative(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        'FeeCharged(address,uint256)'(token?: PromiseOrValue<string> | null, amount?: null): FeeChargedEventFilter;
        FeeCharged(token?: PromiseOrValue<string> | null, amount?: null): FeeChargedEventFilter;
    };
    estimateGas: {
        execute(logics: IParam.LogicStruct[], tokensReturn: PromiseOrValue<string>[], isFeeEnabled: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialize(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        router(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        wrappedNative(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        execute(logics: IParam.LogicStruct[], tokensReturn: PromiseOrValue<string>[], isFeeEnabled: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialize(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        router(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wrappedNative(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
