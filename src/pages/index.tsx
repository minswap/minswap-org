import * as React from 'react';
import { GetStaticPropsResult } from 'next';

import { DiscordUser, getTopDiscordUsers } from 'src/api/discord-users';
import { getGithubStats, GithubStats } from 'src/api/github-stats';
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

type Props = {
  discordUsers: DiscordUser[];
};

export default function HomePage(props: Props): React.ReactElement {
  return (
    <MainLayout discordUsers={props.discordUsers}>
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

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  let discordUsers: DiscordUser[] = await getTopDiscordUsers();

  return {
    props: { discordUsers },
    revalidate: 3600 * 24, // Cache for 1 day
  };
}
