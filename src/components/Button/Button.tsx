import { ButtonHTMLAttributes } from 'react';
import { css, Interpolation, Theme } from '@emotion/react';

type ButtonSize = 'md' | 'lg';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  overrideCss?: Interpolation<Theme>;
}

export function Button({ children, size = 'md', overrideCss, ...props }: ButtonProps) {
  return (
    <button {...props} css={theme => [buttonCss(theme, size), overrideCss]}>
      {children}
    </button>
  );
}

const buttonCss = (theme: Theme, size: ButtonSize) => css`
  ${theme.typos.pretendard.body1};
  background-color: ${theme.colors.yellow500};
  color: ${theme.colors.black800};
  display: block;

  ${size === 'md' &&
  css`
    padding: 0 24px;
    height: 42px;

    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      font-size: 14px;
      height: 34px;
    }
  `}

  ${size === 'lg' &&
  css`
    width: 100%;
    padding: 0 24px;
    height: 54px;

    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      ${theme.typos.pretendard.body2};
      height: 42px;
    }
  `}


  &:hover {
    background-color: ${theme.colors.yellow400};
  }

  &:active {
    background-color: ${theme.colors.yellow300};
  }

  &:disabled {
    background-color: ${theme.colors.gray300};
    color: ${theme.colors.gray100};
  }
`;
