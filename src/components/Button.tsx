import * as React from 'react';
import classNames from 'classnames';

import { OverrideableComponentProps } from './extendableComponentProps';
import { Spinner } from './Spinner';

type BaseProps = {
  color?: 'default' | 'primary';
  size?: 'md' | 'lg';
  loading?: boolean;
};

type Props<C extends React.ElementType> = OverrideableComponentProps<C, BaseProps>;

export function Button<C extends React.ElementType = 'button'>({
  children,
  className,
  component,
  color = 'default',
  size = 'md',
  loading,
  onChange,
  ...rest
}: Props<C>) {
  const Component = component ?? 'button';

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    if (loading) {
      return;
    }

    onChange(event);
  }

  return (
    <Component
      className={classNames(
        'leading-none rounded whitespace-nowrap flex-nowrap flex items-center justify-center select-none transition duration-300 disabled:bg-opacity-100 disabled:bg-solitude disabled:cursor-not-allowed disabled:text-gray-600 disabled:border-solitude',
        {
          md: 'text-sm px-5 py-2',
          lg: 'px-6 py-3',
        }[size],
        {
          default: 'border border-gray-300 bg-white',
          primary: 'border border-primaryMain bg-primaryMain text-white',
        }[color],
        loading
          ? 'cursor-not-allowed'
          : {
              default: 'hover:text-black hover:border-black',
              primary: 'hover:bg-white hover:text-primaryMain',
            },
        className,
      )}
      onClick={handleClick}
      {...rest}
    >
      {loading ? <Spinner className="w-6 h-6" /> : children}
    </Component>
  );
}
