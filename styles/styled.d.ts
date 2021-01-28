import "styled-components";

declare module "styled-components" {
  export interface DefaultThene {
    color: {
      black: "#000000";
      white: "#ffffff";
      green: "#65CBA0";
      pink: "#CF88A0";
      teal: "#5CA2B1";
      primary: {
        100: "#F8F8FC";
        200: "#EBEAF6";
      };
      blue: {
        200: "#E9F4FF";
      };
    };
  }
}
