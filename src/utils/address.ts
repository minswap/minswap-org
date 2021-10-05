import { CARDANO_NETWORK } from 'src/config';

import { RustModule } from '../rust-module';

const paymentAddressRegexMainnet = new RegExp('^addr[a-z0-9]{99}$');
const paymentAddressRegexTestnet = new RegExp('^addr_test[a-z0-9]{99}$');

export function isValidPaymentAddress(addr: string): boolean {
  return CARDANO_NETWORK === 'mainnet' ? paymentAddressRegexMainnet.test(addr) : paymentAddressRegexTestnet.test(addr);
}

export async function paymentAddrToStakeAddr(paymentAddrBech32: string): Promise<string> {
  const Cardano = await RustModule.CardanoWasm();
  const paymentAddress = Cardano.BaseAddress.from_address(Cardano.Address.from_bech32(paymentAddrBech32));
  if (paymentAddress === undefined) {
    throw new Error(`Fail to parse bech32 base address: ${paymentAddrBech32}`);
  }
  const stakeKey = paymentAddress.stake_cred();
  const stakeAddress = Cardano.RewardAddress.new(Cardano.NetworkInfo.mainnet().network_id(), stakeKey)
    .to_address()
    .to_bech32();

  paymentAddress.free();
  stakeKey.free();

  return stakeAddress;
}
