import { useQuery } from "@tanstack/react-query";
import { multicall } from "@wagmi/core";
import { erc20Abi, formatUnits } from "viem";
import { useAccount } from "wagmi";

import { wagmiConfig } from "@/config/wagmi";
import { assets } from "@/constants/assets";
import { oneInchContractAddress } from "@/constants/contracts";
import { formatBigNumbers } from "@/utils";

// the actual type of the wagmi multical is any
const fetchAllowancesAndBalances = async (
  tokenAllowanceContracts: any,
  tokenBalanceContracts: any
) => {
  const data = await multicall(wagmiConfig, {
    contracts: [...tokenAllowanceContracts, ...tokenBalanceContracts],
  });

  return assets.map((token, index) => {
    const allowance = formatBigNumbers(
      data[index]?.result as bigint,
      token.decimals
    );

    const balance = formatBigNumbers(
      data[index + assets.length]?.result as bigint,
      token.decimals
    );

    return {
      ...token,
      allowance,
      balance,
    };
  });
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
  return useQuery({
    queryKey: ["allowances", userAddress || ""],
    queryFn: () =>
      fetchAllowancesAndBalances(
        tokenAllowanceContracts,
        tokenBalanceContracts
      ),
    enabled: isConnected,
  });
};
