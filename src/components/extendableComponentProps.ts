import React from 'react';

export type ExtendableComponentProps<C extends React.ElementType, P = {}> = Omit<
  React.ComponentPropsWithoutRef<C>,
  keyof P
> &
  P;

export type OverridableComponentProps<C extends React.ElementType, P = {}> = ExtendableComponentProps<C, P> & {
  component?: C;
};
