import "../styles/globals.scss";

import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const MyApp = ({ Component, pageProps }: AppProps) => (
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

export default MyApp;
