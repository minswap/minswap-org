import * as React from 'react';
import classNames from 'classnames';

import { SectionTitle } from './SectionTitle';

type Milestone = {
  hasReached: boolean;
  items: string[];
  time: string;
};

const milestones: Milestone[] = [
  { items: ['Fundraising', 'Constant-Product Pool'], time: 'Q2 2021', hasReached: true },
  {
    items: ['Testnet', 'Fair Initial Stake Offering (FISO)'],
    time: 'Q3 2021',
    hasReached: true,
  },
  {
    items: ['Concurrency Solution', 'Public Sale'],
    time: 'Q4 2021',
    hasReached: true,
  },
  {
    items: ['Mainnet', 'Security Audit', 'Liquidity Mining'],
    time: 'Q1 2022',
    hasReached: true,
  },
  {
    items: ['Decentralized Autonomous Organization (DAO)', 'Double Farming', 'MIN Staking'],
    time: 'Q2 2022',
    hasReached: false,
  },
];

type Props = {
  id: string;
};

export function RoadMap({ id }: Props) {
  return (
    <div className="lg:pt-10" id={id}>
      <SectionTitle subTitle="Explore the Minswap way">The Roadmap</SectionTitle>

      <div className="h-3 md:h-5"></div>

      <div className="relative flex flex-col items-start justify-start ml-10 md:items-center md:justify-center">
        <div className="w-px h-28 bg-primaryMain bg-gradient-to-t from-[#7CC6DC] via-[#7cc6dc] to-white"></div>
        <div className="w-px h-36 bg-primaryMain bg-gradient-to-t from-[#2F45C5] to-[#7CC6DC]"></div>
        <div className="w-px h-72 md:h-80 bg-primaryMain"></div>
        <div className="w-px h-24 md:h-40 bg-primaryMain bg-gradient-to-b from-primaryMain to-white"></div>

        <div className="absolute grid grid-flow-row grid-cols-1 left-1 md:hidden gap-y-4 top-14">
          {milestones.map((milestone, index) => (
            <React.Fragment key={milestone.time}>
              <MilestoneItem
                className="col-span-1 col-start-2 justify-self-start transform -translate-x-3.5"
                flip={false}
                hasReached={milestone.hasReached}
                items={milestone.items}
                time={milestone.time}
              />

              {index % 2 !== 0 ? <div className="col-span-1 col-start-2" /> : null}
            </React.Fragment>
          ))}
        </div>

        <div className="absolute hidden grid-flow-row grid-cols-2 md:grid gap-y-4 top-24">
          {milestones.map((milestone, index) => (
            <React.Fragment key={milestone.time}>
              {index % 2 === 0 ? <div className="col-span-1 col-start-1" /> : null}

              <MilestoneItem
                className={classNames(
                  'col-span-1',
                  index % 2 === 0
                    ? 'col-start-2 justify-self-start transform -translate-x-3.5'
                    : 'col-start-1 justify-self-end transform translate-x-3.5',
                )}
                flip={index % 2 !== 0}
                hasReached={milestone.hasReached}
                items={milestone.items}
                time={milestone.time}
              />

              {index % 2 !== 0 ? <div className="col-span-1 col-start-2" /> : null}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

type MileStoneItemProps = Milestone & {
  className?: string;
  flip?: boolean;
};

function MilestoneItem({ hasReached, items, time, className, flip = false }: MileStoneItemProps) {
  return (
    <div className={classNames('grid gap-x-7 auto-cols-max items-center ', flip ? 'text-right' : null, className)}>
      <div
        className={classNames(
          'flex justify-center items-center rounded-full bg-white border md:w-7 md:h-7 h-5 w-5 row-start-1 box-border',
          flip ? 'col-start-2' : 'col-start-1',
          hasReached ? 'border-[#7CC6DC]' : 'border-primaryMain',
        )}
      >
        {hasReached ? <div className="md:w-3 md:h-3 h-2 w-2 bg-[#7CC6DC] rounded-full"></div> : null}
      </div>

      <div className={classNames('md:text-2xl text-xl font-bold row-start-1', flip ? 'col-start-1' : 'col-start-2')}>
        {time}
      </div>

      <div className={classNames('flex flex-col row-start-2 pl-13 gap-y-1', flip ? 'col-start-1' : 'col-start-2')}>
        <div className="h-3 md:h-4"></div>
        {items.map((item) => (
          <div className="text-sm w-[17rem] md:text-base text-trueGray-500 md:w-auto" key={item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
