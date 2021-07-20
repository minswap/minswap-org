import * as React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MinswapInterfaceDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;500&display=swap" rel="stylesheet" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
