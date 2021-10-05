import invariant from 'tiny-invariant';

import { isValidSHA224Digest } from './utils';

/**
 * According to https://github.com/cardano-foundation/cardano-token-registry
 */
interface CoinMetadata {
  name?: string;
  description?: string;
  ticker?: string;
  url?: string;
  logo?: StaticImageData;
}

/**
 * Represents an native token with unique pair (currencySymbol, tokenName) and some metadata.
 */
export class Coin {
  public readonly currencySymbol: string;
  public readonly tokenName: string;
  public readonly decimals: number;
  public readonly metadata?: CoinMetadata;

  public constructor(currencySymbol: string, tokenName: string, decimals: number, metadata?: CoinMetadata) {
    invariant(decimals >= 0 && decimals < 255 && Number.isInteger(decimals), 'DECIMALS');
    invariant((currencySymbol === '' && tokenName === '') || isValidSHA224Digest(currencySymbol), 'CURRENCY_SYMBOL');
    this.currencySymbol = currencySymbol;
    this.tokenName = tokenName;
    this.decimals = decimals;
    this.metadata = metadata;
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same currencySymbol and tokenName.
   * @param other other token to compare
   */
  public equals(other?: Coin): boolean {
    if (other === undefined) {
      return false;
    }
    return this.currencySymbol === other.currencySymbol && this.tokenName === other.tokenName;
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   */
  public sortsBefore(other: Coin): boolean {
    if (this.currencySymbol === other.currencySymbol) {
      return this.tokenName < other.tokenName;
    }
    return this.currencySymbol < other.currencySymbol;
  }
}
