"use client"
import { WagmiProvider as Provider } from "wagmi";

import { wagmiConfig } from "@/config/wagmi";

interface Props {
  children: React.ReactNode;
}
const WagmiProvider = ({ children }: Props) => {
  return <Provider config={wagmiConfig}>{children}</Provider>;
};

export default WagmiProvider;
