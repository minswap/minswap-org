import * as React from 'react';
import classNames from 'classnames';

import { ExtendableComponentProps } from './extendableComponentProps';

type BaseProps = {
  color?: 'default' | 'primary';
  size?: 'md' | 'lg';
};

type Props = ExtendableComponentProps<'button', BaseProps>;

export function Button({ children, className, color = 'default', size = 'md' }: Props) {
  return (
    <button
      className={classNames(
        'leading-none rounded whitespace-nowrap flex-nowrap flex items-center justify-center select-none',
        {
          md: 'text-sm px-5 py-1',
          lg: 'px-6 py-3',
        }[size],
        {
          default: 'border border-gray-300',
          primary: 'border border-primaryMain bg-primaryMain text-white',
        }[color],
        className,
      )}
    >
      {children}
    </button>
  );
}
