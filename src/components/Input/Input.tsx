import * as React from 'react';
import classnames from 'classnames';

interface Props extends React.ComponentPropsWithoutRef<'input'> {
  postfix?: React.ReactNode;
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, Props>(function Input(
  { postfix, className, label, ...rest }: Props,
  ref,
): React.ReactElement<Props> {
  return (
    <div className="flex-grow lg:flex-none">
      {label && <div className="text-sm pb-[6px] pl-[10px]">{label}</div>}
      <div
        className={classnames(
          'flex flex-row items-center w-full text-sm px-5 border bg-greyser border-solid bg-opacity-50 rounded-[14px]',
          className,
        )}
      >
        <input
          className={'flex-grow py-[9px] font-sans border-none bg-transparent focus:text-primary focus:outline-none '}
          ref={ref}
          {...rest}
        />

        {postfix ? <div className="flex-none ml-2 text-primary">{postfix}</div> : null}
      </div>
    </div>
  );
});
