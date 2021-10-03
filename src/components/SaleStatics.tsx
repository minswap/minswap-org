import * as React from 'react';

export function SaleStatics() {
  return (
    <div className="w-full rounded-[30px] grid p-6 bg-white shadow-xl md:max-w-[460px] gap-y-2 grid-cols-2">
      <div>
        <div className="text-base opacity-60">Total Tokens</div>
        <div className="h-1" />
        <div className="font-dmMono text-2xl font-medium">MIN 1.6M</div>
        <div className="text-base text-primaryMain font-dmMono">ADA 509.5K</div>
      </div>

      <div>
        <div className="text-base opacity-60">Token Sold</div>
        <div className="h-1" />
        <div className="font-dmMono text-2xl font-medium">MIN 789.8K</div>
        <div className="text-base text-primaryMain font-dmMono">ADA 309.78K</div>
      </div>

      <div className="row-start-2 col-span-2 flex flex-col items-end">
        <div className="font-dmMono text-primaryMain">90% Sold</div>
        <div className="relative h-1 w-full">
          <div className="w-full bg-primaryMain opacity-20 rounded left-0 absolute top-0 bottom-0" />
          <div className="w-[90%] bg-primaryMain rounded absolute left-0 top-0 bottom-0" />
        </div>
      </div>
    </div>
  );
}
