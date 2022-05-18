import * as React from 'react';
import classNames from 'classnames';

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
