import * as React from 'react';

import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';

type Props = {
  isScroll?: boolean;
};

export function Header({ isScroll }: Props) {
  return (
    <>
      <DesktopHeader className="hidden lg:block" isScroll={isScroll} />
      <MobileHeader className="lg:hidden" isScroll={isScroll} />
    </>
  );
}
