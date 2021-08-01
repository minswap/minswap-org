import * as React from 'react';

import { CloseIcon } from '../icons';
import { Links } from './Links';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function Drawer({ isOpen, onClose }: Props) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-20 py-4 bg-white">
      <Links onLinkClick={onClose} />

      <button className="absolute right-4 top-4 text-trueGray-500" onClick={onClose}>
        <CloseIcon className="w-4 h-4" />
      </button>
    </div>
  );
}
