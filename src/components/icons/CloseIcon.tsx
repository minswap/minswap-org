import * as React from 'react';

import { IconProps } from './props';

export function CloseIcon(props: IconProps) {
  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g>
        <path d="M8.57141 8.57129L15.4286 15.4284" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.4286 8.57129L8.57141 15.4284" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
