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
    <div className="flex flex-col items-center pt-14 lg:pt-20">
      <SectionTitle>Join the community</SectionTitle>

      <div className="h-5 lg:h-6" />

      {/* Mobile */}
      <p className="px-5 text-base break-words whitespace-pre-line lg:hidden text-trueGray-500">
        {`Learn more about Minswap, chat with the team and the community, have your say in shaping the future of decentralized finance.`}
      </p>

      {/* Desktop */}
      <p className="hidden text-xl text-center break-words whitespace-pre-line lg:block text-trueGray-500">
        {`Learn more about Minswap, chat with the team and the community,\n have your say in shaping the future of decentralized finance.`}
      </p>

      <div className="h-10 lg:h-16" />

      <div className="flex gap-x-4 lg:gap-x-16">
        {/* Twitter */}
        <a
          className="flex flex-col items-center gap-y-2 lg:hidden"
          href="https://twitter.com/minswapdex"
          rel="noreferrer"
          target="_blank"
        >
          <Image alt="Twitter" height="48" src={twitterImage} width="48" />
          <span className="text-base font-bold">Twitter</span>
        </a>

        <a
          className="flex-col items-center hidden lg:flex gap-y-4"
          href="https://twitter.com/minswapdex"
          rel="noreferrer"
          target="_blank"
        >
          <Image alt="Twitter" src={twitterImage} />
          <span className="text-xl font-bold">Twitter</span>
        </a>

        {/* Reddit */}
        <a
          className="flex flex-col items-center gap-y-2 lg:hidden"
          href="https://www.reddit.com/r/MinSwap/"
          rel="noreferrer"
          target="_blank"
        >
          <Image alt="Reddit" height="48" src={redditImage} width="48" />
          <span className="text-base font-bold lg:text-xl">Reddit</span>
        </a>

        <a
          className="flex-col items-center hidden lg:flex gap-y-4"
          href="https://www.reddit.com/r/MinSwap/"
          rel="noreferrer"
          target="_blank"
        >
          <Image alt="Reddit" src={redditImage} />
          <span className="text-xl font-bold">Reddit</span>
        </a>

        {/* Github */}
        <a
          className="flex flex-col items-center gap-y-2 lg:hidden"
          href="https://github.com/minswap"
          rel="noreferrer"
          target="_blank"
        >
          <Image alt="Github" height="48" src={githubImage} width="48" />
          <span className="text-base font-bold">GitHub</span>
        </a>

        <a
          className="flex-col items-center hidden lg:flex gap-y-4"
          href="https://github.com/minswap"
          rel="noreferrer"
          target="_blank"
        >
          <Image alt="Github" src={githubImage} />
          <span className="text-xl font-bold">GitHub</span>
        </a>

        {/* Discord  */}
        <a
          className="flex flex-col items-center gap-y-2 lg:hidden"
          href="https://discord.gg/ZjB8ZBhkbm"
          rel="noreferrer"
          target="_blank"
        >
          <Image alt="Discord" height="48" src={discordImage} width="48" />
          <span className="text-base font-bold">Discord</span>
        </a>

        <a
          className="flex-col items-center hidden lg:flex gap-y-4"
          href="https://discord.gg/ZjB8ZBhkbm"
          rel="noreferrer"
          target="_blank"
        >
          <Image alt="Discord" src={discordImage} />
          <span className="text-xl font-bold">Discord</span>
        </a>

        {/* Medium */}
        <a
          className="flex flex-col items-center gap-y-2 lg:hidden"
          href="https://medium.com/minswap"
          rel="noreferrer"
          target="_blank"
        >
          <Image alt="Medium" height="48" src={mediumImage} width="48" />
          <span className="text-base font-bold">Medium</span>
        </a>

        <a
          className="flex-col items-center hidden lg:flex gap-y-4"
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
