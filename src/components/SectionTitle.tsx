import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function SectionTitle({ children, className }: Props) {
  return <h2 className={classNames('text-5xl font-bold', className)}>{children}</h2>;
}
