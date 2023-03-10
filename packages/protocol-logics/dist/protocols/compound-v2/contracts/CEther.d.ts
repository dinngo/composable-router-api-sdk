import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';
export interface CEtherInterface extends utils.Interface {
    functions: {
        'name()': FunctionFragment;
        'approve(address,uint256)': FunctionFragment;
        'mint()': FunctionFragment;
        'reserveFactorMantissa()': FunctionFragment;
        'borrowBalanceCurrent(address)': FunctionFragment;
        'totalSupply()': FunctionFragment;
        'exchangeRateStored()': FunctionFragment;
        'transferFrom(address,address,uint256)': FunctionFragment;
        'pendingAdmin()': FunctionFragment;
        'decimals()': FunctionFragment;
        'balanceOfUnderlying(address)': FunctionFragment;
        'getCash()': FunctionFragment;
        '_setComptroller(address)': FunctionFragment;
        'totalBorrows()': FunctionFragment;
        'repayBorrow()': FunctionFragment;
        'comptroller()': FunctionFragment;
        '_reduceReserves(uint256)': FunctionFragment;
        'initialExchangeRateMantissa()': FunctionFragment;
        'accrualBlockNumber()': FunctionFragment;
        'balanceOf(address)': FunctionFragment;
        'totalBorrowsCurrent()': FunctionFragment;
        'redeemUnderlying(uint256)': FunctionFragment;
        'totalReserves()': FunctionFragment;
        'symbol()': FunctionFragment;
        'borrowBalanceStored(address)': FunctionFragment;
        'accrueInterest()': FunctionFragment;
        'transfer(address,uint256)': FunctionFragment;
        'borrowIndex()': FunctionFragment;
        'liquidateBorrow(address,address)': FunctionFragment;
        'supplyRatePerBlock()': FunctionFragment;
        'seize(address,address,uint256)': FunctionFragment;
        '_setPendingAdmin(address)': FunctionFragment;
        'exchangeRateCurrent()': FunctionFragment;
        'getAccountSnapshot(address)': FunctionFragment;
        'borrow(uint256)': FunctionFragment;
        'redeem(uint256)': FunctionFragment;
        'allowance(address,address)': FunctionFragment;
        'repayBorrowBehalf(address)': FunctionFragment;
        '_acceptAdmin()': FunctionFragment;
        '_setInterestRateModel(address)': FunctionFragment;
        'interestRateModel()': FunctionFragment;
        'admin()': FunctionFragment;
        'borrowRatePerBlock()': FunctionFragment;
        '_setReserveFactor(uint256)': FunctionFragment;
        'isCToken()': FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: 'name' | 'approve' | 'mint' | 'reserveFactorMantissa' | 'borrowBalanceCurrent' | 'totalSupply' | 'exchangeRateStored' | 'transferFrom' | 'pendingAdmin' | 'decimals' | 'balanceOfUnderlying' | 'getCash' | '_setComptroller' | 'totalBorrows' | 'repayBorrow' | 'comptroller' | '_reduceReserves' | 'initialExchangeRateMantissa' | 'accrualBlockNumber' | 'balanceOf' | 'totalBorrowsCurrent' | 'redeemUnderlying' | 'totalReserves' | 'symbol' | 'borrowBalanceStored' | 'accrueInterest' | 'transfer' | 'borrowIndex' | 'liquidateBorrow' | 'supplyRatePerBlock' | 'seize' | '_setPendingAdmin' | 'exchangeRateCurrent' | 'getAccountSnapshot' | 'borrow' | 'redeem' | 'allowance' | 'repayBorrowBehalf' | '_acceptAdmin' | '_setInterestRateModel' | 'interestRateModel' | 'admin' | 'borrowRatePerBlock' | '_setReserveFactor' | 'isCToken'): FunctionFragment;
    encodeFunctionData(functionFragment: 'name', values?: undefined): string;
    encodeFunctionData(functionFragment: 'approve', values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'mint', values?: undefined): string;
    encodeFunctionData(functionFragment: 'reserveFactorMantissa', values?: undefined): string;
    encodeFunctionData(functionFragment: 'borrowBalanceCurrent', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
    encodeFunctionData(functionFragment: 'exchangeRateStored', values?: undefined): string;
    encodeFunctionData(functionFragment: 'transferFrom', values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'pendingAdmin', values?: undefined): string;
    encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
    encodeFunctionData(functionFragment: 'balanceOfUnderlying', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'getCash', values?: undefined): string;
    encodeFunctionData(functionFragment: '_setComptroller', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'totalBorrows', values?: undefined): string;
    encodeFunctionData(functionFragment: 'repayBorrow', values?: undefined): string;
    encodeFunctionData(functionFragment: 'comptroller', values?: undefined): string;
    encodeFunctionData(functionFragment: '_reduceReserves', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'initialExchangeRateMantissa', values?: undefined): string;
    encodeFunctionData(functionFragment: 'accrualBlockNumber', values?: undefined): string;
    encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'totalBorrowsCurrent', values?: undefined): string;
    encodeFunctionData(functionFragment: 'redeemUnderlying', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'totalReserves', values?: undefined): string;
    encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
    encodeFunctionData(functionFragment: 'borrowBalanceStored', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'accrueInterest', values?: undefined): string;
    encodeFunctionData(functionFragment: 'transfer', values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'borrowIndex', values?: undefined): string;
    encodeFunctionData(functionFragment: 'liquidateBorrow', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'supplyRatePerBlock', values?: undefined): string;
    encodeFunctionData(functionFragment: 'seize', values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: '_setPendingAdmin', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'exchangeRateCurrent', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getAccountSnapshot', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'borrow', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'redeem', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'allowance', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'repayBorrowBehalf', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: '_acceptAdmin', values?: undefined): string;
    encodeFunctionData(functionFragment: '_setInterestRateModel', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'interestRateModel', values?: undefined): string;
    encodeFunctionData(functionFragment: 'admin', values?: undefined): string;
    encodeFunctionData(functionFragment: 'borrowRatePerBlock', values?: undefined): string;
    encodeFunctionData(functionFragment: '_setReserveFactor', values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'isCToken', values?: undefined): string;
    decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'reserveFactorMantissa', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'borrowBalanceCurrent', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'exchangeRateStored', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'pendingAdmin', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'balanceOfUnderlying', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getCash', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: '_setComptroller', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'totalBorrows', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'repayBorrow', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'comptroller', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: '_reduceReserves', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'initialExchangeRateMantissa', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'accrualBlockNumber', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'totalBorrowsCurrent', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'redeemUnderlying', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'totalReserves', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'borrowBalanceStored', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'accrueInterest', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'borrowIndex', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'liquidateBorrow', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'supplyRatePerBlock', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'seize', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: '_setPendingAdmin', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'exchangeRateCurrent', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getAccountSnapshot', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'borrow', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'redeem', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'repayBorrowBehalf', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: '_acceptAdmin', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: '_setInterestRateModel', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'interestRateModel', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'admin', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'borrowRatePerBlock', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: '_setReserveFactor', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isCToken', data: BytesLike): Result;
    events: {
        'AccrueInterest(uint256,uint256,uint256)': EventFragment;
        'Mint(address,uint256,uint256)': EventFragment;
        'Redeem(address,uint256,uint256)': EventFragment;
        'Borrow(address,uint256,uint256,uint256)': EventFragment;
        'RepayBorrow(address,address,uint256,uint256,uint256)': EventFragment;
        'LiquidateBorrow(address,address,uint256,address,uint256)': EventFragment;
        'NewPendingAdmin(address,address)': EventFragment;
        'NewAdmin(address,address)': EventFragment;
        'NewComptroller(address,address)': EventFragment;
        'NewMarketInterestRateModel(address,address)': EventFragment;
        'NewReserveFactor(uint256,uint256)': EventFragment;
        'ReservesReduced(address,uint256,uint256)': EventFragment;
        'Failure(uint256,uint256,uint256)': EventFragment;
        'Transfer(address,address,uint256)': EventFragment;
        'Approval(address,address,uint256)': EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: 'AccrueInterest'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Mint'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Redeem'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Borrow'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'RepayBorrow'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'LiquidateBorrow'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'NewPendingAdmin'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'NewAdmin'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'NewComptroller'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'NewMarketInterestRateModel'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'NewReserveFactor'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'ReservesReduced'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Failure'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
}
export interface AccrueInterestEventObject {
    interestAccumulated: BigNumber;
    borrowIndex: BigNumber;
    totalBorrows: BigNumber;
}
export type AccrueInterestEvent = TypedEvent<[BigNumber, BigNumber, BigNumber], AccrueInterestEventObject>;
export type AccrueInterestEventFilter = TypedEventFilter<AccrueInterestEvent>;
export interface MintEventObject {
    minter: string;
    mintAmount: BigNumber;
    mintTokens: BigNumber;
}
export type MintEvent = TypedEvent<[string, BigNumber, BigNumber], MintEventObject>;
export type MintEventFilter = TypedEventFilter<MintEvent>;
export interface RedeemEventObject {
    redeemer: string;
    redeemAmount: BigNumber;
    redeemTokens: BigNumber;
}
export type RedeemEvent = TypedEvent<[string, BigNumber, BigNumber], RedeemEventObject>;
export type RedeemEventFilter = TypedEventFilter<RedeemEvent>;
export interface BorrowEventObject {
    borrower: string;
    borrowAmount: BigNumber;
    accountBorrows: BigNumber;
    totalBorrows: BigNumber;
}
export type BorrowEvent = TypedEvent<[string, BigNumber, BigNumber, BigNumber], BorrowEventObject>;
export type BorrowEventFilter = TypedEventFilter<BorrowEvent>;
export interface RepayBorrowEventObject {
    payer: string;
    borrower: string;
    repayAmount: BigNumber;
    accountBorrows: BigNumber;
    totalBorrows: BigNumber;
}
export type RepayBorrowEvent = TypedEvent<[string, string, BigNumber, BigNumber, BigNumber], RepayBorrowEventObject>;
export type RepayBorrowEventFilter = TypedEventFilter<RepayBorrowEvent>;
export interface LiquidateBorrowEventObject {
    liquidator: string;
    borrower: string;
    repayAmount: BigNumber;
    cTokenCollateral: string;
    seizeTokens: BigNumber;
}
export type LiquidateBorrowEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string,
    BigNumber
], LiquidateBorrowEventObject>;
export type LiquidateBorrowEventFilter = TypedEventFilter<LiquidateBorrowEvent>;
export interface NewPendingAdminEventObject {
    oldPendingAdmin: string;
    newPendingAdmin: string;
}
export type NewPendingAdminEvent = TypedEvent<[string, string], NewPendingAdminEventObject>;
export type NewPendingAdminEventFilter = TypedEventFilter<NewPendingAdminEvent>;
export interface NewAdminEventObject {
    oldAdmin: string;
    newAdmin: string;
}
export type NewAdminEvent = TypedEvent<[string, string], NewAdminEventObject>;
export type NewAdminEventFilter = TypedEventFilter<NewAdminEvent>;
export interface NewComptrollerEventObject {
    oldComptroller: string;
    newComptroller: string;
}
export type NewComptrollerEvent = TypedEvent<[string, string], NewComptrollerEventObject>;
export type NewComptrollerEventFilter = TypedEventFilter<NewComptrollerEvent>;
export interface NewMarketInterestRateModelEventObject {
    oldInterestRateModel: string;
    newInterestRateModel: string;
}
export type NewMarketInterestRateModelEvent = TypedEvent<[string, string], NewMarketInterestRateModelEventObject>;
export type NewMarketInterestRateModelEventFilter = TypedEventFilter<NewMarketInterestRateModelEvent>;
export interface NewReserveFactorEventObject {
    oldReserveFactorMantissa: BigNumber;
    newReserveFactorMantissa: BigNumber;
}
export type NewReserveFactorEvent = TypedEvent<[BigNumber, BigNumber], NewReserveFactorEventObject>;
export type NewReserveFactorEventFilter = TypedEventFilter<NewReserveFactorEvent>;
export interface ReservesReducedEventObject {
    admin: string;
    reduceAmount: BigNumber;
    newTotalReserves: BigNumber;
}
export type ReservesReducedEvent = TypedEvent<[string, BigNumber, BigNumber], ReservesReducedEventObject>;
export type ReservesReducedEventFilter = TypedEventFilter<ReservesReducedEvent>;
export interface FailureEventObject {
    error: BigNumber;
    info: BigNumber;
    detail: BigNumber;
}
export type FailureEvent = TypedEvent<[BigNumber, BigNumber, BigNumber], FailureEventObject>;
export type FailureEventFilter = TypedEventFilter<FailureEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    amount: BigNumber;
}
export type TransferEvent = TypedEvent<[string, string, BigNumber], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface ApprovalEventObject {
    owner: string;
    spender: string;
    amount: BigNumber;
}
export type ApprovalEvent = TypedEvent<[string, string, BigNumber], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface CEther extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CEtherInterface;
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
        name(overrides?: CallOverrides): Promise<[string]>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mint(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        reserveFactorMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowBalanceCurrent(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        exchangeRateStored(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferFrom(src: PromiseOrValue<string>, dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        pendingAdmin(overrides?: CallOverrides): Promise<[string]>;
        decimals(overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfUnderlying(owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getCash(overrides?: CallOverrides): Promise<[BigNumber]>;
        _setComptroller(newComptroller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        totalBorrows(overrides?: CallOverrides): Promise<[BigNumber]>;
        repayBorrow(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        comptroller(overrides?: CallOverrides): Promise<[string]>;
        _reduceReserves(reduceAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialExchangeRateMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;
        accrualBlockNumber(overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalBorrowsCurrent(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        redeemUnderlying(redeemAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        totalReserves(overrides?: CallOverrides): Promise<[BigNumber]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        borrowBalanceStored(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        accrueInterest(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transfer(dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        borrowIndex(overrides?: CallOverrides): Promise<[BigNumber]>;
        liquidateBorrow(borrower: PromiseOrValue<string>, cTokenCollateral: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supplyRatePerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        seize(liquidator: PromiseOrValue<string>, borrower: PromiseOrValue<string>, seizeTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        _setPendingAdmin(newPendingAdmin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exchangeRateCurrent(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAccountSnapshot(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        borrow(borrowAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        redeem(redeemTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        repayBorrowBehalf(borrower: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        _acceptAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        _setInterestRateModel(newInterestRateModel: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        interestRateModel(overrides?: CallOverrides): Promise<[string]>;
        admin(overrides?: CallOverrides): Promise<[string]>;
        borrowRatePerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        _setReserveFactor(newReserveFactorMantissa: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isCToken(overrides?: CallOverrides): Promise<[boolean]>;
    };
    name(overrides?: CallOverrides): Promise<string>;
    approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mint(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    reserveFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;
    borrowBalanceCurrent(account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    exchangeRateStored(overrides?: CallOverrides): Promise<BigNumber>;
    transferFrom(src: PromiseOrValue<string>, dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    pendingAdmin(overrides?: CallOverrides): Promise<string>;
    decimals(overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfUnderlying(owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getCash(overrides?: CallOverrides): Promise<BigNumber>;
    _setComptroller(newComptroller: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    totalBorrows(overrides?: CallOverrides): Promise<BigNumber>;
    repayBorrow(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    comptroller(overrides?: CallOverrides): Promise<string>;
    _reduceReserves(reduceAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialExchangeRateMantissa(overrides?: CallOverrides): Promise<BigNumber>;
    accrualBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
    balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    totalBorrowsCurrent(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    redeemUnderlying(redeemAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    totalReserves(overrides?: CallOverrides): Promise<BigNumber>;
    symbol(overrides?: CallOverrides): Promise<string>;
    borrowBalanceStored(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    accrueInterest(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transfer(dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    borrowIndex(overrides?: CallOverrides): Promise<BigNumber>;
    liquidateBorrow(borrower: PromiseOrValue<string>, cTokenCollateral: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supplyRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
    seize(liquidator: PromiseOrValue<string>, borrower: PromiseOrValue<string>, seizeTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    _setPendingAdmin(newPendingAdmin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exchangeRateCurrent(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAccountSnapshot(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
    borrow(borrowAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    redeem(redeemTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    repayBorrowBehalf(borrower: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    _acceptAdmin(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    _setInterestRateModel(newInterestRateModel: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    interestRateModel(overrides?: CallOverrides): Promise<string>;
    admin(overrides?: CallOverrides): Promise<string>;
    borrowRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
    _setReserveFactor(newReserveFactorMantissa: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isCToken(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        name(overrides?: CallOverrides): Promise<string>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        mint(overrides?: CallOverrides): Promise<void>;
        reserveFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        borrowBalanceCurrent(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        exchangeRateStored(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(src: PromiseOrValue<string>, dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        pendingAdmin(overrides?: CallOverrides): Promise<string>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfUnderlying(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getCash(overrides?: CallOverrides): Promise<BigNumber>;
        _setComptroller(newComptroller: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        totalBorrows(overrides?: CallOverrides): Promise<BigNumber>;
        repayBorrow(overrides?: CallOverrides): Promise<void>;
        comptroller(overrides?: CallOverrides): Promise<string>;
        _reduceReserves(reduceAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initialExchangeRateMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        accrualBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        totalBorrowsCurrent(overrides?: CallOverrides): Promise<BigNumber>;
        redeemUnderlying(redeemAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        totalReserves(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<string>;
        borrowBalanceStored(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        accrueInterest(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        borrowIndex(overrides?: CallOverrides): Promise<BigNumber>;
        liquidateBorrow(borrower: PromiseOrValue<string>, cTokenCollateral: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        supplyRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        seize(liquidator: PromiseOrValue<string>, borrower: PromiseOrValue<string>, seizeTokens: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        _setPendingAdmin(newPendingAdmin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        exchangeRateCurrent(overrides?: CallOverrides): Promise<BigNumber>;
        getAccountSnapshot(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        borrow(borrowAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        redeem(redeemTokens: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        repayBorrowBehalf(borrower: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        _acceptAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        _setInterestRateModel(newInterestRateModel: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        interestRateModel(overrides?: CallOverrides): Promise<string>;
        admin(overrides?: CallOverrides): Promise<string>;
        borrowRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        _setReserveFactor(newReserveFactorMantissa: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isCToken(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        'AccrueInterest(uint256,uint256,uint256)'(interestAccumulated?: null, borrowIndex?: null, totalBorrows?: null): AccrueInterestEventFilter;
        AccrueInterest(interestAccumulated?: null, borrowIndex?: null, totalBorrows?: null): AccrueInterestEventFilter;
        'Mint(address,uint256,uint256)'(minter?: null, mintAmount?: null, mintTokens?: null): MintEventFilter;
        Mint(minter?: null, mintAmount?: null, mintTokens?: null): MintEventFilter;
        'Redeem(address,uint256,uint256)'(redeemer?: null, redeemAmount?: null, redeemTokens?: null): RedeemEventFilter;
        Redeem(redeemer?: null, redeemAmount?: null, redeemTokens?: null): RedeemEventFilter;
        'Borrow(address,uint256,uint256,uint256)'(borrower?: null, borrowAmount?: null, accountBorrows?: null, totalBorrows?: null): BorrowEventFilter;
        Borrow(borrower?: null, borrowAmount?: null, accountBorrows?: null, totalBorrows?: null): BorrowEventFilter;
        'RepayBorrow(address,address,uint256,uint256,uint256)'(payer?: null, borrower?: null, repayAmount?: null, accountBorrows?: null, totalBorrows?: null): RepayBorrowEventFilter;
        RepayBorrow(payer?: null, borrower?: null, repayAmount?: null, accountBorrows?: null, totalBorrows?: null): RepayBorrowEventFilter;
        'LiquidateBorrow(address,address,uint256,address,uint256)'(liquidator?: null, borrower?: null, repayAmount?: null, cTokenCollateral?: null, seizeTokens?: null): LiquidateBorrowEventFilter;
        LiquidateBorrow(liquidator?: null, borrower?: null, repayAmount?: null, cTokenCollateral?: null, seizeTokens?: null): LiquidateBorrowEventFilter;
        'NewPendingAdmin(address,address)'(oldPendingAdmin?: null, newPendingAdmin?: null): NewPendingAdminEventFilter;
        NewPendingAdmin(oldPendingAdmin?: null, newPendingAdmin?: null): NewPendingAdminEventFilter;
        'NewAdmin(address,address)'(oldAdmin?: null, newAdmin?: null): NewAdminEventFilter;
        NewAdmin(oldAdmin?: null, newAdmin?: null): NewAdminEventFilter;
        'NewComptroller(address,address)'(oldComptroller?: null, newComptroller?: null): NewComptrollerEventFilter;
        NewComptroller(oldComptroller?: null, newComptroller?: null): NewComptrollerEventFilter;
        'NewMarketInterestRateModel(address,address)'(oldInterestRateModel?: null, newInterestRateModel?: null): NewMarketInterestRateModelEventFilter;
        NewMarketInterestRateModel(oldInterestRateModel?: null, newInterestRateModel?: null): NewMarketInterestRateModelEventFilter;
        'NewReserveFactor(uint256,uint256)'(oldReserveFactorMantissa?: null, newReserveFactorMantissa?: null): NewReserveFactorEventFilter;
        NewReserveFactor(oldReserveFactorMantissa?: null, newReserveFactorMantissa?: null): NewReserveFactorEventFilter;
        'ReservesReduced(address,uint256,uint256)'(admin?: null, reduceAmount?: null, newTotalReserves?: null): ReservesReducedEventFilter;
        ReservesReduced(admin?: null, reduceAmount?: null, newTotalReserves?: null): ReservesReducedEventFilter;
        'Failure(uint256,uint256,uint256)'(error?: null, info?: null, detail?: null): FailureEventFilter;
        Failure(error?: null, info?: null, detail?: null): FailureEventFilter;
        'Transfer(address,address,uint256)'(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null): TransferEventFilter;
        'Approval(address,address,uint256)'(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, amount?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, amount?: null): ApprovalEventFilter;
    };
    estimateGas: {
        name(overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mint(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        reserveFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        borrowBalanceCurrent(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        exchangeRateStored(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(src: PromiseOrValue<string>, dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfUnderlying(owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getCash(overrides?: CallOverrides): Promise<BigNumber>;
        _setComptroller(newComptroller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        totalBorrows(overrides?: CallOverrides): Promise<BigNumber>;
        repayBorrow(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        comptroller(overrides?: CallOverrides): Promise<BigNumber>;
        _reduceReserves(reduceAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialExchangeRateMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        accrualBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        totalBorrowsCurrent(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        redeemUnderlying(redeemAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        totalReserves(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        borrowBalanceStored(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        accrueInterest(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transfer(dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        borrowIndex(overrides?: CallOverrides): Promise<BigNumber>;
        liquidateBorrow(borrower: PromiseOrValue<string>, cTokenCollateral: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supplyRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        seize(liquidator: PromiseOrValue<string>, borrower: PromiseOrValue<string>, seizeTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        _setPendingAdmin(newPendingAdmin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exchangeRateCurrent(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAccountSnapshot(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        borrow(borrowAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        redeem(redeemTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        repayBorrowBehalf(borrower: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        _acceptAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        _setInterestRateModel(newInterestRateModel: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        interestRateModel(overrides?: CallOverrides): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        borrowRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        _setReserveFactor(newReserveFactorMantissa: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isCToken(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mint(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        reserveFactorMantissa(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowBalanceCurrent(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exchangeRateStored(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(src: PromiseOrValue<string>, dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfUnderlying(owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getCash(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _setComptroller(newComptroller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        totalBorrows(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        repayBorrow(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        comptroller(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _reduceReserves(reduceAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialExchangeRateMantissa(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accrualBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalBorrowsCurrent(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        redeemUnderlying(redeemAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        totalReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowBalanceStored(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accrueInterest(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transfer(dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        borrowIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidateBorrow(borrower: PromiseOrValue<string>, cTokenCollateral: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supplyRatePerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        seize(liquidator: PromiseOrValue<string>, borrower: PromiseOrValue<string>, seizeTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        _setPendingAdmin(newPendingAdmin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exchangeRateCurrent(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAccountSnapshot(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrow(borrowAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        redeem(redeemTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        repayBorrowBehalf(borrower: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        _acceptAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        _setInterestRateModel(newInterestRateModel: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        interestRateModel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowRatePerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _setReserveFactor(newReserveFactorMantissa: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isCToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
