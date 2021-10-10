import _Big from 'big.js';
import invariant from 'tiny-invariant';
import toFormat, { FormatOptions } from 'toformat';

import { Coin } from '.';
import { Fraction } from './fraction';
import { BigintIsh, Rounding } from './types';

const Big = toFormat(_Big);

export class Amount extends Fraction {
  public readonly coin: Coin;
  public readonly decimalScale: bigint;

  /**
   * Returns a new coin amount instance from the unitless amount of token, i.e. the raw amount
   * @param coin the coin in the amount
   * @param rawAmount the raw token or ether amount
   */
  public static fromRawAmount(coin: Coin, rawAmount: BigintIsh): Amount {
    return new Amount(coin, rawAmount);
  }

  /**
   * Construct a coin amount with a denominator that is not equal to 1
   * @param coin the coin
   * @param numerator the numerator of the fractional token amount
   * @param denominator the denominator of the fractional token amount
   */
  public static fromFractionalAmount(coin: Coin, numerator: BigintIsh, denominator: BigintIsh): Amount {
    return new Amount(coin, numerator, denominator);
  }

  protected constructor(coin: Coin, numerator: BigintIsh, denominator?: BigintIsh) {
    super(numerator, denominator);
    this.coin = coin;
    this.decimalScale = 10n ** BigInt(coin.decimals);
  }

  public add(other: Amount): Amount {
    invariant(this.coin.equals(other.coin), 'CURRENCY');
    const added = super.add(other);
    return Amount.fromFractionalAmount(this.coin, added.numerator, added.denominator);
  }

  public subtract(other: Amount): Amount {
    invariant(this.coin.equals(other.coin), 'CURRENCY');
    const subtracted = super.subtract(other);
    return Amount.fromFractionalAmount(this.coin, subtracted.numerator, subtracted.denominator);
  }

  public multiply(other: Fraction | BigintIsh): Amount {
    const multiplied = super.multiply(other);
    return Amount.fromFractionalAmount(this.coin, multiplied.numerator, multiplied.denominator);
  }

  public divide(other: Fraction | BigintIsh): Amount {
    const divided = super.divide(other);
    return Amount.fromFractionalAmount(this.coin, divided.numerator, divided.denominator);
  }

  public toSignificant(
    significantDigits = 6,
    format?: FormatOptions,
    rounding: Rounding = Rounding.ROUND_DOWN,
  ): string {
    return super.divide(this.decimalScale).toSignificant(significantDigits, format, rounding);
  }

  public toFixed(
    decimalPlaces: number = this.coin.decimals,
    format?: FormatOptions,
    rounding: Rounding = Rounding.ROUND_DOWN,
  ): string {
    invariant(decimalPlaces <= this.coin.decimals, 'DECIMALS');
    return super.divide(this.decimalScale).toFixed(decimalPlaces, format, rounding);
  }

  public toExact(format: FormatOptions = { groupSeparator: '' }): string {
    Big.DP = this.coin.decimals;
    return new Big(this.quotient.toString()).div(this.decimalScale.toString()).toFormat(format);
  }
}
