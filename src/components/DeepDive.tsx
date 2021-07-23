import * as React from 'react';
import Image from 'next/image';

import communityFirstImage from 'src/assets/community-first.svg';
import ethereumCompatibleImage from 'src/assets/ethereum-compatible.svg';
import fairLaunchImage from 'src/assets/fair-launch.svg';
import launchpoolImage from 'src/assets/launchpool.svg';
import permissionlessImage from 'src/assets/permissionless.svg';
import stakePoolImage from 'src/assets/stake-pool.svg';
import transparentImage from 'src/assets/transparent.svg';
import yieldFarmingImage from 'src/assets/yield-farming.svg';

import { SectionTitle } from './SectionTitle';

export function DeepDive() {
  return (
    <div className="flex flex-col items-center">
      <SectionTitle subTitle="Some Facts">Deep Dive</SectionTitle>

      <div className="h-16"></div>

      <div className="grid grid-cols-2 gap-x-7 gap-y-10">
        <Item image={fairLaunchImage} title="Fair Launch">
          No pre-mine, no pre-sale, no VC. The only way to get MIN tokens is by participating in the protocol or
          airdrop.
        </Item>

        <Item image={yieldFarmingImage} title="Yield Farming">
          MIN tokens are rewarded to liquidity providers who stake their liquidity pool tokens.
        </Item>

        <Item image={transparentImage} title="Transparent">
          If it is your key, it is your money. Participating in the market without ever leaving your wallet.
        </Item>

        <Item image={launchpoolImage} title="Launchpool">
          Supporting new projects in Cardano ecosystem with Initial DEX Offering (IDO) and Initial Farm Offering (IFO).
        </Item>

        <Item image={permissionlessImage} title="Permissionless">
          Anybody can list tokens without permission. Anybody can trade tokens without KYC.
        </Item>

        <Item image={communityFirstImage} title="Community First">
          All trading fees go directly to liquidity providers. MIN token holder vote democratically on protocol changes.
        </Item>

        <Item image={ethereumCompatibleImage} title="Ethereum Compatible">
          With ERC-20 Converter, users can trade Ethereum tokens at much lower fees.
        </Item>

        <Item image={stakePoolImage} title="Stake Pool Operators Support">
          Minswap supports the SPOs by a community-oriented ADA delegation policy and{' '}
          <a
            className="text-primaryMain hover:underline"
            href="https://medium.com/minswap/fair-iso-application-for-stake-pool-operators-begins-now-e6d563f85eec"
          >
            Fair Initial Stake Offering
          </a>
          .
        </Item>
      </div>
    </div>
  );
}

type ItemProps = {
  image: StaticImageData;
  title: string;
  children: React.ReactNode;
};

function Item({ children, title, image }: ItemProps) {
  return (
    <div className="flex flex-col items-start gap-y-5 w-[500px]">
      <Image alt={title} height="140" src={image} width="140" />
      <div className="text-3xl font-bold">{title}</div>
      <div className="text-xl text-trueGray-500">{children}</div>
    </div>
  );
}
