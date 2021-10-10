import { Logger } from '@ethersproject/logger';
import { parseUnits } from '@ethersproject/units';

import { Amount, Coin } from 'src/models';

export function tryParseUnit(value?: string, coin?: Coin): bigint | undefined {
  if (!value || !coin) {
    return undefined;
  }
  try {
    const typedValueParsed = parseUnits(value, coin.decimals).toString();
    if (typedValueParsed !== '0') {
      return BigInt(typedValueParsed);
    }
  } catch (error) {
    // should fail if the user specifies too many decimal places of precision (or maybe exceed max uint?)
    throw error;
  }
  // necessary for all paths to return a value
  return undefined;
}

// try to parse a user entered amount for a given token
export function tryParseAmount(value?: string, coin?: Coin): Amount | undefined {
  if (!value || !coin) {
    return undefined;
  }
  const amt = tryParseUnit(value, coin);
  if (amt === undefined) {
    return undefined;
  }
  return Amount.fromRawAmount(coin, amt);
}

export function isTooManyDecimals(value?: string, coin?: Coin): boolean {
  if (!value || !coin) {
    return false;
  }
  try {
    tryParseUnit(value, coin);
  } catch (error: any) {
    if (error.code === Logger.errors.NUMERIC_FAULT) {
      return true;
    }
    // unexpected error
    throw error;
  }
  return false;
}
