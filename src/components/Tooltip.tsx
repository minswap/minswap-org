import * as React from 'react';
import Tippy, { TippyProps } from '@tippyjs/react';
import classnames from 'classnames';
import { Placement } from 'tippy.js';

type Props = {
  children: React.ReactElement;
  className?: string;
  placement: Placement;
  content: string;
  visible?: boolean;
} & Pick<TippyProps, 'popperOptions' | 'arrow'>;

export function Tooltip({ children, className, placement, content, popperOptions, ...rest }: Props) {
  return (
    <Tippy
      className={classnames('!text-xs !rounded-xl !p-2', className)}
      content={content}
      placement={placement}
      popperOptions={popperOptions}
      {...rest}
    >
      {children}
    </Tippy>
  );
}
