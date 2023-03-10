import { Signer, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../common';
import type { SpenderPermit2ERC20, SpenderPermit2ERC20Interface } from '../SpenderPermit2ERC20';
type SpenderPermit2ERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SpenderPermit2ERC20__factory extends ContractFactory {
    constructor(...args: SpenderPermit2ERC20ConstructorParams);
    deploy(router_: PromiseOrValue<string>, permit2_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SpenderPermit2ERC20>;
    getDeployTransaction(router_: PromiseOrValue<string>, permit2_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SpenderPermit2ERC20;
    connect(signer: Signer): SpenderPermit2ERC20__factory;
    static readonly bytecode = "0x60c060405234801561001057600080fd5b50604051610e1b380380610e1b83398101604081905261002f91610062565b6001600160a01b039182166080521660a052610095565b80516001600160a01b038116811461005d57600080fd5b919050565b6000806040838503121561007557600080fd5b61007e83610046565b915061008c60208401610046565b90509250929050565b60805160a051610d2b6100f060003960008181606c01528181610206015281816103a50152818161051e015261071e01526000818160fd015281816101240152818161026d01528181610425015261059a0152610d2b6000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806312261ee714610067578063c81cd1f4146100aa578063da57c490146100bf578063ee27cd7e146100d2578063f2c7f02e146100e5578063f887ea40146100f8575b600080fd5b61008e7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b6100bd6100b83660046107a6565b61011f565b005b6100bd6100cd366004610828565b610268565b6100bd6100e03660046108f6565b610420565b6100bd6100f3366004610969565b610595565b61008e7f000000000000000000000000000000000000000000000000000000000000000081565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ea67780f6040518163ffffffff1660e01b81526004016040805180830381865afa15801561017f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101a391906109de565b9092509050336001600160a01b038216146101d15760405163bebdc75760e01b815260040160405180910390fd5b604051631b63c28b60e11b81526001600160a01b038381166004830152336024830152848116604483015285811660648301527f000000000000000000000000000000000000000000000000000000000000000016906336c7851690608401600060405180830381600087803b15801561024a57600080fd5b505af115801561025e573d6000803e3d6000fd5b5050505050505050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ea67780f6040518163ffffffff1660e01b81526004016040805180830381865afa1580156102c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ec91906109de565b9092509050336001600160a01b0382161461031a5760405163bebdc75760e01b815260040160405180910390fd5b60006103268880610a0d565b9050905060005b8181101561038d573388888381811061034857610348610a57565b61035e9260206040909202019081019150610a6d565b6001600160a01b03161461038557604051631653a08960e21b815260040160405180910390fd5b60010161032d565b5060405163edd9444b60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063edd9444b906103e4908b908b908b9089908c908c90600401610b19565b600060405180830381600087803b1580156103fe57600080fd5b505af1158015610412573d6000803e3d6000fd5b505050505050505050505050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ea67780f6040518163ffffffff1660e01b81526004016040805180830381865afa158015610480573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a491906109de565b9092509050336001600160a01b038216146104d25760405163bebdc75760e01b815260040160405180910390fd5b336104e06020870187610a6d565b6001600160a01b03161461050757604051631653a08960e21b815260040160405180910390fd5b60405163187945bd60e11b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906330f28b7a9061055b908990899087908a908a90600401610c01565b600060405180830381600087803b15801561057557600080fd5b505af1158015610589573d6000803e3d6000fd5b50505050505050505050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ea67780f6040518163ffffffff1660e01b81526004016040805180830381865afa1580156105f5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061991906109de565b9092509050336001600160a01b038216146106475760405163bebdc75760e01b815260040160405180910390fd5b8260005b8181101561070657836001600160a01b031686868381811061066f5761066f610a57565b6106859260206080909202019081019150610a6d565b6001600160a01b0316146106ac576040516322fe1f0760e01b815260040160405180910390fd5b338686838181106106bf576106bf610a57565b90506080020160200160208101906106d79190610a6d565b6001600160a01b0316146106fe57604051631653a08960e21b815260040160405180910390fd5b60010161064b565b50604051630d58b1db60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690630d58b1db906107559088908890600401610c60565b600060405180830381600087803b15801561076f57600080fd5b505af1158015610783573d6000803e3d6000fd5b505050505050505050565b6001600160a01b03811681146107a357600080fd5b50565b600080604083850312156107b957600080fd5b82356107c48161078e565b915060208301356107d48161078e565b809150509250929050565b60008083601f8401126107f157600080fd5b50813567ffffffffffffffff81111561080957600080fd5b60208301915083602082850101111561082157600080fd5b9250929050565b60008060008060006060868803121561084057600080fd5b853567ffffffffffffffff8082111561085857600080fd5b908701906060828a03121561086c57600080fd5b9095506020870135908082111561088257600080fd5b818801915088601f83011261089657600080fd5b8135818111156108a557600080fd5b8960208260061b85010111156108ba57600080fd5b6020830196508095505060408801359150808211156108d857600080fd5b506108e5888289016107df565b969995985093965092949392505050565b60008060008084860360e081121561090d57600080fd5b608081121561091b57600080fd5b8594506040607f198201121561093057600080fd5b5060808501925060c085013567ffffffffffffffff81111561095157600080fd5b61095d878288016107df565b95989497509550505050565b6000806020838503121561097c57600080fd5b823567ffffffffffffffff8082111561099457600080fd5b818501915085601f8301126109a857600080fd5b8135818111156109b757600080fd5b8660208260071b85010111156109cc57600080fd5b60209290920196919550909350505050565b600080604083850312156109f157600080fd5b82516109fc8161078e565b60208401519092506107d48161078e565b6000808335601e19843603018112610a2457600080fd5b83018035915067ffffffffffffffff821115610a3f57600080fd5b6020019150600681901b360382131561082157600080fd5b634e487b7160e01b600052603260045260246000fd5b600060208284031215610a7f57600080fd5b8135610a8a8161078e565b9392505050565b8035610a9c8161078e565b6001600160a01b03168252602090810135910152565b81835260208301925060008160005b84811015610ae657610ad38683610a91565b6040958601959190910190600101610ac1565b5093949350505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60808152600060e082018835601e198a3603018112610b3757600080fd5b890160208101903567ffffffffffffffff811115610b5457600080fd5b8060061b3603821315610b6657600080fd5b60606080860152918290529060009061010085015b81831015610ba057610b8d8185610a91565b6040938401936001939093019201610b7b565b60208c013560a087015260408c013560c08701528581036020870152610bc7818b8d610ab2565b9350505050610be160408401876001600160a01b03169052565b8281036060840152610bf4818587610af0565b9998505050505050505050565b6000610100610c108389610a91565b6040880135604084015260608801356060840152610c316080840188610a91565b6001600160a01b03861660c084015260e08301819052610c548184018587610af0565b98975050505050505050565b6020808252818101839052600090604080840186845b87811015610ce8578135610c898161078e565b6001600160a01b0390811684528286013590610ca48261078e565b908116848701528285013590610cb98261078e565b9081168486015260609083820135610cd08161078e565b16908401526080928301929190910190600101610c76565b509097965050505050505056fea2646970667358221220a9d6056aa54b0f38c7664a50ea1e4bd91aefaf8a728458e825d8e78b493a930a64736f6c63430008120033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "router_";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "permit2_";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAgent";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidTransferFrom";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidTransferTo";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "permit2";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISignatureTransfer.TokenPermissions";
                readonly name: "permitted";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "deadline";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ISignatureTransfer.PermitTransferFrom";
            readonly name: "permit";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "requestedAmount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ISignatureTransfer.SignatureTransferDetails";
            readonly name: "transferDetails";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly name: "permitPullToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISignatureTransfer.TokenPermissions[]";
                readonly name: "permitted";
                readonly type: "tuple[]";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "deadline";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ISignatureTransfer.PermitBatchTransferFrom";
            readonly name: "permit";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "requestedAmount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ISignatureTransfer.SignatureTransferDetails[]";
            readonly name: "transferDetails";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly name: "permitPullTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint160";
            readonly name: "amount";
            readonly type: "uint160";
        }];
        readonly name: "pullToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "uint160";
                readonly name: "amount";
                readonly type: "uint160";
            }, {
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }];
            readonly internalType: "struct IAllowanceTransfer.AllowanceTransferDetails[]";
            readonly name: "transferDetails";
            readonly type: "tuple[]";
        }];
        readonly name: "pullTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "router";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): SpenderPermit2ERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): SpenderPermit2ERC20;
}
export {};
