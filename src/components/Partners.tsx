import * as React from 'react';
import Image from 'next/image';

import StricaPartner from '../assets/partners/Strica.png';
import VyFiPartner from '../assets/partners/VyFi.png';
import { SectionTitle } from './SectionTitle';

export function Partners() {
  return (
    <div className="flex flex-col items-center pt-14 lg:pt-20" id="partners">
      <SectionTitle>Our Partners</SectionTitle>

      <div className="h-10" />

      <div className="flex gap-x-20 items-center flex-wrap justify-center gap-y-14">
        <a className="w-[80px] h-[80px]" href="https://www.vyfi.io/" rel="noreferrer" target="_blank" title="VyFi">
          <Image alt="VyFi" src={VyFiPartner} />
        </a>

        <a className="w-[220px]" href="https://strica.io/" rel="noreferrer" target="_blank" title="Strica">
          <Image alt="Strica" src={StricaPartner} />
        </a>
      </div>
    </div>
  );
}
