import * as React from 'react';

import { ArrowRightIcon, CloseIcon } from './icons';

type Props = {
  href: string;
  linkText: string;
  message: string;
};

export function Announcement({ href, linkText, message }: Props) {
  return (
    <>
      <div className="grid py-2 text-sm leading-none text-white px-7 bg-primaryMain announcement">
        <div></div>

        <div className="flex items-center justify-center">
          <a className="flex items-center" href={href} rel="noopener noreferrer" target="_blank">
            <span>{message}</span>
            <div className="w-4"></div>
            <span>|</span>
            <div className="w-4"></div>
            <span>{linkText}</span>
            <div className="w-1"></div>
            <ArrowRightIcon />
          </a>
        </div>

        <div className="flex justify-end">
          <button>
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        <style jsx>{`
          .announcement {
            grid-template-columns: 24px 1fr 24px;
          }
        `}</style>
      </div>
    </>
  );
}
