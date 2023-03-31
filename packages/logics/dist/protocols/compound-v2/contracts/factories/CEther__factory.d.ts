import { Signer } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { CEther, CEtherInterface } from '../CEther';
export declare class CEther__factory {
    static readonly abi: readonly [{
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [];
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly payable: true;
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "reserveFactorMantissa";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "borrowBalanceCurrent";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "exchangeRateStored";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "src";
            readonly type: "address";
        }, {
            readonly name: "dst";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "pendingAdmin";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "balanceOfUnderlying";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "getCash";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "newComptroller";
            readonly type: "address";
        }];
        readonly name: "_setComptroller";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "totalBorrows";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [];
        readonly name: "repayBorrow";
        readonly outputs: readonly [];
        readonly payable: true;
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "comptroller";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "reduceAmount";
            readonly type: "uint256";
        }];
        readonly name: "_reduceReserves";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "initialExchangeRateMantissa";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "accrualBlockNumber";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [];
        readonly name: "totalBorrowsCurrent";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "redeemAmount";
            readonly type: "uint256";
        }];
        readonly name: "redeemUnderlying";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "totalReserves";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "borrowBalanceStored";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [];
        readonly name: "accrueInterest";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "dst";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "borrowIndex";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "borrower";
            readonly type: "address";
        }, {
            readonly name: "cTokenCollateral";
            readonly type: "address";
        }];
        readonly name: "liquidateBorrow";
        readonly outputs: readonly [];
        readonly payable: true;
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "supplyRatePerBlock";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "liquidator";
            readonly type: "address";
        }, {
            readonly name: "borrower";
            readonly type: "address";
        }, {
            readonly name: "seizeTokens";
            readonly type: "uint256";
        }];
        readonly name: "seize";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "newPendingAdmin";
            readonly type: "address";
        }];
        readonly name: "_setPendingAdmin";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [];
        readonly name: "exchangeRateCurrent";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getAccountSnapshot";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "borrowAmount";
            readonly type: "uint256";
        }];
        readonly name: "borrow";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "redeemTokens";
            readonly type: "uint256";
        }];
        readonly name: "redeem";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "borrower";
            readonly type: "address";
        }];
        readonly name: "repayBorrowBehalf";
        readonly outputs: readonly [];
        readonly payable: true;
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [];
        readonly name: "_acceptAdmin";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "newInterestRateModel";
            readonly type: "address";
        }];
        readonly name: "_setInterestRateModel";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "interestRateModel";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "admin";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "borrowRatePerBlock";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "newReserveFactorMantissa";
            readonly type: "uint256";
        }];
        readonly name: "_setReserveFactor";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "isCToken";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly name: "comptroller_";
            readonly type: "address";
        }, {
            readonly name: "interestRateModel_";
            readonly type: "address";
        }, {
            readonly name: "initialExchangeRateMantissa_";
            readonly type: "uint256";
        }, {
            readonly name: "name_";
            readonly type: "string";
        }, {
            readonly name: "symbol_";
            readonly type: "string";
        }, {
            readonly name: "decimals_";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly payable: true;
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly name: "interestAccumulated";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly name: "borrowIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly name: "totalBorrows";
            readonly type: "uint256";
        }];
        readonly name: "AccrueInterest";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly name: "minter";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "mintAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly name: "mintTokens";
            readonly type: "uint256";
        }];
        readonly name: "Mint";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly name: "redeemer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "redeemAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly name: "redeemTokens";
            readonly type: "uint256";
        }];
        readonly name: "Redeem";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly name: "borrower";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "borrowAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly name: "accountBorrows";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly name: "totalBorrows";
            readonly type: "uint256";
        }];
        readonly name: "Borrow";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly name: "payer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "borrower";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "repayAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly name: "accountBorrows";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly name: "totalBorrows";
            readonly type: "uint256";
        }];
        readonly name: "RepayBorrow";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly name: "liquidator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "borrower";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "repayAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly name: "cTokenCollateral";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "seizeTokens";
            readonly type: "uint256";
        }];
        readonly name: "LiquidateBorrow";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly name: "oldPendingAdmin";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "newPendingAdmin";
            readonly type: "address";
        }];
        readonly name: "NewPendingAdmin";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly name: "oldAdmin";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "NewAdmin";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly name: "oldComptroller";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "newComptroller";
            readonly type: "address";
        }];
        readonly name: "NewComptroller";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly name: "oldInterestRateModel";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "newInterestRateModel";
            readonly type: "address";
        }];
        readonly name: "NewMarketInterestRateModel";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly name: "oldReserveFactorMantissa";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly name: "newReserveFactorMantissa";
            readonly type: "uint256";
        }];
        readonly name: "NewReserveFactor";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly name: "admin";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "reduceAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly name: "newTotalReserves";
            readonly type: "uint256";
        }];
        readonly name: "ReservesReduced";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly name: "error";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly name: "info";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly name: "detail";
            readonly type: "uint256";
        }];
        readonly name: "Failure";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }];
    static createInterface(): CEtherInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CEther;
}
