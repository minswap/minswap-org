import { PUBLIC_SALE_API } from 'src/config';

type GetClientOptions = Omit<RequestInit, 'body'> & {
  body?: Record<string, unknown> | null;
};

export async function getClient<ResponseType>(path: string, options: GetClientOptions = {}): Promise<ResponseType> {
  const response = await fetch(new URL(path, PUBLIC_SALE_API).href, {
    ...options,
    body: JSON.stringify(options.body),
  });

  if (!response.ok) {
    let data = await response.text();
    try {
      const json = JSON.parse(data);
      data = json.message;
    } catch (_) {}
    throw new Error(data);
  }

  const data = await response.json();
  return data;
}
