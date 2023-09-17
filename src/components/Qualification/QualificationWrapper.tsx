import { PropsWithChildren } from 'react';

interface QualificationWrapperProps {}

export function QualificationWrapper({ children }: PropsWithChildren<QualificationWrapperProps>) {
  return <div>{children}</div>;
}
