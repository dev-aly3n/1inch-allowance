import { useQuery } from "@tanstack/react-query";
import { multicall } from "@wagmi/core";
import { erc20Abi } from "viem";
import { useAccount } from "wagmi";

import { wagmiConfig } from "@/config/wagmi";
import { assets } from "@/constants/assets";
import { oneInchContractAddress } from "@/constants/contracts";

// the actual type of the wagmi multical is any
const fetchAllowancesAndBalances = async (
  tokenAllowanceContracts: any,
  tokenBalanceContracts: any
) => {
  const data = await multicall(wagmiConfig, {
    contracts: [...tokenAllowanceContracts, ...tokenBalanceContracts],
  });

  return assets.map((token, index) => ({
    ...token,
    allowance: (data[index]?.result as bigint) / BigInt(token.decimals),
    balance: (data[index * 2]?.result as bigint) / BigInt(token.decimals),
  }));
};

export const useAllowanceAndBalance = () => {
  const { address: userAddress, isConnected } = useAccount();
  const tokenAllowanceContracts = assets.map((token) => ({
    address: token.address,
    abi: erc20Abi,
    functionName: "allowance",
    args: [userAddress, oneInchContractAddress],
  }));
  const tokenBalanceContracts = assets.map((token) => ({
    address: token.address,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [userAddress],
  }));
  const { data: tokensWithAllowanceAndBalance, isLoading } = useQuery({
    queryKey: ["allowances", userAddress || ""],
    queryFn: () =>
      fetchAllowancesAndBalances(
        tokenAllowanceContracts,
        tokenBalanceContracts
      ),
    enabled: isConnected,
  });

  return {
    tokensWithAllowanceAndBalance: tokensWithAllowanceAndBalance || assets,
    isLoading,
  };
};
