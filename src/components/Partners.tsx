import * as React from 'react';
import Image from 'next/image';

import VyFiPartner from '../assets/partners/VyFi.png';
import { SectionTitle } from './SectionTitle';

export function Partners() {
  return (
    <div className="flex flex-col items-center pt-14 lg:pt-20" id="partners">
      <SectionTitle>Our Partners</SectionTitle>

      <div className="h-10" />

      <div className="flex gap-x-20 items-center flex-wrap justify-center gap-y-14">
        <div className="w-[80px] h-[80px]">
          <Image alt="Meld" src={VyFiPartner} />
        </div>
      </div>
    </div>
  );
}
