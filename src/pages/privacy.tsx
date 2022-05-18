import * as React from 'react';

import { MainLayout } from 'src/layouts';

export default function PrivacyPolicy() {
  return (
    <MainLayout hideCommunity>
      <div className="md:mx-auto md:max-w-xl p-7">
        <h2 className="text-center text-[30px] font-medium">MINSWAP PRIVACY POLICY</h2>
        <div className="space-y-4 mt-5 text-justify">
          <p>
            Welcome to app.minswap.org, a website-hosted user interface (the &quot;Interface&quot; or &quot;App&quot;)
            provided by Minswap Labs (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). The Interface provides access
            to a decentralized protocol on the Cardano blockchain that allows users to trade tokens (&quot;the Minswap
            protocol&quot; or the &quot;Protocol&quot;). The Interface is one, but not the exclusive, means of accessing
            the Protocol.
          </p>
          <p>
            When you use the Interface, the only information we collect from you is your blockchain wallet address,
            completed transaction hashes, and the token names, symbols, or other blockchain identifiers of the tokens
            that you swap. We do not collect any personal information from you (e.g., your name or other identifiers
            that can be linked to you). We do, however, use third-party service providers, like Cloudflare, and Google
            Analytics, which may receive or independently obtain your personal information from publicly-available
            sources. We do not control how these third parties handle your data and you should review their privacy
            policies to understand how they collect, use, and share your personal information. In particular, please
            visit&nbsp;
            <a
              className="break-all text-blue-500 hover:underline"
              href="https://policies.google.com/technologies/partner-sites"
              rel="noreferrer noopener"
              target="_blank"
            >
              https://policies.google.com/technologies/partner-sites
            </a>{' '}
            to learn more about how Google uses data. By accessing and using the Interface, you understand and consent
            to our data practices and our service providers&apos; treatment of your information.
          </p>
          <p>
            We use the information we collect to detect, prevent, and mitigate harmful activities on the Interface. For
            these purposes, we may share the information we collect with blockchain analytics providers. We share
            information with these service providers only so that they can help us promote the safety, security, and
            integrity of the Interface. We do not retain the information we collect any longer than necessary for these
            purposes.
          </p>
          <p>
            Please note that when you use the Interface, you are interacting with the Cardano blockchain, which provides
            transparency into your transactions. Minswap does not control and is not responsible for any information you
            make public on the Cardano blockchain by taking actions through the Interface.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
