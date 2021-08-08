import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  color: {
    orange: '#FF571C',
    black: '#000',
    blue: '#34A7FC',
    green: '#38E3A8',
    hover_green: '#31B98A',
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
