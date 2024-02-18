import { PropsWithChildren } from 'react';
import { ThemeProvider } from '@emotion/react';

import { theme } from '~/styles/theme';

export function Provider({ children }: PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
