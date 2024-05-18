import { useQuery } from "@tanstack/react-query";
import { multicall } from "@wagmi/core";
import { erc20Abi } from "viem";
import { useAccount } from "wagmi";

import { wagmiConfig } from "@/config/wagmi";
import { assets } from "@/constants/assets";
import { oneInchContractAddress } from "@/constants/contracts";

const fetchAllowances = async (tokenAllowanceContracts: any) => {
  const allowances = await multicall(wagmiConfig, {
    contracts: tokenAllowanceContracts,
  });

  return assets.map((token, index) => ({
    ...token,
    allowance: allowances[index]?.result as number,
  }));
};

export const useAllowance = () => {
  const { address: userAddress, isConnected } = useAccount();
  const tokenAllowanceContracts = assets.map((token) => ({
    address: token.address,
    abi: erc20Abi,
    functionName: "allowance",
    args: [userAddress, oneInchContractAddress],
  }));
  const { data: tokensWithAllowance, isLoading } = useQuery({
    queryKey: ["allowances", userAddress || ""],
    queryFn: () => fetchAllowances(tokenAllowanceContracts),
    enabled: isConnected,
  });

  return {
    tokensWithAllowance,
    isLoading,
  };
};
