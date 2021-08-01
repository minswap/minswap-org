import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
  subTitle?: string;
};

export function SectionTitle({ children, className, subTitle }: Props) {
  return (
    <div className="flex flex-col items-center gap-y-5">
      {subTitle ? <span className="text-xs tracking-widest uppercase lg:text-sm">{subTitle}</span> : null}
      <h2 className={classNames('lg:text-5xl text-3xl font-bold', className)}>{children}</h2>
    </div>
  );
}
