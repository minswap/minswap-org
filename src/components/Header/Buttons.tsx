import * as React from 'react';

import { Button } from '../Button';

export function Buttons() {
  return (
    <>
      <a href="https://docs.minswap.org/" rel="noreferrer" target="_blank">
        <Button className="h-full">Documentation</Button>
      </a>

      <a href="https://testnet.minswap.org/" rel="noreferrer" target="_blank">
        <Button className="h-full" color="primary">
          Testnet
        </Button>
      </a>
    </>
  );
}
