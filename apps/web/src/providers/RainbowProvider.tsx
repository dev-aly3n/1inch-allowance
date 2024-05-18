"use client";

import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";

interface Props {
  children: React.ReactNode;
}
const RainbowProvider = ({ children }: Props) => {
  return (
    <RainbowKitProvider theme={darkTheme()}>{children}</RainbowKitProvider>
  );
};
export default RainbowProvider;
