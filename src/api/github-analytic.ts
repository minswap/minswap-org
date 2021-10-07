export type GithubAnalytic = {
  totalCommit: number;
  totalCodeAddition: number;
  totalCodeDeletion: number;
  totalMergedPullRequest: number;
};

export async function getGithubAnalytics(): Promise<GithubAnalytic> {
  const response = await fetch('https://api-mainnet.minswap.org/min-org/github-analytic');
  const body: GithubAnalytic = await response.json();
  return body;
}
