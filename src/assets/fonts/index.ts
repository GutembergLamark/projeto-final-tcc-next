import { DM_Sans, Inter } from "next/font/google";
export const inter = Inter({
  display: "fallback",
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const dmSans = DM_Sans({
  display: "fallback",
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
});
