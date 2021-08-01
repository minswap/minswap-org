import * as React from 'react';
import Image from 'next/image';

import aFamiliarExperienceImage from 'src/assets/a-familiar-experience.png';

import { SectionTitle } from './SectionTitle';

export function AFamiliarExperience() {
  return (
    <div className="flex flex-col items-center lg:pt-20 pt-14 bg-trueGray-50">
      <SectionTitle>A familiar experience</SectionTitle>

      <div className="h-5"></div>

      <div className="w-full">
        <Image
          alt="A familiar experience"
          layout="responsive"
          objectFit="cover"
          placeholder="blur"
          quality="100"
          src={aFamiliarExperienceImage}
        />
      </div>
    </div>
  );
}
