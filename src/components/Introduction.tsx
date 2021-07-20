import * as React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import introductionImage from 'src/assets/introduction-bg.png';

import { Button } from './Button';
import { ArrowRightIcon } from './icons';
import classes from './Introduction.module.scss';

export function Introduction() {
  return (
    <div className={classNames('relative flex flex-col items-center pt-20 w-full', classes['introduction'])}>
      <h1 className="font-bold text-8xl">
        Dive into <span className="text-primaryMain">liquidity</span>
      </h1>

      <div className="h-7"></div>

      <p className="text-center text-gray-500 break-words whitespace-pre-line">
        {`Minswap is a Multi-pool decentralized exchange on Cardano.\nSwap tokens with minimal cost, minimal time and maximal convenience.`}
      </p>

      <div className="h-5"></div>

      <div className="flex gap-x-4">
        <Button size="lg">Read Whitepaper</Button>
        <Button color="primary" size="lg">
          View the app <ArrowRightIcon />
        </Button>
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
  );
}
