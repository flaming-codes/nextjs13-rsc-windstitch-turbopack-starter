import "@/styles/globals.css";

import localFont from "next/font/local";
import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Header } from "@/modules/header/header";
import { Main } from "@/modules/main/main";

const inter = localFont({
  variable: "--font-inter",
  src: [
    {
      path: "../assets/fonts/Inter-Light.woff2",
      weight: "300",
    },
    {
      path: "../assets/fonts/Inter-Light.woff",
      weight: "300",
    },
    {
      path: "../assets/fonts/Inter-Regular.woff2",
      weight: "400",
    },
    {
      path: "../assets/fonts/Inter-Regular.woff",
      weight: "400",
    },
    {
      path: "../assets/fonts/Inter-Medium.woff2",
      weight: "500",
    },
    {
      path: "../assets/fonts/Inter-Medium.woff",
      weight: "500",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    default: "Next.js 13 with RSC, Windstitch, and Turbopack",
    template: "%s | flaming.codes",
  },
  description:
    "A template to get you started with Next.js 13, RSC, Windstitch, and Turbopack.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body className="mb-48">
        <Header />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
