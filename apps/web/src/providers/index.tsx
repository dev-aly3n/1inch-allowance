import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";

import theme from "@/config/theme";

import RainbowProvider from "./RainbowProvider";
import ReactQueryProvider from "./ReactQueryProvider";
import WagmiProvider from "./WagmiProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider>
      <ReactQueryProvider>
        <RainbowProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </AppRouterCacheProvider>
        </RainbowProvider>
      </ReactQueryProvider>
    </WagmiProvider>
  );
}
