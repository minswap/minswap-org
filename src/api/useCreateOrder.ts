import { useMutation, UseMutationResult } from 'react-query';

import { getClient } from './client';

export type CreateOrderParams = {
  paymentAddress: string;
  stakeAddress: string;
  amountADA: number;
  captchaToken: string;
};

type CreateOrderReturns = Pick<
  UseMutationResult<unknown, unknown, CreateOrderParams>,
  'status' | 'error' | 'mutate' | 'isLoading'
>;

export function useCreateOrderMutation(): CreateOrderReturns {
  const { status, error, mutate, isLoading } = useMutation<unknown, unknown, CreateOrderParams>({
    mutationFn(req) {
      return getClient('/public-sale/orders', {
        method: 'POST',
        body: req,
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
