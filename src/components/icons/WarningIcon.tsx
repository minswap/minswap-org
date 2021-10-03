import * as React from 'react';

export function WarningIcon() {
  return (
    <svg height="18" width="20" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd" transform="translate(1 1)">
        <path d="m9 0 9 16H0z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.155" />
        <path
          d="M9 5.355a.602.602 0 0 0-.592.612v4.894c0 .338.265.612.592.612a.602.602 0 0 0 .592-.612V5.967A.602.602 0 0 0 9 5.355z"
          fill="currentColor"
          fillRule="nonzero"
        />
        <rect fill="currentColor" fillRule="nonzero" height="1.224" rx=".592" width="1.184" x="8.408" y="12.697" />
      </g>
    </svg>
  );
}
