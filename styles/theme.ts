import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  color: {
    gradient: 'linear-gradient(322.5deg, #00FF94 -17.98%, #0038FF 89.21%)',
    blue: '#001AFF',
    green: '#00FF94',
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  1440: customMediaQuery(1440),
  768: customMediaQuery(768),
  mobile: customMediaQuery(576),
};
