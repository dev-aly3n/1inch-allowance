import { type ClassValue, clsx } from "clsx";
import Generic from "cryptocurrency-icons/svg/icon/generic.svg";
import { twMerge } from "tailwind-merge";

import { icons } from "@/assets/icons";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function convertArrayByKeyToOBJ<
  T extends Record<string | number | symbol, any>,
  K extends keyof T,
>(options: T[], keyName: K): Record<T[K], T> {
  const obj = {} as Record<T[K], T>;
  options.forEach((option) => {
    const key = option[keyName];
    obj[key] = option;
  });
  return obj;
}

export const getTokenIcon = (key: string) => {
  const icon = icons[key.toUpperCase() as keyof typeof icons];
  return icon || Generic;
};
