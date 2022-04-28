import * as React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import cardwalletPartner from 'src/assets/partners/cardwallet.png';
import handlePartner from 'src/assets/partners/handle.png';
import indigoPartner from 'src/assets/partners/indigo.png';
import liqwidPartner from 'src/assets/partners/liqwid.png';
import meldPartner from 'src/assets/partners/meld.png';
import {
  AFamiliarExperience,
  DeepDive,
  Introduction,
  MonthlyGithubAnalytics,
  Partners,
  RoadMap,
  SectionTitle,
  SeparatorLine,
  TokenDistribution,
} from 'src/components';
import { MinArt } from 'src/components/MinArt';
import { MainLayout } from 'src/layouts';

export default function HomePage(): React.ReactElement {
  return (
    <MainLayout>
      <Introduction />

      <RoadMap id="roadmap" />

      <DeepDive id="features" />

      <TokenDistribution id="tokenomics" />

      <AFamiliarExperience />

      <SeparatorLine />

      <MinArt />

      <Partners id="partners" />
    </MainLayout>
  );
}
