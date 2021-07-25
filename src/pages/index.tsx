import * as React from 'react';
import { GetStaticPropsResult } from 'next';

import { DiscordUser, getTopDiscordUsers } from 'src/api/discord-users';
import { getGithubStats, GithubStats } from 'src/api/github-stats';
import {
  AFamiliarExperience,
  Announcement,
  DeepDive,
  Footer,
  Header,
  Introduction,
  JoinTheCommunity,
  MonthlyGithubAnalytics,
  RoadMap,
  SeparatorLine,
  TokenDistribution,
} from 'src/components';
import { DiscordCommunity } from 'src/components/DiscordCommunity';
import { MinArt } from 'src/components/MinArt';

type Props = {
  githubStats: GithubStats;
  discordUsers: DiscordUser[];
};

export default function HomePage(props: Props): React.ReactElement {
  return (
    <>
      <Announcement href="https://twitter.com/MinswapDEX/status/1418221475681558529">
        Vote for Minswap on Catalyst Fund 5
      </Announcement>

      <Header />

      <main>
        <Introduction />

        <div className="h-20" />

        <RoadMap id="roadmap" />

        <div className="h-20" />

        <DeepDive id="features" />

        <div className="h-20" />

        <MonthlyGithubAnalytics {...props.githubStats} />

        <div className="h-20" />

        <TokenDistribution id="tokenomics" />

        <AFamiliarExperience />

        <SeparatorLine />

        <div className="h-20" />

        <MinArt />

        <div className="h-20" />

        <JoinTheCommunity />

        <DiscordCommunity users={props.discordUsers} />

        <div className="h-20" />
      </main>

      <SeparatorLine />

      <Footer />
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const [githubStats, discordUsers] = await Promise.all([getGithubStats(), getTopDiscordUsers()]);

  return {
    props: { githubStats, discordUsers },
    revalidate: 3600 * 24, // Cache for 1 day
  };
}
