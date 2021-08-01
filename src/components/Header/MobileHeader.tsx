import * as React from 'react';

import { Announcement } from '../Announcement';
import { MenuIcon } from '../icons';
import { Buttons } from './Buttons';
import { Drawer } from './Drawer';
import { Logo } from './Logo';

type Props = {
  isScroll?: boolean;
  className?: string;
};

export function MobileHeader({ className }: Props) {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  function handleDrawerClose() {
    setIsDrawerOpen(false);
  }

  function openDrawer() {
    setIsDrawerOpen(true);
  }

  return (
    <div className={className}>
      <Announcement href="https://twitter.com/MinswapDEX/status/1418221475681558529">
        Vote for Minswap on Catalyst Fund 5
      </Announcement>

      <header className={'flex items-center py-4 px-5 gap-x-2'}>
        <Logo />

        <div className="flex-1"></div>

        <button aria-label="Open menu" className="text-primaryMain" onClick={openDrawer}>
          <MenuIcon />
        </button>
      </header>

      <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose} />
    </div>
  );
}
