import * as React from 'react';

import {
  AFamiliarExperience,
  Announcement,
  DeepDive,
  Footer,
  Header,
  Introduction,
  JoinTheCommunity,
  RoadMap,
  SeparatorLine,
  TokenDistribution,
  WeeklyGithubAnalytics,
} from 'src/components';

export default function HomePage(): React.ReactElement {
  return (
    <>
      <Announcement href="#" linkText="Go to Ideascale" message="Support Minswap on Catalyst Fund 5" />

      <Header />

      <main>
        <Introduction />

        <div className="h-20"></div>

        <RoadMap />

        <div className="h-20"></div>

        <DeepDive />

        <div className="h-20"></div>

        <WeeklyGithubAnalytics />

        <div className="h-20"></div>

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
