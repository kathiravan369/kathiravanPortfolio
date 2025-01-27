import { LogRocket } from "@/components";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import ss from "../public/favicon2.ico"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title> kathiravan.dev</title>
        {/* Ensure the path directly points to the favicon */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Marieflor Bawanan"></meta>
        <meta
          name="description"
          content="Marieflor Bawanan is a frontend developer who loves to work on the web."
        ></meta>
        <meta name="theme-color" content="#794856"></meta>
      </Head>

      <LogRocket />
      <Analytics />
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
