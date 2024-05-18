import { Metadata } from "next";

import { fonts } from "@/assets/fonts";
import { Providers } from "@/providers";
import "@/styles/globals.css";
import { cn } from "@/utils";

import { GlobalMetadata } from "./metadata";

export const metadata: Metadata = GlobalMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased",
          fonts.inter.variable
        )}
      >
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
