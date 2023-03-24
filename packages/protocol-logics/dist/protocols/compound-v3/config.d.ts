type ContractNames = 'CometRewards';
export declare const contractAddressMap: Record<number, {
    [k in ContractNames]: string;
}>;
export declare function getContractAddress(chainId: number, name: ContractNames): string;
export declare enum MarketId {
    USDC = "USDC",
    ETH = "ETH"
}
export interface MarketConfig {
    id: string;
    cometAddress: string;
    baseTokenAddress: string;
    bulker: {
        address: string;
        abi: string;
        actions: {
            supplyNativeToken: string | number;
            withdrawNativeToken: string | number;
        };
    };
}
export declare const marketsMap: Record<number, MarketConfig[]>;
export declare const marketMap: Record<number, Record<string, MarketConfig>>;
export declare function getMarkets(chainId: number): MarketConfig[];
export declare function getMarket(chainId: number, id: string): MarketConfig;
export {};
