import { useMutation, UseMutationResult } from 'react-query';

import { getClient } from './client';

export type CreateOrderParams = {
  orderId: string;
};

type CreateOrderReturns = Pick<
  UseMutationResult<unknown, unknown, CreateOrderParams>,
  'status' | 'error' | 'mutate' | 'isLoading'
>;

export function useCreateOrderMutation(): CreateOrderReturns {
  const { status, error, mutate, isLoading } = useMutation<unknown, unknown, CreateOrderParams>({
    mutationFn(req) {
      return getClient(`/public-sale/orders/${req.orderId}`, {
        method: 'PATCH',
      });
    },
  });

  return {
    status,
    error,
    mutate,
    isLoading,
  };
}
