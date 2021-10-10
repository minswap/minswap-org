import { useMutation, UseMutationResult } from 'react-query';

import { getClient } from './client';

export type CancelOrderParams = {
  orderId: string;
  captchaResponse: string;
};

type CancelOrderReturns = Pick<
  UseMutationResult<unknown, Error, CancelOrderParams>,
  'status' | 'error' | 'mutateAsync' | 'isLoading'
>;

export function useCancelOrderMutation(): CancelOrderReturns {
  const { status, error, mutateAsync, isLoading } = useMutation<unknown, Error, CancelOrderParams>({
    mutationFn(req) {
      return getClient(`/public-sale/orders/${req.orderId}`, {
        method: 'DELETE',
        body: req,
      });
    },
  });

  return {
    status,
    error,
    mutateAsync,
    isLoading,
  };
}
