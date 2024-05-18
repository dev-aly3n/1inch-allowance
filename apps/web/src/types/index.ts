import { Address } from "viem";

export type AssetName =
  | "USDC"
  | "USDT"
  | "WETH"
  | "WBTC"
  | "DAI"
  | "1inch"
  | "AAVE"
  | "BNB"
  | "LINK"
  | "TRON";

export type Asset = {
  name: AssetName;
  iconName: string;
  description: string;
  decimals: number;
  address: Address;
  allowance?: bigint;
  balance?: bigint;
};
