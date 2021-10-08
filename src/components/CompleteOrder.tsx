import * as React from 'react';
import dynamic from 'next/dynamic';

import { useCancelOrderMutation } from 'src/api';
import { useGetOrderQuery } from 'src/api/useGetOrder';
import { SELLER_ADDRESS } from 'src/constants';
import { Amount } from 'src/models';

import { Button } from './Button';
import { CopyIcon, WarningIcon } from './icons';
import { Tooltip } from './Tooltip';

type Props = {
  orderId: string | undefined;
  countDown: number;
  onCancel: () => void;
  adaToSend: Amount | undefined;
  minToReceive: Amount | undefined;
};

const DynamicQrCode = dynamic<any>(() => import('./QrCode').then((mod) => mod.QrCode), { ssr: false });

export function CompleteOrder({ orderId, countDown, onCancel, adaToSend, minToReceive }: Props) {
  const [showCopiedTooltip, setShowCopiedTooltip] = React.useState(false);
  const { isLoading, error: cancelError, mutateAsync: cancelOrder } = useCancelOrderMutation();
  const { data: orderInfo } = useGetOrderQuery(orderId);
  const currCountDown = React.useRef(countDown);
  const countDownText = React.useMemo(() => {
    const format = (time: number) => new Date(time * 1000).toISOString().substr(11, 8);
    if (orderInfo?.status === 'SOLD') {
      return format(currCountDown.current);
    }

    return format(countDown);
  }, [countDown, orderInfo]);

  React.useEffect(() => {
    if (orderInfo && orderInfo.status !== 'SOLD' && orderInfo.status !== 'REFUNDED') {
      currCountDown.current = countDown;
    }
  }, [countDown, orderInfo]);

  async function handleCancel() {
    if (!orderId) {
      throw new Error(`Expect valid order ID, got ${orderId}`);
    }
    await cancelOrder({ orderId });
    onCancel();
  }

  function handleCopy() {
    navigator.clipboard.writeText(SELLER_ADDRESS);
    setShowCopiedTooltip(true);
  }

  React.useEffect(() => {
    if (showCopiedTooltip) {
      setTimeout(() => {
        setShowCopiedTooltip(false);
      }, 1000);
    }
  }, [showCopiedTooltip]);

  return (
    <div className="flex flex-col w-full md:p-6 p-4 bg-white shadow-xl md:max-w-[500px] rounded-[30px] gap-y-4">
      <h1 className="font-bold ">What&apos;s next</h1>
      {cancelError && <div className="text-sm text-red-500">{cancelError.message}</div>}
      <div className="w-full h-[1px] bg-gray-200" />
      <div className="flex gap-x-8">
        <div className="flex-shrink-0">
          <DynamicQrCode paymentAddress={SELLER_ADDRESS} />
        </div>

        <div className="flex flex-col justify-center gap-y-2">
          <div className="text-3xl text-primaryMain md:text-4xl font-dmMono">{countDownText}</div>
          <div className="text-sm opacity-60">
            {orderInfo?.status === 'SOLD'
              ? 'Your order is completed, MIN token has been already sent to your wallet'
              : orderInfo?.status === 'REFUNDED'
              ? 'Your order is overtime, ADA token has been already refunded to your wallet'
              : "We reserve the MIN tokens for you in this time, if you don't complete the order before it will be released."}
          </div>
          <Button
            className="px-8 h-[30px] rounded-xl"
            color={orderInfo?.status === 'SOLD' ? 'success' : orderInfo?.status === 'REFUNDED' ? 'alert' : 'warning'}
            loading={isLoading}
            readOnly={orderInfo?.status === 'SOLD' || orderInfo?.status === 'REFUNDED'}
            spinnerClassName="w-[13px] h-[13px]"
            onClick={handleCancel}
          >
            {orderInfo?.status === 'SOLD' ? 'Success' : orderInfo?.status === 'REFUNDED' ? 'Refunded' : 'Cancel'}
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between px-5 py-3 overflow-x-auto bg-coolGray-100 rounded-2xl md:overflow-x-hidden gap-x-4">
        <span className="overflow-hidden whitespace-nowrap overflow-ellipsis">{SELLER_ADDRESS}</span>

        <Tooltip content="Address copied!" placement="bottom" visible={showCopiedTooltip}>
          <button className="p-3 bg-white rounded-xl" onClick={handleCopy}>
            <CopyIcon />
          </button>
        </Tooltip>
      </div>
      <div className="flex flex-col gap-y-5">
        <h2 className="text-2xl font-bold">What&apos;s next</h2>
        <div className="text-base opacity-60">
          You must send <strong>exactly {adaToSend?.toExact()} ADA</strong> to this address and we will send back{' '}
          <strong>{minToReceive?.toExact()} MIN</strong> in a few minutes.
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
