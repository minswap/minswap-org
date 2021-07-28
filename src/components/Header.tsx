import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logoSmall from 'src/assets/logo-small.svg';

import { Button } from './Button';

export function Header() {
  return (
    <>
      <header className="grid justify-around py-4 header">
        <Link href="/">
          <a className="flex items-center text-lg font-bold gap-x-2">
            <div className="w-6 h-6">
              <Image alt="logo" src={logoSmall} priority />
            </div>
            Minswap
          </a>
        </Link>

        <div className="flex items-center text-sm text-gray-500 gap-x-5">
          <Link href="/#roadmap">
            <a className="hover:text-black">Roadmap</a>
          </Link>

          <Link href="/#features">
            <a className="hover:text-black">Features</a>
          </Link>

          <Link href="/#tokenomics">
            <a className="hover:text-black">Tokenomics</a>
          </Link>

          <Link href="/team">
            <a className="hover:text-black">Team</a>
          </Link>

          <Link href="https://docs.minswap.org/faq">
            <a className="hover:text-black">FAQ</a>
          </Link>
        </div>

        <div className="flex gap-x-2">
          <a href="https://docs.minswap.org/" rel="noreferrer" target="_blank">
            <Button className="h-full">Documentation</Button>
          </a>
          <a href="https://app.minswap.org/" rel="noreferrer" target="_blank">
            <Button className="h-full" color="primary">
              App
            </Button>
          </a>
        </div>
      </header>
      <style jsx>{`
        .header {
          grid-template-columns: 250px max-content 250px;
        }
      `}</style>
    </>
  );
}
