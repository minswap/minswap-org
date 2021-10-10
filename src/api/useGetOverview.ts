import { useQuery, UseQueryResult } from 'react-query';

import { getClient } from './client';

type Amount = {
  amount_ada: number;
  amount_min: number;
};

export type GetOrderResponse = {
  initial?: Amount;
  available?: Amount;
};

type GetOrderReturns = Pick<UseQueryResult<GetOrderResponse, Error>, 'status' | 'error' | 'isLoading' | 'data'>;

export function useGetOverview(enabled: boolean): GetOrderReturns {
  const { status, error, isLoading, data } = useQuery<GetOrderResponse, Error>({
    queryFn() {
      return getClient(`/public-sale/overview`, {
        method: 'GET',
      });
    },
    refetchInterval: 5000,
    enabled,
  });

  return {
    status,
    error,
    isLoading,
    data,
  };
}
