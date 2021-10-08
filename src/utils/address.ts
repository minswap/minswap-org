import { CARDANO_NETWORK } from 'src/config';

const paymentAddressRegexMainnet = new RegExp('^addr[a-z0-9]{99}$');
const paymentAddressRegexTestnet = new RegExp('^addr_test[a-z0-9]{99}$');

export function isValidPaymentAddress(addr: string): boolean {
  return CARDANO_NETWORK === 'mainnet' ? paymentAddressRegexMainnet.test(addr) : paymentAddressRegexTestnet.test(addr);
}
