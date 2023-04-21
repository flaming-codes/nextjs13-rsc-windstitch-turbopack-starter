import "@/styles/globals.css";

import localFont from "next/font/local";
import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Header } from "@/modules/header/header";
import { Main } from "@/modules/main/main";
import Link from "next/link";

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

// By default, every page will be revalidated after one 1 hour.
// Next 13 also suppports revalidation thresholds per fetch on RSC.
// @see https://beta.nextjs.org/docs/data-fetching/caching
export const revalidate = 60 * 60;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body>
        <Header />
        <Main>{children}</Main>
        <footer className="p-6 pt-60">
          <small>
            <span>by </span>
            <a href="https://flaming.codes" className="font-medium">
              flaming.codes
            </a>
          </small>
        </footer>
      </body>
    </html>
  );
}
