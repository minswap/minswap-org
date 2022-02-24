import * as React from 'react';
import classNames from 'classnames';

import { Announcement } from '../Announcement';
import { MenuIcon } from '../icons';
import { Drawer } from './Drawer';
import { Logo } from './Logo';

type Props = {
  isScroll?: boolean;
  className?: string;
};

export function MobileHeader({ isScroll, className }: Props) {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  function handleDrawerClose() {
    setIsDrawerOpen(false);
  }

  function openDrawer() {
    setIsDrawerOpen(true);
  }

  return (
    <div className={classNames(isScroll ? 'sticky top-0 z-50' : null, className, 'bg-white')}>
      <Announcement className={isScroll ? 'hidden' : ''} href="https://lbe.minswap.org">
        The Discovery Phase is now LIVE 🎉, you can supply ADA now
      </Announcement>

      <header className={classNames('flex items-center py-4 px-5 gap-x-2', isScroll ? 'shadow-md bg-white' : null)}>
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
