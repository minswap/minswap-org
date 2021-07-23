import * as React from 'react';
import { GetStaticPropsResult } from 'next';

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
import { MinArt } from 'src/components/MinArt';

type Props = React.ComponentPropsWithoutRef<typeof MonthlyGithubAnalytics>;

export default function HomePage(props: Props): React.ReactElement {
  return (
    <>
      <Announcement href="https://twitter.com/MinswapDEX/status/1418221475681558529">
        Vote for Minswap on Catalyst Fund 5
      </Announcement>

      <Header />

      <main>
        <Introduction />

        <div className="h-20"></div>

        <RoadMap />

        <div className="h-20"></div>

        <DeepDive />

        <div className="h-20"></div>

        <MonthlyGithubAnalytics {...props} />

        <div className="h-20"></div>

        <TokenDistribution />

        <AFamiliarExperience />

        <SeparatorLine />

        <div className="h-20"></div>

        <MinArt />

        <div className="h-20"></div>

        <JoinTheCommunity />
      </main>

      <SeparatorLine />

      <Footer />
    </>
  );
}

async function fetchRepoStats({ owner, repo, from, to }: { owner: string; repo: string; from: string; to: string }) {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
        query {
          repository(owner: "${owner}", name: "${repo}") {
            object(expression: "main") {
              ... on Commit {
                history(since: "${new Date(from).toISOString()}") {
                  totalCount
                  nodes {
                    deletions
                    additions
                  }
                }
              }
            }
          }
          
          search(first: 100, query: "is:pr is:merged repo:${owner}/${repo} created:${from}..${to}", type: ISSUE) {
            issueCount
          }
        }
      `,
    }),
  });

  const json = await response.json();
  const totalCommits = json.data.repository.object.history.totalCount;
  const totalCodeAddition = json.data.repository.object.history.nodes.reduce(
    (acc: any, node: any) => acc + node.additions,
    0,
  );
  const totalCodeDeletion = json.data.repository.object.history.nodes.reduce(
    (acc: any, node: any) => acc + node.deletions,
    0,
  );
  const totalMergedPRs = json.data.search.issueCount;

  return { totalCommits, totalCodeDeletion, totalCodeAddition, totalMergedPRs };
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const { DateTime } = await import('luxon');
  const now = DateTime.now();
  const lastMonth = now.minus({ month: 1 });
  const firstDayLastMonth = lastMonth.startOf('month').toFormat('yyyy-MM-dd');
  const lastDayLastMonth = lastMonth.endOf('month').toFormat('yyyy-MM-dd');

  const allRes = await Promise.all([
    fetchRepoStats({ owner: 'longngn', repo: 'minswap-core', from: firstDayLastMonth, to: lastDayLastMonth }),
    fetchRepoStats({ owner: 'minswap', repo: 'minswap-interface', from: firstDayLastMonth, to: lastDayLastMonth }),
    fetchRepoStats({ owner: 'minswap', repo: 'minswap-org', from: firstDayLastMonth, to: lastDayLastMonth }),
  ]);

  const result = allRes.reduce<Props>(
    (obj, res: Props) => {
      for (const [key, value] of Object.entries(res)) {
        obj[key as keyof Props] += value;
      }

      return obj;
    },
    { totalMergedPRs: 0, totalCommits: 0, totalCodeDeletion: 0, totalCodeAddition: 0 },
  );

  return {
    props: result,
    revalidate: 3600 * 24, // Cache for 1 day
  };
}
