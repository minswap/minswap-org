import * as React from 'react';
import Image from 'next/image';

import communityFirstImage from 'src/assets/community-first.svg';
import ethereumCompatibleImage from 'src/assets/ethereum-compatible.svg';
import fairLaunchImage from 'src/assets/fair-launch.svg';
import launchpoolImage from 'src/assets/launchpool.svg';
import permissionlessImage from 'src/assets/permissionless.svg';
import stakePoolImage from 'src/assets/stakePool.svg';
import transparentImage from 'src/assets/transparent.svg';
import yieldFarmingImage from 'src/assets/yield-farming.svg';

import { SectionTitle } from './SectionTitle';

export function DeepDive() {
  return (
    <div className="flex flex-col items-center">
      <SectionTitle subTitle="Some Facts">Deep Dive</SectionTitle>

      <div className="h-16"></div>

      <div className="grid grid-cols-2 gap-x-7 gap-y-10">
        <Item
          description="No pre-mine, no pre-sale. MIN tokens are distributed fairly with only 10% allocated to development funds."
          image={fairLaunchImage}
          title="Fair Launch"
        />

        <Item
          description="MIN tokens are rewarded to liquidity providers who stake their liquidity pool tokens."
          image={yieldFarmingImage}
          title="Yield Farming"
        />

        <Item
          description="If it is your key, it is your money. Participating in the market without ever leaving your wallet."
          image={transparentImage}
          title="Transparent"
        />

        <Item
          description="Supporting new projects in Cardano ecosystem with Initial DEX Offering (IDO) and Initial Farm Offering (IFO)."
          image={launchpoolImage}
          title="Launchpool"
        />

        <Item
          description="Anybody can list tokens without permission. Anybody can trade tokens without KYC."
          image={permissionlessImage}
          title="Permissionless"
        />

        <Item
          description="All trading fees go directly to liquidity providers. MIN token holder vote democratically on protocol changes."
          image={communityFirstImage}
          title="Community First"
        />

        <Item
          description="With ERC-20 Converter, users can trade Ethereum tokens at much lower fees."
          image={ethereumCompatibleImage}
          title="Ethereum Compatible"
        />

        <Item
          description="Minswap supports the SPOs by a community-oriented ADA delegation policy and automatic native token fees conversion."
          image={stakePoolImage}
          title="Stake Pool Operators Support"
        />
      </div>
    </div>
  );
}

type ItemProps = {
  image: StaticImageData;
  title: string;
  description: string;
};

function Item({ description, title, image }: ItemProps) {
  return (
    <div className="flex flex-col items-start gap-y-5 w-[500px]">
      <Image alt={title} height="140" src={image} width="140" />
      <div className="text-3xl font-bold">{title}</div>
      <div className="text-xl text-trueGray-500">{description}</div>
    </div>
  );
}
