import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { CustomNFTProvider } from '../Context/CustomNFTProvider';
import { RealEstateMarketplaceProvider } from '../Context/RealEstateMarketplaceProvider';
import "./global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomNFTProvider>
        <RealEstateMarketplaceProvider>
          <Head>
            <title>NitroVest</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
          </Head>
          <Component {...pageProps} />
        </RealEstateMarketplaceProvider>
      </CustomNFTProvider>
    </>
  );
}

export default MyApp;
