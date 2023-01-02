import "../styles/globals.scss";

import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { getRandomColor } from "../util/colors";

import * as snippet from "@segment/snippet";

function renderSnippet() {
  const opts = {
    apiKey: process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY,
    // note: the page option only covers SSR tracking.
    // Page.js is used to track other events using `window.analytics.page()`
    page: true,
  };

  if (process.env.NODE_ENV === "development") {
    return snippet.max(opts);
  }

  return snippet.min(opts);
}

const TheWrapLab = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const color = getRandomColor();

    document.documentElement.style.setProperty(
      "--variable-color",
      color ?? null
    );
  }, []);

  return (
    <>
      <Head>
        <title>The wrap lab</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Script
        id="segment-script"
        dangerouslySetInnerHTML={{ __html: renderSnippet() }}
      />

      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default TheWrapLab;
