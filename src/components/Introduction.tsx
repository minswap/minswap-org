import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import introductionImage from 'src/assets/introduction-bg.png';

import { Button } from './Button';
import { ArrowRightIcon } from './icons';

export function Introduction() {
  return (
    <>
      <div className="flex flex-col items-center w-full pt-8 pb-0 lg:relative lg:pt-20 lg:pb-0 introduction">
        <h1 className="text-4xl font-bold text-center md:text-6xl lg:text-8xl">
          Dive into <span className="text-primaryMain">liquidity</span>
        </h1>

        <div className="h-5 lg:h-7"></div>

        <p className="px-5 text-sm text-center text-gray-500 break-words lg:whitespace-pre-line lg:text-base">
          {`Minswap is a multi-pool decentralized exchange on Cardano.\nSwap tokens with minimal cost, minimal time and maximal convenience.`}
        </p>

        <div className="m-3 md:h-5"></div>

        <div className="flex gap-x-4 lg:hidden">
          <Link href="https://fiso.minswap.org/">
            <a>
              <Button className="h-full" size="md">
                FISO Stake Pools
              </Button>
            </a>
          </Link>
          <a href="https://app.minswap.org" rel="noreferrer" target="_blank">
            <Button className="h-full" color="primary" size="md">
              View the app <ArrowRightIcon />
            </Button>
          </a>
        </div>

        <div className="hidden lg:flex gap-x-4">
          <Link href="https://fiso.minswap.org/">
            <a>
              <Button className="h-full" size="lg">
                FISO Stake Pools
              </Button>
            </a>
          </Link>
          <a href="https://app.minswap.org" rel="noreferrer" target="_blank">
            <Button className="h-full" color="primary" size="lg">
              View the app <ArrowRightIcon />
            </Button>
          </a>
        </div>

        {/* Mobile */}
        <div className="transform -translate-y-10 lg:hidden -z-1">
          <Image alt="Background" placeholder="blur" quality="100" src={introductionImage} priority />
        </div>

        {/* Desktop */}
        <div className="absolute inset-0 hidden -z-1 lg:block overflow-hidden">
          <video className="min-w-full min-h-full" autoPlay loop muted playsInline>
            <source src="/min_vid.webm" type="video/webm" />
          </video>
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
