import { Inter, Roboto_Mono, Kanit } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const kanit = Kanit({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kanit",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});
