import * as React from 'react';
import QRCodeStyling from 'qr-code-styling';

const qrCode = new QRCodeStyling({
  width: 150,
  height: 150,
  image: '/minswap.png',
  dotsOptions: {
    color: '#0f1743',
    type: 'dots',
  },
  imageOptions: {
    hideBackgroundDots: false,
  },
});

interface Props {
  paymentAddress: string;
}

export function QrCode({ paymentAddress }: Props): React.ReactElement<Props> {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current ?? undefined);
    }
  }, [ref]);

  React.useEffect(() => {
    qrCode.update({
      data: paymentAddress,
    });
  }, [paymentAddress]);

  return <div ref={ref} />;
}
