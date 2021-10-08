import * as React from 'react';
import classnames from 'classnames';

import { useGetOverview } from '../api';

function getDisplayAmount(amount: number | undefined): string {
  if (!amount) {
    return '0';
  }

  if (amount > 1_000_000) {
    return `${Math.round(amount / 1_000_000)}M`;
  }

  if (amount > 1000) {
    return `${Math.round(amount / 1_000)}K`;
  }

  return `${amount}`;
}

export function SaleStatics() {
  const { data } = useGetOverview();
  const initialMin = data?.initial ? data?.initial.amount_min / 1_000_000 : 0;
  const initialADA = data?.initial ? data?.initial.amount_ada / 1_000_000 : 0;
  const availableMin = data?.available ? data?.available.amount_min / 1_000_000 : 0;
  const availableADA = data?.available ? data?.available.amount_ada / 1_000_000 : 0;
  const minSold = initialMin - availableMin;
  const adaSold = initialADA - availableADA;
  const soldPercentage = minSold / initialMin;

  return (
    <div className="w-full rounded-[30px] grid p-6 bg-white shadow-xl md:max-w-[500px] gap-y-2 grid-cols-2">
      <div>
        <div className="text-base opacity-60">Total Tokens</div>
        <div className="h-1" />
        <div className="font-dmMono text-2xl font-medium">MIN {getDisplayAmount(initialMin)}</div>
        <div className="text-base text-primaryMain font-dmMono">ADA {getDisplayAmount(initialADA)}</div>
      </div>

      <div>
        <div className="text-base opacity-60">Token Sold</div>
        <div className="h-1" />
        <div className="font-dmMono text-2xl font-medium">MIN {getDisplayAmount(minSold)}</div>
        <div className="text-base text-primaryMain font-dmMono">ADA {getDisplayAmount(adaSold)}</div>
      </div>

      <div className="row-start-2 col-span-2 flex flex-col items-end">
        <div className={classnames('font-dmMono ', soldPercentage === 100 ? 'text-green-500' : 'text-primaryMain')}>
          {soldPercentage}% Sold
        </div>
        <div className="relative h-1 w-full">
          <div
            className={classnames(
              'w-full opacity-20 rounded left-0 absolute top-0 bottom-0',
              soldPercentage === 100 ? 'bg-green-500' : 'bg-primaryMain',
            )}
          />
          <div
            className={classnames(
              'rounded absolute left-0 top-0 bottom-0',
              soldPercentage === 100 ? 'bg-green-500' : 'bg-primaryMain',
            )}
            style={{ width: `${soldPercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
