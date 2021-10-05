export const isValidSHA224Digest = (s: string): boolean => /^[a-f0-9]{56}$/gi.test(s);
