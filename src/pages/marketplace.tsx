import * as React from 'react';
import Image from 'next/image';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import backgroundImage from 'src/assets/marketplace/background@2x.png';

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
      <div className="fixed inset-0 -z-1">
        <Image alt="Background" layout="fill" objectFit="cover" quality={80} src={backgroundImage} priority />
      </div>
      <Marketplace />
    </GoogleReCaptchaProvider>
  );
}
