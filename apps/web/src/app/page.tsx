"use client";

import { useAccount } from "wagmi";

import CheckeredBackground from "@/components/CheckeredBackground";
import CoinTable from "@/components/CoinTable";
import WalletConnectButton from "@/components/WalletConnectButton";
import { useAllowance } from "@/hooks/useAllowance";

export default function Page() {
  const { tokensWithAllowance, isLoading } = useAllowance();

  console.log("kkk", tokensWithAllowance);
  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      <CheckeredBackground />
      <div className="absolute w-[512px] h-[512px] z-50 bg-secondary-700 flex flex-col rounded-lg overflow-hidden">
        <div className="w-full h-24 px-8 flex justify-between items-center border-b border-white/20">
          <h2 className="text-white text-2xl">1inch Allowance</h2>
          <WalletConnectButton />
        </div>
        <div className="w-full h-full">
          {tokensWithAllowance && <CoinTable tokens={tokensWithAllowance} />}
        </div>
      </div>
    </div>
  );
}
