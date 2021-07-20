import * as React from 'react';
import Image from 'next/image';

import tokenDistributionBg from 'src/assets/token-distribution-bg.png';
import tokenDistributionLogo from 'src/assets/token-distribution-logo.png';

import { SectionTitle } from './SectionTitle';
import { SeparatorLine } from './SeparatorLine';

const items = [
  'MIN token can be used to stake to earn profits from trading fees (kinda like dividends)',
  'Burning (deflationary) mechanism in the future by IFO, lottery,... to increase token price',
  'Huge APY on mainnet launch',
  "We're fair launch project with no presale, no VC, and 90% allocated to the community",
];

export function TokenDistribution() {
  return (
    <div className="flex flex-col items-center pt-24">
      <SectionTitle>Token Distribution</SectionTitle>

      <div className="h-48"></div>

      <SeparatorLine />

      <div className="flex flex-col items-center justify-center w-full pt-20 bg-trueGray-50">
        <div className="flex items-center justify-center rounded-full w-60 h-60 bg-primaryMain">
          <div className="relative flex items-center justify-center w-32 h-32 rounded-full bg-primaryMain">
            <Image alt="Logo" src={tokenDistributionLogo} />

            <div className="absolute"></div>
          </div>
        </div>

        <div className="relative pr-24 bg-white shadow-2xl p-14 rounded-3xl">
          <div className="flex justify-center w-full font-medium uppercase gap-x-5 text-trueGray-500">
            <div>
              <span className="text-trueGray-700">90%</span> community
            </div>

            <div>
              <span className="text-trueGray-700">10%</span> developer fund
            </div>
          </div>

          <div className="h-12"></div>

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
        {index}
      </div>
      <div className="text-trueGray-500 w-96">{children}</div>
    </div>
  );
}
