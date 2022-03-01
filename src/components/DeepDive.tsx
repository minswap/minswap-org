import * as React from 'react';
import Image from 'next/image';

import communityFirstImage from 'src/assets/community-first.svg';
import ethereumCompatibleImage from 'src/assets/ethereum-compatible.svg';
import fairLaunchImage from 'src/assets/fair-launch.svg';
import featureBackgroundImage from 'src/assets/feature-bg.svg';
import launchpoolImage from 'src/assets/launchpool.svg';
import permissionlessImage from 'src/assets/permissionless.svg';
import stakePoolImage from 'src/assets/stake-pool.svg';
import transparentImage from 'src/assets/transparent.svg';
import yieldFarmingImage from 'src/assets/yield-farming.svg';

import { SectionTitle } from './SectionTitle';

type Props = {
  id: string;
};

export function DeepDive({ id }: Props) {
  return (
    <div className="relative flex flex-col items-center pt-14 lg:pt-20" id={id}>
      <SectionTitle subTitle="Some Facts">Deep Dive</SectionTitle>

      <div className="h-8 lg:h-16"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-7 lg:gap-y-10 gap-y-5">
        <Item image={fairLaunchImage} title="Fair Distribution">
          No private investment or VC allocation. MIN tokens are fairly distributed to the community with 21.5%
          allocation to core team and development funds.
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
          All trading fees go to liquidity providers and MIN stakers. MIN token holder vote democratically on protocol
          changes.
        </Item>

        <Item image={stakePoolImage} title="Stake Pool Operators Support">
          Minswap supports the SPOs by a community-oriented ADA delegation policy and{' '}
          <a
            className="text-primaryMain hover:underline"
            href="https://medium.com/minswap/fair-iso-application-for-stake-pool-operators-begins-now-e6d563f85eec"
            rel="noreferrer"
            target="_blank"
          >
            Fair Initial Stake Offering
          </a>
          .
        </Item>
      </div>

      <div className="absolute inset-y-0 right-0 w-40 pointer-events-none select-none lg:w-96">
        <Image
          alt="feature-bg"
          layout="fill"
          objectFit="contain"
          placeholder="empty"
          quality="100"
          src={featureBackgroundImage}
        />
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
    <>
      {/* Mobile */}
      <div className="flex flex-col items-center px-5 text-center gap-y-2 lg:hidden">
        <Image alt={title} height="100" src={image} width="100" />
        <div className="text-2xl font-bold lg:text-3xl">{title}</div>
        <div className="text-base lg:text-xl text-trueGray-500">{children}</div>
      </div>
      {/* Destop */}
      <div className="lg:flex flex-col items-start gap-y-5 w-[500px] hidden">
        <Image alt={title} height="140" src={image} width="140" />
        <div className="text-3xl font-bold">{title}</div>
        <div className="text-xl text-trueGray-500">{children}</div>
      </div>
    </>
  );
}
