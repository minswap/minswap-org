import * as React from 'react';
import Image from 'next/image';

import discordImage from 'src/assets/discord.svg';
import githubImage from 'src/assets/github.svg';
import mediumImage from 'src/assets/medium.svg';
import redditImage from 'src/assets/reddit.svg';
import twitterImage from 'src/assets/twitter.svg';

import { SectionTitle } from './SectionTitle';

export function JoinTheCommunity() {
  return (
    <div className="flex flex-col items-center pt-16 pb-32">
      <SectionTitle>Join the community</SectionTitle>

      <div className="h-6"></div>

      <p className="text-center break-words whitespace-pre-line text-trueGray-500">
        {`Learn more about Minswap, chat with the team and the community,\n have your say in shaping the future of decentralized finance.`}
      </p>

      <div className="h-16"></div>

      <div className="flex gap-x-16">
        <a
          className="flex flex-col items-center gap-y-4"
          href="https://twitter.com/minswapdex"
          rel="noreferrer"
          target="_blank"
        >
          <Image alt="Twitter" src={twitterImage} />
          <span className="text-xl font-bold">Twitter</span>
        </a>

        <a
          className="flex flex-col items-center gap-y-4"
          href="https://www.reddit.com/r/MinSwap/"
          rel="noreferrer"
          target="_blank"
        >
          <Image alt="Reddit" src={redditImage} />
          <span className="text-xl font-bold">Reddit</span>
        </a>

        <a
          className="flex flex-col items-center gap-y-4"
          href="https://github.com/minswap"
          rel="noreferrer"
          target="_blank"
        >
          <Image alt="Github" src={githubImage} />
          <span className="text-xl font-bold">GitHub</span>
        </a>

        <a
          className="flex flex-col items-center gap-y-4"
          href="https://discord.gg/YugFh5jMjX"
          rel="noreferrer"
          target="_blank"
        >
          <Image alt="Discord" src={discordImage} />
          <span className="text-xl font-bold">Discord</span>
        </a>

        <a
          className="flex flex-col items-center gap-y-4"
          href="https://medium.com/minswap"
          rel="noreferrer"
          target="_blank"
        >
          <Image alt="Medium" src={mediumImage} />
          <span className="text-xl font-bold">Medium</span>
        </a>
      </div>
    </div>
  );
}
