import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { css } from '@emotion/react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} css={buttonCss}>
      {children}
    </button>
  );
};

const buttonCss = css`
  padding: 12px 32px;
  font-size: 20px;
  height: 54px;
`;
