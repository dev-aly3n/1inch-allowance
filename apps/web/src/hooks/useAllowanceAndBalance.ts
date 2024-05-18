import { useQuery } from "@tanstack/react-query";
import { multicall } from "@wagmi/core";
import { erc20Abi, formatUnits } from "viem";
import { useAccount } from "wagmi";

import { wagmiConfig } from "@/config/wagmi";
import { assets } from "@/constants/assets";
import { oneInchContractAddress } from "@/constants/contracts";
import { fixPrecision } from "@/utils";

// the actual type of the wagmi multical is any
const fetchAllowancesAndBalances = async (
  tokenAllowanceContracts: any,
  tokenBalanceContracts: any
) => {
  const data = await multicall(wagmiConfig, {
    contracts: [...tokenAllowanceContracts, ...tokenBalanceContracts],
  });

  return assets.map((token, index) => {
    let allowance = formatUnits(data[index]?.result as bigint, token.decimals);
    allowance = fixPrecision(Number(allowance), 4).toString();
    let balance = formatUnits(
      data[index * 2]?.result as bigint,
      token.decimals
    );
    balance = fixPrecision(Number(balance), 4).toString();
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
