const paymentAddressRegexMainnet = new RegExp('^addr[a-z0-9]{99}$');
const paymentAddressRegexTestnet = new RegExp('^addr_test[a-z0-9]{99}$');

export function isValidPaymentAddress(addr: string, network: 'mainnet' | 'testnet'): boolean {
  return network ? paymentAddressRegexMainnet.test(addr) : paymentAddressRegexTestnet.test(addr);
}
