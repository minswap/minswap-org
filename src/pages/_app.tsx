import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import 'tailwindcss/tailwind.css';
import 'swiper/swiper.scss';

function MinswapInterfaceApp({ Component, pageProps }: AppProps): React.ReactElement<AppProps> {
  return (
    <>
      <Head>
        <title>Minswap | Multi-pool decentralized exchange on the Cardano blockchain</title>
        <meta charSet="UTF-8" />
        <meta content="Multi-pool decentralized exchange on Cardano" name="description" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <meta content="width=device-width, initial-scale=1, viewport-fit=cover" name="viewport" />

        {/* Twitter Card Data Start */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@minswapdex" name="twitter:site" />
        <meta content="MinSwap | Multi-pool DEX on the Cardano Blockchain" name="twitter:title" />
        <meta
          content="MinSwap is a Multi-pool decentralized exchange (DEX) that runs on the Cardano (ADA) Blockchain. Swap tokens with minimal cost, minimal time and maximal convenience."
          name="twitter:description"
        />
        <meta content="/meta-bg.png" name="twitter:image" />
        {/* Twitter Card Data End */}

        {/* Open Graph Data Start*/}
        <meta content="MinSwap | Multi-pool DEX on the Cardano Blockchain" property="og:title" />
        <meta
          content="MinSwap is a Multi-pool decentralized exchange (DEX) that runs on the Cardano (ADA) Blockchain. Swap tokens with minimal cost, minimal time and maximal convenience."
          property="og:description"
        />
        <meta content="/meta-bg.png" property="og:image" />
        <meta content="website" property="og:type" />
        <meta content="MinSwap" property="og:site_name" />
        {/* Open Graph Data End*/}
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MinswapInterfaceApp;
