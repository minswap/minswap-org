import * as React from 'react';
import Image from 'next/image';
import { chunk } from 'lodash';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AutoplayOptions } from 'swiper/types/components/autoplay';

import { DiscordUser } from 'src/api/discord-users';

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
    <Swiper
      autoplay={autoplay}
      centeredSlides={true}
      direction={'horizontal'}
      effect={'fade'}
      loop={true}
      mousewheel={true}
      slidesPerView={6}
    >
      {chunk(users, 3).map((data, index) => (
        <SwiperSlide className="grid grid-flow-col grid-rows-3" key={index}>
          <div className="flex justify-center ml-20">
            <Image alt={data[0].id} className="rounded-full" height={80} src={data[0].avatarUrl} width={80} />
          </div>
          <div className="flex">
            <Image alt={data[1].id} className="rounded-full" height={80} src={data[1].avatarUrl} width={80} />
          </div>
          <div className="flex justify-center ml-20">
            <Image alt={data[2].id} className="rounded-full" height={80} src={data[2].avatarUrl} width={80} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
