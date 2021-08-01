import * as React from 'react';
import Image from 'next/image';

import tokenDistributionBg from 'src/assets/token-distribution-bg.png';
import tokenDistributionLogo from 'src/assets/token-distribution-logo.svg';

import { SectionTitle } from './SectionTitle';
import { SeparatorLine } from './SeparatorLine';

const items = [
  'MIN tokens can be staked to earn profit-sharing from trading fees.',
  'Burning and deflationary mechanism by economic activities such as IFO, lottery.',
  'Huge APY on mainnet launch to reward early community and adopters (with lock-up period).',
  'Fair launch token with no pre-mine, no private sale, no VC.',
];

type Props = {
  id: string;
};

export function TokenDistribution({ id }: Props) {
  return (
    <div className="flex flex-col items-center" id={id}>
      <SectionTitle subTitle="Our data">Token Distribution</SectionTitle>

      <div className="h-48"></div>

      <SeparatorLine />

      <div className="relative flex flex-col items-center justify-center w-full pt-20 bg-trueGray-50">
        <div className="absolute top-0 z-10 flex items-center justify-center transform -translate-y-1/2 rounded-full shadow-2xl w-60 h-60 bg-primaryMain">
          <div className="w-44 h-44">
            <svg className="w-full h-full">
              <circle
                className="w-full h-full"
                cx="80"
                cy="80"
                fill="none"
                r="80"
                stroke="#1B2771"
                strokeLinecap="round"
                strokeWidth="15"
                style={{ transform: 'translate(8px, 8px)' }}
              ></circle>
              <circle
                cx="80"
                cy="80"
                fill="none"
                r="80"
                stroke="#fff"
                strokeDasharray="500"
                strokeDashoffset="50"
                strokeLinecap="round"
                strokeWidth="16"
                style={{ transform: 'translate(8px, 8px)' }}
              ></circle>
            </svg>
          </div>

          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <Image alt="Logo" src={tokenDistributionLogo} width="80%" />
          </div>
        </div>

        <div className="relative pr-24 bg-white shadow-2xl p-14 rounded-3xl">
          <div className="grid grid-cols-2 gap-y-7 gap-x-7">
            {items.map((item, index) => (
              <Item index={index} key={item}>
                {item}
              </Item>
            ))}
          </div>

          <div className="absolute top-0 bottom-0 right-0 pointer-events-none select-none w-96">
            <Image
              alt="Background"
              layout="fill"
              objectFit="cover"
              placeholder="empty"
              quality="100"
              src={tokenDistributionBg}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

type ItemProps = {
  index: number;
  children: React.ReactNode;
};

function Item({ children, index }: ItemProps) {
  return (
    <div className="flex items-center gap-x-5">
      <div className="flex items-center justify-center w-12 h-12 text-2xl font-bold leading-none text-white rounded-full select-none bg-primaryMain">
        {index + 1}
      </div>
      <div className="text-trueGray-500 w-96">{children}</div>
    </div>
  );
}
