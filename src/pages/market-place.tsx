import * as React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { Marketplace } from '../components';

export default function MarketPalcePage() {
  return (
    <GoogleReCaptchaProvider
      language="en"
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
      scriptProps={{
        async: true,
        appendTo: 'body',
      }}
    >
      <Marketplace />
    </GoogleReCaptchaProvider>
  );
}
