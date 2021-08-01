import * as React from 'react';
import classNames from 'classnames';

import { ArrowRightIcon } from './icons';

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function Announcement({ href, className, children }: Props) {
  return (
    <div
      className={classNames(
        'flex items-center justify-center py-2 text-sm leading-none text-white bg-primaryMain announcement',
        className,
      )}
    >
      <a className="flex items-center" href={href} rel="noopener noreferrer" target="_blank">
        <span>{children}</span>
        <div className="w-1"></div>
        <ArrowRightIcon />
      </a>
    </div>
  );
}
