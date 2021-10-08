import * as React from 'react';
import QRCodeStyling from 'qr-code-styling';

import minIcon from 'src/assets/icons/minswap.png';

const qrCode = new QRCodeStyling({
  width: 150,
  height: 150,
  // image: '/src/assets/icons/minswap.png',
  dotsOptions: {
    color: '#0f1743',
    type: 'dots',
  },
  imageOptions: {
    crossOrigin: 'anonymous',
    margin: 4,
  },
});

interface Props {
  paymentAddress: string;
}

export function QrCode({ paymentAddress }: Props): React.ReactElement<Props> {
  const ref = React.useRef(null);

  React.useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  React.useEffect(() => {
    qrCode.update({
      data: paymentAddress,
    });
  }, [paymentAddress]);

  return <div ref={ref} />;
}
