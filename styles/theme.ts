import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    black: "#000000",
    white: "#ffffff",
    green: "#65CBA0",
    pink: "#CF88A0",
    teal: "#5CA2B1",
    primary: {
      100: "#F8F8FC",
      200: "#EBEAF6",
      300: "#A8A5CE",
    },
    blue: {
      200: "#E9F4FF",
    },
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
