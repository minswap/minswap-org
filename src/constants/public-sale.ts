import { Coin } from 'src/models';

export const MINIMUM_ADA = 100_000_000n;
export const MAXIMUM_ADA = 4_000_000_000n;
export const TRANSACTION_FEE = 2_000_000n;
export const MIN_PER_ADA = 40n;
export const ORDER_DEADLINE_SECONDS = 60 * 30;
export const SELLER_ADDRESS =
  'addr_test1qqma4xe6h26eur5xq03qtyzp4dzh73yhayve0p6denxcf04fzg3f8vyy5rra0x6v6xlcpy73plrjczt68cksg7d9t0xs2ucrrw';
export const MIN = new Coin('29d222ce763455e3d7a09a665ce554f00ac89d2e99a1a83d267170c6', 'MIN', 6);
