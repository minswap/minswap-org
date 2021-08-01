import * as React from 'react';
import Image from 'next/image';

import introductionImage from 'src/assets/introduction-bg.png';

import { Button } from './Button';
import { ArrowRightIcon } from './icons';

export function Introduction() {
  return (
    <>
      <div className="relative flex flex-col items-center w-full px-2 pt-20 pb-10 lg:pb-0 introduction lg:px-0">
        <h1 className="text-6xl font-bold text-center lg:text-8xl">
          Dive into <span className="text-primaryMain">liquidity</span>
        </h1>

        <div className="h-7"></div>

        <p className="text-sm text-center text-gray-500 break-words lg:whitespace-pre-line lg:text-base">
          {`Minswap is a multi-pool decentralized exchange on Cardano.\nSwap tokens with minimal cost, minimal time and maximal convenience.`}
        </p>

        <div className="h-5"></div>

        <div className="flex gap-x-4">
          <a href="https://docs.minswap.org/whitepaper" rel="noreferrer" target="_blank">
            <Button className="h-full" size="lg">
              Read Whitepaper
            </Button>
          </a>
          <a href="https://app.minswap.org" rel="noreferrer" target="_blank">
            <Button className="h-full" color="primary" size="lg">
              View the app <ArrowRightIcon />
            </Button>
          </a>
        </div>

        <div className="absolute inset-0 -z-1">
          <Image
            alt="Background"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            quality="100"
            src={introductionImage}
            priority
          />
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .introduction {
            height: calc(100vh - 100px);
          }
        }
      `}</style>
    </>
  );
}
