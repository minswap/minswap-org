import * as React from 'react';

import { Button } from './Button';
import { GithubIcon } from './icons';
import { SectionTitle } from './SectionTitle';

type Props = {
  totalCommits: number;
  totalCodeAddition: number;
  totalCodeDeletion: number;
  totalMergedPRs: number;
};

export function MonthlyGithubAnalytics({ totalCodeAddition, totalCodeDeletion, totalCommits, totalMergedPRs }: Props) {
  return (
    <div className="flex flex-col items-center">
      <SectionTitle subTitle="Some Facts">Monthly GitHub Analytics</SectionTitle>

      <div className="h-14"></div>

      <div className="grid grid-flow-row grid-cols-4 px-10 py-12 border rounded-lg bg-trueGray-50 border-trueGray-200 gap-x-5 gap-y-12">
        <Item label="Total Commits" staticNumber={totalCommits} />
        <Item label="Merged Pull Requests" staticNumber={totalMergedPRs} />
        <Item label="Code Additions" staticNumber={totalCodeAddition} />
        <Item label="Code Deletions" staticNumber={totalCodeDeletion} />

        <div className="flex col-start-1 row-span-1 row-start-2 col-span-full">
          <Button
            className="text-white bg-black gap-x-5 hover:bg-opacity-80 hover:text-white"
            component="a"
            href="https://github.com/minswap/minswap-org"
            rel="noreferrer noopener"
            size="lg"
            target="_blank"
          >
            <GithubIcon />
            View project on GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}

type ItemProps = {
  staticNumber: number;
  label: string;
};

function Item({ staticNumber, label }: ItemProps) {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="text-6xl font-bold">{staticNumber.toLocaleString('en-US')}</div>
      <div className="text-2xl text-trueGray-500">{label}</div>
    </div>
  );
}
