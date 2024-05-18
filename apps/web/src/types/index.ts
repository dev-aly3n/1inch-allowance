import { Address } from "viem";

export type AssetName = "USDC" | "USDT" | "WETH" | "WBTC" | "DAI";

export type Asset = {
  name: AssetName;
  description: string;
  iconName: string;
  decimals: number;
  address: Address;
  allowance?: number;
};
