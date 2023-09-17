import { PropsWithChildren } from 'react';

interface PositionsWrapperProps {}

export function PositionsWrapper({ children }: PropsWithChildren<PositionsWrapperProps>) {
  return <div>{children}</div>;
}
