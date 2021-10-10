import * as React from 'react';
import Image from 'next/image';

import minIcon from 'src/assets/icons/minswap.png';

export function Soldout() {
  return (
    <div className="flex flex-col w-full md:px-6 px-4 py-12 bg-white shadow-xl md:max-w-[500px] rounded-[30px]">
      <div className="flex items-center pb-6 border-b-2 gap-x-4">
        <Image alt="MIN icon" height={60} src={minIcon} width={60} />
        <h1 className="md:text-4xl text-3xl font-bold text-primaryMain">Sold out 🎉</h1>
      </div>

      <div className="h-6"></div>

      <div className="opacity-60 text-sm md:text-base">
        <p>Hi everyone 🖖</p>
        <br />
        <p>
          The Minswap public sale has finalized, raising <strong>$1.4M</strong>. This successful result was possible
          because of the enormous support of the Minswap community.
        </p>
        <br />
        <p>The Minswap team has shared an exciting highlight:</p>
        <br />
        <p>
          <strong>25M MIN</strong> (<strong>0.5%</strong> of the initial supply) allocated to the community.
        </p>
      </div>
    </div>
  );
}
