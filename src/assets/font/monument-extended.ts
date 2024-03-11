import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const monumentExtended = localFont({
  src: "./Monument Extended.woff2",
  weight: "400",
  display: "swap",
});
