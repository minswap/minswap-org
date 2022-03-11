import * as React from 'react';
import classNames from 'classnames';

import { Announcement } from '../Announcement';
import { Buttons } from './Buttons';
import { Links } from './Links';
import { Logo } from './Logo';

type Props = {
  isScroll?: boolean;
  className?: string;
};

export function DesktopHeader({ isScroll, className }: Props) {
  return (
    <div className={classNames(isScroll ? 'sticky top-0 z-50' : null, className)}>
      <Announcement href="https://lbe.minswap.org">
        🚨 If you participated in the LBE and still haven&#39;t redeemed your PurrADA! Make sure to convert them for the ADA/MIN LPs before March 14th 3:00 AM UTC. If you miss this window your purrADA will become useless.
      </Announcement>

      <header className={classNames('grid justify-around py-4 header', isScroll ? 'shadow-md bg-white' : null)}>
        <Logo />

        <Links />

        <div className="flex justify-end gap-x-2">
          <Buttons />
        </div>
      </header>

      <style jsx>{`
        .header {
          grid-template-columns: 250px max-content 250px;
        }
      `}</style>
    </div>
  );
}
