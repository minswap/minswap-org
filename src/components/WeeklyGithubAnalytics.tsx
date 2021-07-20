import * as React from 'react';

import { Button } from './Button';
import { GithubIcon } from './icons';
import { SectionTitle } from './SectionTitle';

export function WeeklyGithubAnalytics() {
  return (
    <div className="flex flex-col items-center">
      <SectionTitle subTitle="Some Facts">Weekly Github Analytics</SectionTitle>

      <div className="h-14"></div>

      <div className="grid grid-cols-4 grid-rows-2 px-10 py-12 border rounded-lg bg-trueGray-50 border-trueGray-200 gap-x-5 gap-y-12">
        <Item label="Total Commits" staticNumber="35" />
        <Item label="Merged Pull Requests" staticNumber="35" />
        <Item label="Code Additions" staticNumber="35" />
        <Item label="Code Detections" staticNumber="35" />

        <div className="col-start-1 row-span-1 row-start-2 col-span-full">
          <Button className="text-white bg-black gap-x-5" size="lg">
            <GithubIcon />
            View project on Github
          </Button>
        </div>
      </div>
    </div>
  );
}

type ItemProps = {
  staticNumber: string;
  label: string;
};

function Item({ staticNumber, label }: ItemProps) {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="text-6xl font-bold">{staticNumber}</div>
      <div className="text-2xl text-trueGray-500">{label}</div>
    </div>
  );
}
