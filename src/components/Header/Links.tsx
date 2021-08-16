import * as React from 'react';
import Link from 'next/link';

type Props = {
  onLinkClick?: () => void;
};

export function Links({ onLinkClick }: Props) {
  return (
    <div className="flex flex-col items-start text-black lg:text-gray-500 lg:text-sm text-md lg:items-center lg:flex-row gap-x-5">
      <a
        className="w-full px-4 py-2 hover:text-black lg:py-0 lg:px-0 lg:w-auto lg:hidden"
        href="https://app.minswap.org/"
        onClick={onLinkClick}
      >
        Launch App
      </a>

      <a
        className="w-full px-4 py-2 hover:text-black lg:py-0 lg:px-0 lg:w-auto lg:hidden"
        href="https://docs.minswap.org/"
        onClick={onLinkClick}
      >
        Documentation
      </a>

      <Link href="/#roadmap">
        <a className="w-full px-4 py-2 hover:text-black lg:py-0 lg:px-0 lg:w-auto" onClick={onLinkClick}>
          Roadmap
        </a>
      </Link>

      <Link href="/#features">
        <a className="w-full px-4 py-2 hover:text-black lg:py-0 lg:px-0 lg:w-auto" onClick={onLinkClick}>
          Features
        </a>
      </Link>

      <Link href="/#tokenomics">
        <a className="w-full px-4 py-2 hover:text-black lg:py-0 lg:px-0 lg:w-auto" onClick={onLinkClick}>
          Tokenomics
        </a>
      </Link>

      <Link href="/team">
        <a className="w-full px-4 py-2 hover:text-black lg:py-0 lg:px-0 lg:w-auto" onClick={onLinkClick}>
          Team
        </a>
      </Link>

      <Link href="https://docs.minswap.org/faq/general">
        <a className="w-full px-4 py-2 hover:text-black lg:py-0 lg:px-0 lg:w-auto" onClick={onLinkClick}>
          FAQ
        </a>
      </Link>

      <Link href="https://fiso.minswap.org/">
        <a className="w-full px-4 py-2 hover:text-black lg:py-0 lg:px-0 lg:w-auto" onClick={onLinkClick}>
          FISO
        </a>
      </Link>

      <Link href="https://minswap.creator-spring.com/">
        <a className="w-full px-4 py-2 hover:text-black lg:py-0 lg:px-0 lg:w-auto" onClick={onLinkClick}>
          Merch
        </a>
      </Link>
    </div>
  );
}
