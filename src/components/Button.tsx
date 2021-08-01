import * as React from 'react';
import classNames from 'classnames';

import { OverrideableComponentProps } from './extendableComponentProps';

type BaseProps = {
  color?: 'default' | 'primary';
  size?: 'md' | 'lg';
};

type Props<C extends React.ElementType> = OverrideableComponentProps<C, BaseProps>;

export function Button<C extends React.ElementType = 'button'>({
  children,
  className,
  component,
  color = 'default',
  size = 'md',
  ...rest
}: Props<C>) {
  const Component = component ?? 'button';
  return (
    <Component
      className={classNames(
        'leading-none rounded whitespace-nowrap flex-nowrap flex items-center justify-center select-none transition duration-300',
        {
          md: 'text-sm px-5 py-1',
          lg: 'px-6 py-3',
        }[size],
        {
          default: 'border border-gray-300 hover:text-black hover:border-black',
          primary: 'border border-primaryMain bg-primaryMain text-white hover:bg-white hover:text-primaryMain',
        }[color],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
