import * as React from 'react';

import {
  AFamiliarExperience,
  DeepDive,
  Introduction,
  MonthlyGithubAnalytics,
  RoadMap,
  SeparatorLine,
  TokenDistribution,
} from 'src/components';
import { MinArt } from 'src/components/MinArt';
import { MainLayout } from 'src/layouts';

export default function HomePage(): React.ReactElement {
  return (
    <MainLayout >
      <Introduction />

      <RoadMap id="roadmap" />

      <DeepDive id="features" />

      <MonthlyGithubAnalytics />

      <TokenDistribution id="tokenomics" />

      <AFamiliarExperience />

      <SeparatorLine />

      <MinArt />
    </MainLayout>
  );
}
