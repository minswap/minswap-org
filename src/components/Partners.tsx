import * as React from 'react';
import Image from 'next/image';

import AdaHandlePartner from '../assets/partners/Ada-handle.png';
import AnetaPartner from '../assets/partners/Aneta.png';
import StricaPartner from '../assets/partners/Strica.png';
import VyFiPartner from '../assets/partners/VyFi.png';
import { SectionTitle } from './SectionTitle';

type Props = {
  id: string;
};

export function Partners({ id }: Props) {
  return (
    <div className="flex flex-col items-center pt-14 lg:pt-20" id={id}>
      <SectionTitle>Our Partners</SectionTitle>

      <div className="h-10" />

      <div className="flex gap-x-20 items-center flex-wrap justify-center gap-y-14">
        <a className="w-[80px] h-[80px]" href="https://www.vyfi.io/" rel="noreferrer" target="_blank" title="VyFi">
          <Image alt="VyFi" src={VyFiPartner} />
        </a>

        <a className="w-[220px]" href="https://strica.io/" rel="noreferrer" target="_blank" title="Strica">
          <Image alt="Strica" src={StricaPartner} />
        </a>

        <a className="w-[260px]" href="https://www.anetabtc.io/" rel="noreferrer" target="_blank" title="Aneta">
          <Image alt="Aneta" src={AnetaPartner} />
        </a>

        <a className="w-[260px]" href="https://adahandle.com/" rel="noreferrer" target="_blank" title="AdaHandle">
          <Image alt="AdaHandle" src={AdaHandlePartner} />
        </a>
      </div>
    </div>
  );
}
