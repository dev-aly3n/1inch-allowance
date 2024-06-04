import { type ClassValue, clsx } from "clsx";
import Generic from "cryptocurrency-icons/svg/icon/generic.svg";
import { twMerge } from "tailwind-merge";
import { formatUnits, parseUnits } from "viem";

import { icons } from "@/assets/icons";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTokenIcon = (key: string) => {
  const icon = icons[key.toUpperCase() as keyof typeof icons];
  return icon || Generic;
};

export const fixPrecision = (value: number, precision: number): number => {
  const factor = Math.pow(10, precision);
  return Math.round(value * factor) / factor;
};

const THRESHOLDS = {
  TRILLION: BigInt("1000000000000"),
  BILLION: BigInt("1000000000"),
  MILLION: BigInt("1000000"),
  THOUSAND: BigInt("1000"),
  QUINTILLION: BigInt("1000000000000000000000"),
};

const thresholdWithDecimals = (threshold: bigint, decimals: number): bigint => {
  return parseUnits("1", decimals) * threshold;
};

export const formatBigNumbers = (bigNum: bigint, decimals: number): string => {
  const formattedBigNumStr = formatUnits(bigNum, decimals);
  const formattedBigNum = Number(formattedBigNumStr);

  if (bigNum >= thresholdWithDecimals(THRESHOLDS.QUINTILLION, decimals)) {
    const beforeDecimal =
      formattedBigNumStr.split(".")[0] || formattedBigNumStr;
    const significant = beforeDecimal.slice(0, 5);
    const exponent = beforeDecimal.length - 1;
    return `${significant[0]}.${significant.slice(1)} x 10<sup>${exponent}</sup>`;
  } else if (bigNum >= thresholdWithDecimals(THRESHOLDS.TRILLION, decimals)) {
    return `${fixPrecision(formattedBigNum / 1e12, 4)} T`;
  } else if (bigNum >= thresholdWithDecimals(THRESHOLDS.BILLION, decimals)) {
    return `${fixPrecision(formattedBigNum / 1e9, 4)} B`;
  } else if (bigNum >= thresholdWithDecimals(THRESHOLDS.MILLION, decimals)) {
    return `${fixPrecision(formattedBigNum / 1e6, 4)} M`;
  } else if (bigNum >= thresholdWithDecimals(THRESHOLDS.THOUSAND, decimals)) {
    return `${fixPrecision(formattedBigNum / 1e3, 4)} K`;
  }

  return formattedBigNum.toLocaleString();
};
