import * as React from 'react';
import classNames from 'classnames';

import { OverridableComponentProps } from './extendableComponentProps';
import { Spinner } from './Spinner';

type BaseProps = {
  color?: 'default' | 'primary' | 'warning' | 'success' | 'alert';
  size?: 'md' | 'lg';
  loading?: boolean;
  readOnly?: boolean;
  spinnerClassName?: string;
};

type Props<C extends React.ElementType> = OverridableComponentProps<C, BaseProps>;

export function Button<C extends React.ElementType = 'button'>({
  children,
  className,
  component,
  color = 'default',
  size = 'md',
  loading,
  onClick,
  spinnerClassName,
  readOnly,
  ...rest
}: Props<C>) {
  const Component = component ?? 'button';

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    if (loading || readOnly) {
      return;
    }

    onClick?.(event);
  }

  return (
    <Component
      className={classNames(
        'leading-none rounded whitespace-nowrap flex-nowrap flex items-center justify-center select-none transition duration-300 disabled:bg-opacity-100 disabled:bg-solitude disabled:cursor-not-allowed disabled:text-gray-600 disabled:border-solitude',
        {
          md: 'text-xs md:text-sm px-5 py-2',
          lg: 'px-6 py-3',
        }[size],
        {
          default: 'border border-gray-300 bg-white',
          primary: 'border border-primaryMain bg-primaryMain text-white',
          warning: 'border border-red-500 bg-red-500 text-white',
          success: 'border border-green-500 bg-green-500 text-white',
          alert: 'border border-yellow-500 bg-yellow-500 text-white',
        }[color],
        {
          'cursor-not-allowed': loading,
          'cursor-default': !loading && readOnly,
        },
        !loading &&
          !readOnly &&
          {
            default: 'hover:text-black hover:border-black',
            primary: 'hover:bg-white hover:text-primaryMain',
            warning: 'hover:bg-white hover:text-red-500',
            success: 'hover:bg-white hover:text-green-500',
            alert: 'hover:bg-white hover:text-yellow-500',
          }[color],
        className,
      )}
      onClick={handleClick}
      {...rest}
    >
      {loading ? <Spinner className={classNames('w-6 h-6', spinnerClassName)} /> : children}
    </Component>
  );
}
