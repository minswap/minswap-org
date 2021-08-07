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
    <div className="flex flex-col items-center pt-14 lg:pt-20" id={id}>
      <SectionTitle subTitle="Our data">Token Distribution</SectionTitle>

      <div className="h-24 lg:h-48" />

      <SeparatorLine />

      <div className="relative flex flex-col items-center justify-center w-full pt-10 lg:pt-20 bg-trueGray-50">
        <div className="absolute top-0 z-10 flex items-center justify-center w-32 h-32 transform -translate-y-1/2 rounded-full shadow-2xl lg:w-60 lg:h-60 bg-primaryMain">
          <div className="w-24 h-24 lg:w-44 lg:h-44">
            <svg className="w-full h-full">
              {/* Mobile  */}
              <circle
                className="w-full h-full lg:hidden"
                cx="40"
                cy="40"
                fill="none"
                r="40"
                stroke="#1B2771"
                strokeLinecap="round"
                strokeWidth="9"
                style={{ transform: 'translate(8px, 8px)' }}
              />
              <circle
                className="lg:hidden"
                cx="40"
                cy="40"
                fill="none"
                r="40"
                stroke="#fff"
                strokeDasharray="250"
                strokeDashoffset="25"
                strokeLinecap="round"
                strokeWidth="10"
                style={{ transform: 'translate(8px, 8px)' }}
              />

              {/* Desktop */}
              <circle
                className="hidden w-full h-full lg:block"
                cx="80"
                cy="80"
                fill="none"
                r="80"
                stroke="#1B2771"
                strokeLinecap="round"
                strokeWidth="15"
                style={{ transform: 'translate(8px, 8px)' }}
              />
              <circle
                className="hidden lg:block"
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
              />
            </svg>
          </div>

          {/* Mobile */}
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:hidden">
            <Image alt="Logo" src={tokenDistributionLogo} width="40%" />
          </div>

          {/* Desktop */}
          <div className="absolute hidden transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:block">
            <Image alt="Logo" src={tokenDistributionLogo} width="80%" />
          </div>
        </div>

        <div className="relative px-5 mx-5 bg-white shadow-2xl lg:pr-24 lg:p-14 py-7 lg-rounded-3xl rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-7 gap-x-7">
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
    <div className="flex items-center lg:gap-x-5 gap-x-3">
      <div className="flex items-center justify-center flex-none text-base font-bold leading-none text-white rounded-full select-none w-9 h-9 lg:w-12 lg:h-12 lg:text-2xl bg-primaryMain">
        {index + 1}
      </div>
      <div className="text-sm lg:text-base text-trueGray-500 lg:w-96">{children}</div>
    </div>
  );
}
