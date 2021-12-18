import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';

import 'tailwindcss/tailwind.css';
import 'swiper/swiper.scss';
import 'tippy.js/dist/tippy.css';

function MinswapInterfaceApp({ Component, pageProps }: AppProps): React.ReactElement<AppProps> {
  const router = useRouter();
  const queryClientRef = React.useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <>
      <Head>
        <title>Minswap | Multi-pool decentralized exchange on the Cardano blockchain</title>
        <meta charSet="UTF-8" />
        <meta content="Multi-pool decentralized exchange on Cardano" name="description" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <link href={`${process.env['NEXT_PUBLIC_URL']}${router.pathname}`} rel="cannonical" />
        <meta content="width=device-width, initial-scale=1, viewport-fit=cover" name="viewport" />

        {/* Twitter Card Data Start */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@minswapdex" name="twitter:site" />
        <meta content="MinSwap | Multi-pool DEX on the Cardano Blockchain" name="twitter:title" />
        <meta
          content="MinSwap is a Multi-pool decentralized exchange (DEX) that runs on the Cardano (ADA) Blockchain. Swap tokens with minimal cost, minimal time and maximal convenience."
          name="twitter:description"
        />
        <meta content="https://minswap.org/meta-bg.png" name="twitter:image" />
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

      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default MinswapInterfaceApp;
