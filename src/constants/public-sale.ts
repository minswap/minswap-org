import { Coin } from 'src/models';

export const MINIMUM_ADA = 100_000_000n;
export const MAXIMUM_ADA = 2_000_000_000n;
export const TRANSACTION_FEE = 2_000_000n;
export const MIN_PER_ADA = 40n;
export const ORDER_DEADLINE_SECONDS = 60 * 30;
export const SELLER_ADDRESS =
  'addr_test1qquazwmva2j04eh5g603u7n4ztv9tp7l99t6v7zk6hn77hrm6m7xe8g3yylksua66hdvfut677jh5nyahtr6els5ym0sl4pgjs';
export const MIN = new Coin('497a96fc6f8ce225dc5ecaa07b48fe2f10174a49f908fa4d986c1d9c', 'tMIN', 6);
