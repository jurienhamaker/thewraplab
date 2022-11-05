import "../styles/globals.scss";

import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { getRandomColor } from "../util/colors";

const TheWrapLab = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    console.log("??");
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

      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default TheWrapLab;
