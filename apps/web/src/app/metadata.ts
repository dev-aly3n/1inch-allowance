import type { Metadata } from "next";

const metaVars = {
  title: "1inch",
  description: "a simple allowance page for 1inch",
};
export const GlobalMetadata: Metadata = {
  title: metaVars.title,
  description: metaVars.description,
  metadataBase: new URL("https://1inch-allowance.vercel.app"),
  openGraph: {
    title: metaVars.title,
    description: metaVars.description,
    url: "https://1inch-allowance.vercel.app",
    siteName: metaVars.title,
    images: {
      url: "/cover.jpg",
      width: 400,
      height: 400,
      type: "image/jpg",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: metaVars.title,
    description: metaVars.description,
    images: ["/cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};
