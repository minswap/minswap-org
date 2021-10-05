import * as React from 'react';
import Image from 'next/image';
import Tippy from '@tippyjs/react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import arrowDownIcon from 'src/assets/icons/arrow-down.svg';
import adaIcon from 'src/assets/icons/cardano.png';
import minIcon from 'src/assets/icons/minswap.png';
import { MAXIMUM_ADA, MINIMUM_ADA, ORDER_DEADLINE_SECONDS } from 'src/constants';

import { Button } from './Button';
import { Checkbox } from './Checkbox';
import { CompleteOrder } from './CompleteOrder';
import { Header } from './Header';
import { SaleStatics } from './SaleStatics';

function calculateTimeLeft(end: Date) {
  const endSeconds = Math.round(end.getTime() / 1000);
  const nowSeconds = Math.round(new Date().getTime() / 1000);
  const diff = endSeconds - nowSeconds;
  return diff >= 0 ? diff : 0;
}

export function Marketplace() {
  const [confirmNotUS, setConfirmNotUS] = React.useState(false);
  const [token, setToken] = React.useState<string | null>(null);
  const [userAddress, setUserAddress] = React.useState<string>('');
  const [countDown, setCountDown] = React.useState<number>(ORDER_DEADLINE_SECONDS);
  const intervalId = React.useRef<NodeJS.Timeout | null>(null);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = React.useCallback(async () => {
    if (!executeRecaptcha) {
      return;
    }

    const token = await executeRecaptcha();
    setToken(token);
  }, [executeRecaptcha]);

  React.useEffect(() => {
    if (token) {
      const end = new Date();
      end.setSeconds(end.getSeconds() + ORDER_DEADLINE_SECONDS);
      intervalId.current = setInterval(() => {
        setCountDown(calculateTimeLeft(end));
      }, 1000);

      return () => {
        if (intervalId.current) {
          clearInterval(intervalId.current);
        }
      };
    }
  }, [token]);

  React.useEffect(() => {
    if (!countDown && intervalId.current) {
      clearInterval(intervalId.current);
    }
  }, [countDown]);

  function handleSubmit() {
    handleReCaptchaVerify();
  }

  function handleConfirmNotUSChange() {
    setConfirmNotUS((confirmNotUS) => !confirmNotUS);
  }

  const handleCancelOrder = React.useCallback(() => {
    setCountDown(ORDER_DEADLINE_SECONDS);
    setToken(null);
  }, []);

  return (
    <>
      <Header isScroll={false} />

      <div className="flex flex-col items-center py-12 md:py-24 gap-y-5 bg-mainLayout mainLayout px-2 md:px-0">
        {token ? (
          <CompleteOrder countDown={countDown} onCancel={handleCancelOrder} />
        ) : (
          <>
            <div className="flex flex-col w-full p-6 bg-white shadow-xl md:max-w-[460px] rounded-[30px] gap-y-6">
              <div className="relative flex flex-col gap-y-[10px]">
                <div className="rounded-full p-3 bg-solitude absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center border-4 border-white">
                  <Image alt="Arrow down icon" src={arrowDownIcon} />
                </div>
                <div className="flex flex-col p-4 border bg-opacity-50 border-opacity-30 active:border-greyser hover:border-greyser bg-solitude rounded-[20px]">
                  <div className="flex items-center">
                    <div className="items-center flex-1">
                      <div className="text-base opacity-60">Sell</div>
                      <input
                        aria-label="Currency"
                        className="w-full text-[20px] font-medium bg-transparent focus:outline-none font-dmMono font-medium"
                        placeholder="0.0"
                        size={1}
                      />
                    </div>

                    <div className="flex flex-col items-end gap-y-1">
                      <div className="flex items-center gap-x-4">
                        <span className="font-dmMono font-medium">ADA</span>
                        <Image alt="ADA icon" height={30} src={adaIcon} width={30} />
                      </div>

                      <div className="text-xs text-primaryMain">
                        Min: {MINIMUM_ADA} ADA - Max: {MAXIMUM_ADA} ADA
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col p-4 border bg-opacity-50 border-opacity-30 active:border-greyser hover:border-greyser bg-solitude rounded-[20px]">
                  <div className="flex items-center">
                    <div className="items-center flex-1">
                      <div className="text-base opacity-60">Buy</div>
                      <input
                        aria-label="Currency"
                        className="w-full text-[20px] font-medium bg-transparent focus:outline-none font-dmMono font-medium"
                        placeholder="0.0"
                        size={1}
                        readOnly
                      />
                    </div>

                    <div className="flex items-center gap-x-4">
                      <span className="font-dmMono font-medium">MIN</span>
                      <Image alt="MIN icon" height={30} src={minIcon} width={30} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Checkbox
                  checked={confirmNotUS}
                  label="I confirm I'm not a US citizen"
                  onChange={handleConfirmNotUSChange}
                />

                <Tippy
                  className="!text-xs !rounded-xl !p-2"
                  content="Residents of the United States of America are not permitted to purchase these tokens. All other buyers are advised to check the laws of their country before buying these utility tokens. Please stay compliant."
                  placement="right"
                >
                  <div className="text-base text-primaryMain hover:cursor-default">What is this?</div>
                </Tippy>
              </div>

              <Button className="py-4 rounded-[14px]" color="primary" size="lg" onClick={handleSubmit}>
                Buy
              </Button>
            </div>

            <SaleStatics />
          </>
        )}
      </div>

      <style jsx>{`
        .mainLayout {
          min-height: calc(100vh - 104px);
        }
      `}</style>

      <style global jsx>{`
        .tippy-box {
          @apply bg-dark;
        }
      `}</style>
    </>
  );
}
