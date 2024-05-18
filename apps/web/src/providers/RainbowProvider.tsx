import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

interface Props {
  children: React.ReactNode;
}
const RainbowProvider = ({ children }: Props) => {
  return <RainbowKitProvider>{children}</RainbowKitProvider>;
};
export default RainbowProvider;
