import { useMutation, UseMutationResult } from 'react-query';

import { getClient } from './client';

export type CreateOrderParams = {
  paymentAddr: string;
  amountADA: number;
  captchaResponse: string;
};

export type CreateOrderResponse = {
  id: string;
};

type CreateOrderReturns = Pick<
  UseMutationResult<CreateOrderResponse, Error, CreateOrderParams>,
  'status' | 'error' | 'mutateAsync' | 'isLoading' | 'data'
>;

export function useCreateOrderMutation(): CreateOrderReturns {
  const { status, error, mutateAsync, isLoading, data } = useMutation<CreateOrderResponse, Error, CreateOrderParams>({
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
    mutateAsync,
    isLoading,
    data,
  };
}
