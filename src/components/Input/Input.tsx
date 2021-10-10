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

      <div className={classnames('flex flex-row items-center w-full text-sm bg-white bg-opacity-50', className)}>
        <input
          className={
            'flex-1 py-[9px] font-sans bg-transparent border focus:text-primary focus:outline-none focus:border focus:border-primaryMain rounded-[14px] px-5 text-base'
          }
          ref={ref}
          {...rest}
        />

        {postfix ? <div className="flex-none ml-2 text-primary">{postfix}</div> : null}
      </div>
    </div>
  );
});
