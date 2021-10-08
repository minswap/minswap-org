export const CARDANO_NETWORK = process.env['NEXT_PUBLIC_CARDANO_NETWORK'] === 'mainnet' ? 'mainnet' : 'testnet';
export const PUBLIC_SALE_API = process.env['NEXT_PUBLIC_PUBLIC_SALE_API'] ?? 'https://api.minswap.org';
export const CARDANOSCAN_URL = process.env['CARDANOSCAN_URL'] ?? 'https://cardanoscan.io';
