import { ButtonHTMLAttributes } from 'react';
import { css, Interpolation, Theme } from '@emotion/react';

import { mediaQuery } from '~/styles/media';

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
  ${theme.typosV2.pretendard.semibold14};
  background-color: white;
  color: black;
  display: block;

  ${size === 'md' &&
  css`
    padding: 0 24px;
    height: 42px;

    ${mediaQuery('mobile')} {
      font-size: 14px;
      height: 34px;
    }
  `}

  ${size === 'lg' &&
  css`
    width: 100%;
    padding: 0 24px;
    height: 54px;

    ${mediaQuery('mobile')} {
      ${theme.typos.pretendard.body2};
      height: 42px;
    }
  `}

/* NOTE: 16기에서는 불필요해서 사용을 하지 않았으나, 추후 사용을 위해 주석을 해제해주세요
  &:hover {
    background-color: ${theme.colors.blue};
  }

  &:active {
    background-color: ${theme.colors.blue};
  } */

  &:disabled {
    background-color: ${theme.colors.lightGray};
    color: black;
    cursor: not-allowed;
  }
`;
