import * as React from 'react';

import {
  AFamiliarExperience,
  Announcement,
  Footer,
  Header,
  Introduction,
  JoinTheCommunity,
  SeparatorLine,
  TokenDistribution,
} from 'src/components';

export default function HomePage(): React.ReactElement {
  return (
    <>
      <Announcement href="#" linkText="Go to Ideascale" message="Support Minswap on Catalyst Fund 5" />

      <Header />

      <main>
        <Introduction />

        <TokenDistribution />

        <AFamiliarExperience />

        <SeparatorLine />

        <JoinTheCommunity />
      </main>

      <SeparatorLine />

      <Footer />
    </>
  );
}
