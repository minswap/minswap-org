import { useQuery, UseQueryResult } from 'react-query';

import { getClient } from './client';

export type GetOrderResponse = {
  id: string;
  status: 'CREATED' | 'CANCELLED' | 'REFUNDED' | 'SOLD';
  txId: string;
};

type GetOrderReturns = Pick<UseQueryResult<GetOrderResponse, Error>, 'status' | 'error' | 'isLoading' | 'data'>;

export function useGetOrderQuery(orderId: string | undefined): GetOrderReturns {
  const { status, error, isLoading, data } = useQuery<GetOrderResponse, Error>({
    queryFn() {
      return getClient(`/public-sale/orders/${orderId}`, {
        method: 'GET',
      });
    },
    refetchInterval: 5000,
    enabled: Boolean(orderId),
  });

  return {
    status,
    error,
    isLoading,
    data,
  };
}
