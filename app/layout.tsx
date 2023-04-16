import "./globals.css";
import localFont from "next/font/local";
import { PropsWithChildren } from "react";

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

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={inter.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
