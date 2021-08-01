import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logoSmall from 'src/assets/logo-small.svg';

export function Logo() {
  return (
    <Link href="/">
      <a className="flex items-center text-lg font-bold gap-x-2">
        <div className="w-6 h-6">
          <Image alt="logo" src={logoSmall} priority />
        </div>
        Minswap
      </a>
    </Link>
  );
}
