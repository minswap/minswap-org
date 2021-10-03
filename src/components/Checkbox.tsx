import * as React from 'react';
import Image from 'next/image';

import checkedImg from 'src/assets/checked.svg';

import { ExtendableComponentProps } from './extendableComponentProps';

type Props = ExtendableComponentProps<'input'> & {
  label: string;
};

export function Checkbox({ checked, label, ...rest }: Props) {
  return (
    <label className="flex items-center gap-x-2">
      <div className="relative w-6 h-6">
        <input
          checked={checked}
          className="absolute inset-0 opacity-0 z-10 w-6 h-6 hover:cursor-pointer"
          type="checkbox"
          {...rest}
        />

        <div className="rounded-full border hover:opacity-80 w-6 h-6">
          {checked ? <Image alt={'Checked'} src={checkedImg} /> : null}
        </div>
      </div>

      <span className="text-base opacity-60">{label}</span>
    </label>
  );
}
