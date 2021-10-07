import * as React from 'react';

import { useCancelOrderMutation } from 'src/api';
import { SELLER_ADDRESS } from 'src/constants';

import { CopyIcon, WarningIcon } from './icons';

type Props = {
  orderId: string | undefined;
  countDown: number;
  onCancel: () => void;
};

export function CompleteOrder({ orderId, countDown, onCancel }: Props) {
  const countDownText = React.useMemo(() => new Date(countDown * 1000).toISOString().substr(11, 8), [countDown]);
  const { isLoading, error: cancelError, mutateAsync: cancelOrder } = useCancelOrderMutation();

  async function handleCancel() {
    if (!orderId) {
      throw new Error(`Expect valid order ID, got ${orderId}`);
    }
    await cancelOrder({ orderId });
    onCancel();
  }

  return (
    <div className="flex flex-col w-full md:p-6 p-4 bg-white shadow-xl md:max-w-[500px] rounded-[30px] gap-y-6">
      <div className="flex justify-between items-center relative">
        <div></div>

        <h1 className="font-bold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">Wallet info</h1>

        <button
          className="rounded-3xl bg-red-500 text-white px-6 py-2 text-sm"
          disabled={isLoading}
          onClick={handleCancel}
        >
          {/* TODO: Handle loading state */}
          Cancel
        </button>
      </div>

      {cancelError && <div className="text-red-500 text-sm">{cancelError.message}</div>}

      <div className="w-full h-[2px] bg-gray-200" />

      <div className="flex gap-x-8">
        <div className="bg-gray-300 h-32 w-32 flex-shrink-0" />

        <div className="flex flex-col gap-y-5 justify-center">
          <div className="text-primaryMain md:text-4xl font-dmMono text-3xl">{countDownText}</div>
          <div className="text-sm opacity-60">
            We reserve the MIN tokens for you in this time, if you don&apos;t complete the order before it will be
            released.
          </div>
        </div>
      </div>

      <div className="bg-coolGray-100 rounded-2xl px-5 py-3 flex items-center justify-between overflow-x-auto md:overflow-x-hidden gap-x-4">
        {/* TODO: Chỗ này cần để overflow truncate gì đấy cho đỡ trống */}
        <span>{SELLER_ADDRESS.slice(0, 20)}...</span>

        <button className="bg-white rounded-xl p-3">
          {/* TODO: Copy vào clipboard */}
          {/* TODO: Thêm animation với icon lúc bấm copy thành công, trên Zeplin có */}
          <CopyIcon />
        </button>
      </div>

      <div className="flex flex-col gap-y-5">
        <h2 className="font-bold text-2xl">What&apos;s next</h2>
        <div className="text-base opacity-60">
          You must send exactly 1,000 ADA to this address and we will send back 4,000 MIN in a few minutes.
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center text-red-500 gap-x-2">
          <WarningIcon />
          <span>Important</span>
        </div>

        <div className="h-5" />

        <p className="opacity-60">
          You must use a wallet that can receive native tokens like <strong>Daedalus</strong> or <strong>Yoroi</strong>.
        </p>

        <div className="h-3" />

        <p className="opacity-60">If you send from exchanges like Binance, eToro,... you cannot receive MIN tokens.</p>
      </div>
    </div>
  );
}
