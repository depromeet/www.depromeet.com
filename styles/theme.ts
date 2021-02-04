import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    black: "#000000",
    white: "#ffffff",
  },
};

const customMediaQuery = (maxWidth: number): string => {
  return `@media (max-width: ${maxWidth}px)`;
};

export const media = {
  custom: customMediaQuery,
  1440: customMediaQuery(1440),
  768: customMediaQuery(768),
  phone: customMediaQuery(576),
};
