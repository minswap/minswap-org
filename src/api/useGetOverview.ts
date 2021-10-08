import { useQuery, UseQueryResult } from 'react-query';

import { getClient } from './client';

type Amount = {
  amount_ada: number;
  amount_min: number;
};

export type GetOrderResponse = {
  initial?: Amount;
  sold?: Amount;
};

type GetOrderReturns = Pick<UseQueryResult<GetOrderResponse, Error>, 'status' | 'error' | 'isLoading' | 'data'>;

export function useGetOverview(): GetOrderReturns {
  const { status, error, isLoading, data } = useQuery<GetOrderResponse, Error>({
    queryFn() {
      return getClient(`/public-sale/overview`, {
        method: 'GET',
      });
    },
    refetchInterval: 5000,
  });

  return {
    status,
    error,
    isLoading,
    data,
  };
}
