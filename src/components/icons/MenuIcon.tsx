import * as React from 'react';

import { IconProps } from './props';

export function MenuIcon({ className, ...rest }: IconProps): React.ReactElement<IconProps> {
  return (
    <svg
      className={className}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M3.75 7.5H20.25" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" />
      <path d="M3.75 12H20.25" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" />
      <path d="M3.75 16.5H20.25" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" />
    </svg>
  );
}
