export type GithubStats = {
  totalCommits: number;
  totalCodeAddition: number;
  totalCodeDeletion: number;
  totalMergedPRs: number;
};

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

export async function getGithubStats(): Promise<GithubStats> {
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

  const result = allRes.reduce<GithubStats>(
    (obj, res: GithubStats) => {
      for (const [key, value] of Object.entries(res)) {
        obj[key as keyof GithubStats] += value;
      }

      return obj;
    },
    { totalMergedPRs: 0, totalCommits: 0, totalCodeDeletion: 0, totalCodeAddition: 0 },
  );

  return result;
}
