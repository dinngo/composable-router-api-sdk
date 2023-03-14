import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
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
        approveTo: PromiseOrValue<string>;
        callback: PromiseOrValue<string>;
    };
    type LogicStructOutput = [
        string,
        string,
        IParam.InputStructOutput[],
        string,
        string
    ] & {
        to: string;
        data: string;
        inputs: IParam.InputStructOutput[];
        approveTo: string;
        callback: string;
    };
}
export interface RouterInterface extends utils.Interface {
    functions: {
        "agentImplementation()": FunctionFragment;
        "agents(address)": FunctionFragment;
        "calcAgent(address)": FunctionFragment;
        "execute((address,bytes,(address,uint256,uint256)[],address,address)[],address[])": FunctionFragment;
        "getAgent()": FunctionFragment;
        "getAgent(address)": FunctionFragment;
        "getUserAgent()": FunctionFragment;
        "newAgent(address)": FunctionFragment;
        "newAgent()": FunctionFragment;
        "user()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "agentImplementation" | "agents" | "calcAgent" | "execute" | "getAgent()" | "getAgent(address)" | "getUserAgent" | "newAgent(address)" | "newAgent()" | "user"): FunctionFragment;
    encodeFunctionData(functionFragment: "agentImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "agents", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "calcAgent", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "execute", values: [IParam.LogicStruct[], PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "getAgent()", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAgent(address)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getUserAgent", values?: undefined): string;
    encodeFunctionData(functionFragment: "newAgent(address)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "newAgent()", values?: undefined): string;
    encodeFunctionData(functionFragment: "user", values?: undefined): string;
    decodeFunctionResult(functionFragment: "agentImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "agents", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calcAgent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAgent()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAgent(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserAgent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "newAgent(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "newAgent()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "user", data: BytesLike): Result;
    events: {};
}
export interface Router extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RouterInterface;
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
        agentImplementation(overrides?: CallOverrides): Promise<[string]>;
        agents(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            agent: string;
        }>;
        calcAgent(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        execute(logics: IParam.LogicStruct[], tokensReturn: PromiseOrValue<string>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "getAgent()"(overrides?: CallOverrides): Promise<[string]>;
        "getAgent(address)"(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getUserAgent(overrides?: CallOverrides): Promise<[string, string]>;
        "newAgent(address)"(owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "newAgent()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        user(overrides?: CallOverrides): Promise<[string]>;
    };
    agentImplementation(overrides?: CallOverrides): Promise<string>;
    agents(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    calcAgent(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    execute(logics: IParam.LogicStruct[], tokensReturn: PromiseOrValue<string>[], overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "getAgent()"(overrides?: CallOverrides): Promise<string>;
    "getAgent(address)"(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getUserAgent(overrides?: CallOverrides): Promise<[string, string]>;
    "newAgent(address)"(owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "newAgent()"(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    user(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        agentImplementation(overrides?: CallOverrides): Promise<string>;
        agents(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        calcAgent(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        execute(logics: IParam.LogicStruct[], tokensReturn: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        "getAgent()"(overrides?: CallOverrides): Promise<string>;
        "getAgent(address)"(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getUserAgent(overrides?: CallOverrides): Promise<[string, string]>;
        "newAgent(address)"(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        "newAgent()"(overrides?: CallOverrides): Promise<string>;
        user(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        agentImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        agents(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        calcAgent(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        execute(logics: IParam.LogicStruct[], tokensReturn: PromiseOrValue<string>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "getAgent()"(overrides?: CallOverrides): Promise<BigNumber>;
        "getAgent(address)"(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserAgent(overrides?: CallOverrides): Promise<BigNumber>;
        "newAgent(address)"(owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "newAgent()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        user(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        agentImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        agents(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calcAgent(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execute(logics: IParam.LogicStruct[], tokensReturn: PromiseOrValue<string>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "getAgent()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getAgent(address)"(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserAgent(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "newAgent(address)"(owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "newAgent()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        user(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
