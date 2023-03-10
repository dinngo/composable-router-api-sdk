export declare const contractAddressMap: {
    Comptroller: string;
    CompoundLens: string;
};
type ContractNames = keyof typeof contractAddressMap;
export declare function getContractAddress(name: ContractNames): string;
export {};
