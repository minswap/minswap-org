declare module 'toformat' {
  export default any;

  export interface FormatOptions {
    decimalSeparator?: string;
    groupSeparator?: string;
    groupSize?: number;
    secondaryGroupSize?: number;
    fractionGroupSeparator?: string;
    fractionGroupSize?: number;
  }
}
