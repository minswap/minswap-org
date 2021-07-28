import * as React from 'react';

import { IconProps } from './props';

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g>
        <path
          d="M15.4286 7.42529L20 11.999L15.4286 16.5716"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M5.14285 12H20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
