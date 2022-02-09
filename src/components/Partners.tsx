import * as React from 'react';
import Image from 'next/image';

import AdaHandlePartner from '../assets/partners/Ada-handle.png';
import AnetaPartner from '../assets/partners/Aneta.png';
import GeniusYieldPartner from '../assets/partners/Genius-Yield.png';
import GeroWalletPartner from '../assets/partners/GeroWallet.svg';
import IndigoPartner from '../assets/partners/Indigo.png';
import MlabsPartner from '../assets/partners/Mlabs.png';
import StricaPartner from '../assets/partners/Strica.png';
import TweagPartner from '../assets/partners/Tweag.svg';
import VyFiPartner from '../assets/partners/VyFi.png';
import WellTypedPartner from '../assets/partners/Well-Typed.svg';
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

        <a
          className="w-[340px]"
          href="https://www.geniusyield.co/"
          rel="noreferrer"
          target="_blank"
          title="Genius Yield"
        >
          <Image alt="Genius Yield" src={GeniusYieldPartner} />
        </a>

        <a className="w-[296px]" href="https://gerowallet.io/" rel="noreferrer" target="_blank" title="GeroWallet">
          <Image alt="GeroWallet" src={GeroWalletPartner} />
        </a>

        <a className="w-[180px]" href="https://mlabs.city/" rel="noreferrer" target="_blank" title="Mlabs">
          <Image alt="Mlabs" src={MlabsPartner} />
        </a>

        <a className="w-[200px]" href="https://indigoprotocol.io/" rel="noreferrer" target="_blank" title="Indigo">
          <Image alt="Indigo" src={IndigoPartner} />
        </a>

        <a className="w-[300px]" href="https://www.tweag.io/" rel="noreferrer" target="_blank" title="Tweag">
          <Image alt="Tweag" src={TweagPartner} />
        </a>

        <a className="w-[260px]" href="https://well-typed.com/" rel="noreferrer" target="_blank" title="Well-Typed">
          <Image alt="Well-Typed" src={WellTypedPartner} />
        </a>
      </div>
    </div>
  );
}
