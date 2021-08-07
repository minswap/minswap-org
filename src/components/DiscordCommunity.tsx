import * as React from 'react';
import Image from 'next/image';
import { chunk } from 'lodash';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AutoplayOptions } from 'swiper/types/components/autoplay';

import { DiscordUser } from 'src/api/discord-users';

import { SectionTitle } from './SectionTitle';

type Props = {
  users: DiscordUser[];
};

export function DiscordCommunity({ users }: Props) {
  SwiperCore.use([Autoplay]);

  const autoplay: AutoplayOptions = {
    delay: 2500,
    disableOnInteraction: false,
  };

  return (
    <div className="py-14 lg:py-20">
      <SectionTitle>
        Our <span className="text-blueBerry">Discord</span> community member
      </SectionTitle>

      <div className="h-5 lg:h-12" />

      {/* Mobile */}
      <Swiper
        autoplay={autoplay}
        centeredSlides={true}
        className="lg:hidden"
        direction={'horizontal'}
        effect={'fade'}
        loop={true}
        mousewheel={true}
        slidesPerView={3}
      >
        {chunk(users, 3).map((data, index) => (
          <SwiperSlide className="relative grid grid-flow-col grid-rows-3" key={index}>
            <div className="flex justify-center">
              <Image alt={data[0].id} className="rounded-full" height={48} src={data[0].avatarUrl} width={48} />
            </div>

            <div className="absolute flex justify-center -left-6 inset-y-12">
              <Image alt={data[1].id} className="rounded-full" height={48} src={data[1].avatarUrl} width={48} />
            </div>

            <div className="flex" />

            <div className="flex justify-center">
              <Image alt={data[2].id} className="rounded-full" height={48} src={data[2].avatarUrl} width={48} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Desktop */}
      <Swiper
        autoplay={autoplay}
        centeredSlides={true}
        className="hidden lg:block"
        direction={'horizontal'}
        effect={'fade'}
        loop={true}
        mousewheel={true}
        slidesPerView={6}
      >
        {chunk(users, 3).map((data, index) => (
          <SwiperSlide className="relative grid grid-flow-col grid-rows-3" key={index}>
            <div className="flex justify-center">
              <Image alt={data[0].id} className="rounded-full" height={80} src={data[0].avatarUrl} width={80} />
            </div>

            <div className="absolute flex justify-center -left-10 inset-y-20">
              <Image alt={data[1].id} className="rounded-full" height={80} src={data[1].avatarUrl} width={80} />
            </div>

            <div className="flex" />

            <div className="flex justify-center">
              <Image alt={data[2].id} className="rounded-full" height={80} src={data[2].avatarUrl} width={80} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
