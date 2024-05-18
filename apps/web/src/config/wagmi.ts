import { createConfig, http } from "wagmi";
import type { Config} from "wagmi";
import { mainnet } from "wagmi/chains";

export const wagmiConfig:Config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});
