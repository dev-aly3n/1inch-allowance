import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import type { Config } from "wagmi";
import { mainnet } from "wagmi/chains";

export const wagmiConfig: Config = getDefaultConfig({
  appName: "1inch allowance",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",
  chains: [mainnet],
  ssr: true,
});
