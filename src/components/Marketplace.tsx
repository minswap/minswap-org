import * as React from 'react';
import Image from 'next/image';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import { useCreateOrderMutation, useGetOverview } from 'src/api';
import arrowDownIcon from 'src/assets/icons/arrow-down.svg';
import adaIcon from 'src/assets/icons/cardano.png';
import minIcon from 'src/assets/icons/minswap.png';
import { MAXIMUM_ADA, MIN, MIN_PER_ADA, MINIMUM_ADA, ORDER_DEADLINE_SECONDS, TRANSACTION_FEE } from 'src/constants';
import { Amount } from 'src/models';
import { ADA } from 'src/models/constants';
import { tryParseAmount } from 'src/utils';

import { Button } from './Button';
import { Checkbox } from './Checkbox';
import { CompleteOrder } from './CompleteOrder';
import { Header } from './Header';
import { Input } from './Input';
import { SaleStatics } from './SaleStatics';
import { Soldout } from './Soldout';
import { Tooltip } from './Tooltip';

const paymentAddrRegExp = new RegExp('^addr(_test)?[a-z0-9]{99}$');

function calculateTimeLeft(end: Date) {
  const endSeconds = Math.round(end.getTime() / 1000);
  const nowSeconds = Math.round(new Date().getTime() / 1000);
  const diff = endSeconds - nowSeconds;
  return diff >= 0 ? diff : 0;
}

export function Marketplace() {
  const [confirmNotUS, setConfirmNotUS] = React.useState(false);
  const [userAddress, setUserAddress] = React.useState<string>('');
  const [countDown, setCountDown] = React.useState<number>(ORDER_DEADLINE_SECONDS);
  const [amountADA, setAmountADA] = React.useState<Amount | undefined>(undefined);
  const [amountMIN, setAmountMIN] = React.useState<Amount | undefined>(undefined);
  const [inputError, setInputError] = React.useState<string | undefined>(undefined);
  const [showCompleteOrder, setShowCompleteOrder] = React.useState<boolean>(false);
  const intervalId = React.useRef<NodeJS.Timeout | null>(null);
  const { data: overview } = useGetOverview(!showCompleteOrder);
  const hasSoldout = overview?.available && overview?.available?.amount_min === 0;

  const { isLoading, error: apiError, mutateAsync: createOrder, data: orderData } = useCreateOrderMutation();

  const { executeRecaptcha } = useGoogleReCaptcha();

  const minimumADA = Amount.fromRawAmount(ADA, MINIMUM_ADA);
  const maximumADA = Amount.fromRawAmount(ADA, MAXIMUM_ADA);

  const ADAtoSend: Amount | undefined = React.useMemo(
    () => amountADA?.add(Amount.fromRawAmount(ADA, TRANSACTION_FEE)),
    [amountADA],
  );

  const getRecaptcha = React.useCallback(async (): Promise<string | undefined> => {
    if (!executeRecaptcha) {
      return undefined;
    }
    const token = await executeRecaptcha();
    return token;
  }, [executeRecaptcha]);

  const startCoundown = React.useCallback(() => {
    const end = new Date();
    end.setSeconds(end.getSeconds() + ORDER_DEADLINE_SECONDS);
    intervalId.current = setInterval(() => {
      setCountDown(calculateTimeLeft(end));
    }, 1000);
  }, []);

  const stopCoundown = React.useCallback(() => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
  }, []);

  React.useEffect(() => {
    if (!countDown && intervalId.current) {
      clearInterval(intervalId.current);
    }
  }, [countDown]);

  async function handleSubmit() {
    setInputError(undefined);
    if (!userAddress) {
      setInputError('Must enter payment address');
      return;
    }
    if (!paymentAddrRegExp.test(userAddress)) {
      setInputError('Invalid payment address');
      return;
    }
    if (!amountADA || !amountMIN) {
      setInputError('Must enter ADA or MIN amount');
      return;
    }
    if (amountADA.lessThan(minimumADA) || amountADA.greaterThan(maximumADA)) {
      setInputError(`Can only buy from ${minimumADA.toExact()} ADA to ${maximumADA.toExact()} ADA`);
      return;
    }
    const token = await getRecaptcha();
    if (token === undefined) {
      setInputError('Fail to get recaptcha token');
      return;
    }
    await createOrder({
      paymentAddr: userAddress,
      amountADA: Number(ADAtoSend?.quotient),
      captchaResponse: token,
    });

    setShowCompleteOrder(true);
    startCoundown();
  }

  function handleConfirmNotUSChange() {
    setConfirmNotUS((confirmNotUS) => !confirmNotUS);
  }

  function handleAddressChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserAddress(event.target.value.trim().toLowerCase());
  }

  function handleADAInputChange(input: string) {
    input = input.replace(/[^0-9]/g, '');
    const ada = tryParseAmount(input, ADA);
    const min = ada?.multiply(MIN_PER_ADA);
    setAmountADA(ada);
    setAmountMIN(min);
  }

  async function handleCancelOrder() {
    stopCoundown();
    setCountDown(ORDER_DEADLINE_SECONDS);
    setShowCompleteOrder(false);

    // Clear form
    setAmountADA(undefined);
    setAmountMIN(undefined);
  }

  return (
    <>
      <Header isScroll={false} />

      <div className="flex flex-col items-center px-2 py-8 md:py-20 gap-y-5 bg-mainLayout mainLayout md:px-0">
        {showCompleteOrder ? (
          <CompleteOrder
            adaToSend={ADAtoSend}
            countDown={countDown}
            minToReceive={amountMIN}
            orderId={orderData?.id}
            onCancel={handleCancelOrder}
          />
        ) : (
          <>
            {hasSoldout ? (
              <Soldout />
            ) : (
              <div className="flex flex-col w-full p-6 bg-white shadow-xl md:max-w-[500px] rounded-[30px] gap-y-6">
                <div className="relative flex flex-col gap-y-[10px]">
                  <div className="absolute flex items-center justify-center p-3 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white rounded-full bg-solitude top-1/2 left-1/2">
                    <Image alt="Arrow down icon" src={arrowDownIcon} />
                  </div>
                  <div className="flex flex-col p-4 border bg-opacity-50 border-opacity-30 active:border-greyser hover:border-greyser bg-solitude rounded-[20px]">
                    <div className="flex items-center">
                      <div className="items-center flex-1">
                        <div className="text-base opacity-60">Sell</div>
                        <input
                          aria-label="Currency"
                          className="w-full text-[20px] bg-transparent focus:outline-none font-dmMono font-medium"
                          placeholder="0"
                          size={1}
                          value={amountADA?.toExact() ?? ''}
                          onChange={(e) => handleADAInputChange(e.target.value)}
                        />
                      </div>

                      <div className="flex flex-col items-end gap-y-1">
                        <div className="flex items-center gap-x-4">
                          <span className="font-medium font-dmMono">ADA</span>
                          <Image alt="ADA icon" height={30} src={adaIcon} width={30} />
                        </div>

                        <div className="text-xs text-primaryMain">
                          Min: {minimumADA.toExact()} ADA - Max: {maximumADA.toExact()} ADA
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
                          className="w-full text-[20px] bg-transparent focus:outline-none font-dmMono font-medium"
                          placeholder="0"
                          size={1}
                          value={amountMIN?.toExact() ?? ''}
                          readOnly
                        />
                      </div>

                      <div className="flex items-center gap-x-4">
                        <span className="font-medium font-dmMono">MIN</span>
                        <Image alt="MIN icon" height={30} src={minIcon} width={30} />
                      </div>
                    </div>
                  </div>
                </div>

                {inputError && <div className="text-sm text-red-500">{inputError}</div>}
                {apiError && <div className="text-sm text-red-500">{apiError.message}</div>}

                <Input
                  label="Enter your address"
                  placeholder="Enter your payment address"
                  value={userAddress}
                  onChange={handleAddressChange}
                />

                <div className="flex justify-between">
                  <Checkbox
                    checked={confirmNotUS}
                    label="I confirm I'm not a US citizen"
                    onChange={handleConfirmNotUSChange}
                  />

                  <Tooltip
                    arrow={false}
                    content="Residents of the United States of America are not permitted to purchase these tokens. All other buyers are advised to check the laws of their country before buying these utility tokens. Please stay compliant."
                    placement="right"
                    popperOptions={{
                      modifiers: [
                        {
                          name: 'flip',
                          options: {
                            fallbackPlacements: ['top-end'],
                          },
                        },
                        {
                          name: 'preventOverflow',
                          options: {
                            altAxis: true,
                            tether: false,
                          },
                        },
                      ],
                    }}
                  >
                    <div className="text-sm md:text-base text-primaryMain hover:cursor-default flex items-center">
                      What is this?
                    </div>
                  </Tooltip>
                </div>

                {ADAtoSend && amountADA && (
                  <div>
                    You need to send <strong>{ADAtoSend.toExact()} ADA</strong> to Minswap wallet to complete the
                    transaction (2 ADA is for minimum UTxO ADA and transaction fee).
                  </div>
                )}

                <div className="flex flex-col gap-y-2">
                  <Button
                    className="py-4 rounded-[14px]"
                    color="primary"
                    disabled={!confirmNotUS || !amountADA}
                    loading={isLoading}
                    size="lg"
                    onClick={handleSubmit}
                  >
                    Buy
                  </Button>

                  <a
                    className="text-sm md:text-base text-primaryMain"
                    href="https://medium.com/minswap"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Read Instruction
                  </a>
                </div>
              </div>
            )}

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
