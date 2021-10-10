import * as React from 'react';
import Image from 'next/image';
import { compareAsc, intervalToDuration, set } from 'date-fns';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import backgroundImage from 'src/assets/marketplace/background@2x.png';
import minswapLoading from 'src/assets/minswap-loading.svg';

import { Header } from '../components';

const TIME_END = '00:00:00';

function getCountdown(start: Date, now: Date) {
  if (compareAsc(start, now) === -1) {
    return TIME_END;
  }

  const duration = intervalToDuration({
    start: start,
    end: now,
  });

  const hoursString =
    typeof duration.hours !== 'undefined' ? (duration.hours >= 10 ? duration.hours : `0${duration.hours}`) : '00';
  const minutesString =
    typeof duration.minutes !== 'undefined'
      ? duration.minutes >= 10
        ? duration.minutes
        : `0${duration.minutes}`
      : '00';
  const secondsString =
    typeof duration.seconds !== 'undefined'
      ? duration.seconds >= 10
        ? duration.seconds
        : `0${duration.seconds}`
      : '00';

  return `${hoursString}:${minutesString}:${secondsString}`;
}

export default function MarketPalcePage() {
  const START_TIME = set(new Date(), {
    hours: 20,
    minutes: 0,
    seconds: 0,
  });
  const [countDown, setCountDown] = React.useState(() => getCountdown(START_TIME, new Date()));
  const intervalRef = React.useRef<NodeJS.Timer | null>(null);

  React.useEffect(() => {
    if (countDown === TIME_END && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [countDown]);

  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      const newCountDown = getCountdown(START_TIME, new Date());
      setCountDown(newCountDown);
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [START_TIME]);

  return (
    <GoogleReCaptchaProvider language="en" reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}>
      {/* {countDown !== TIME_END ? ( */}
      <>
        <Header />
        <div className="fixed inset-0 -z-1">
          <Image alt="Background" layout="fill" objectFit="cover" quality={80} src={backgroundImage} priority />
        </div>

        <div className="flex flex-col items-center justify-center mt-32 gap-y-4">
          <Image alt="Countdown" className="animate-spin" height={200} src={minswapLoading} width={200} />
          <div className="text-2xl font-bold">Coming soon</div>
          {/* <div className="text-4xl font-bold text-primaryMain font-dmMono">{countDown}</div> */}
        </div>
      </>
      {/*) : (
        <>
          <div className="fixed inset-0 -z-1">
            <Image alt="Background" layout="fill" objectFit="cover" quality={80} src={backgroundImage} priority />
          </div>
          <Marketplace />
        </>
      )} */}
    </GoogleReCaptchaProvider>
  );
}
