import * as React from 'react';
import Tippy from '@tippyjs/react';
import classnames from 'classnames';
import { Placement } from 'tippy.js';

type Props = {
  children: React.ReactElement;
  className?: string;
  placement: Placement;
  content: string;
  visible?: boolean;
};

export function Tooltip({ children, className, placement, content, ...rest }: Props) {
  return (
    <Tippy
      className={classnames('!text-xs !rounded-xl !p-2', className)}
      content={content}
      placement={placement}
      {...rest}
    >
      {children}
    </Tippy>
  );
}
