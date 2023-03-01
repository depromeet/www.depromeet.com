import { ComponentPropsWithoutRef, forwardRef, Ref } from 'react';
import { css } from '@emotion/react';

import { colors, mediaQuery, radius } from '~/styles/constants';

interface Props extends ComponentPropsWithoutRef<'button'> {
  isActive?: boolean;
}

const Button = forwardRef(function Button(
  { children, isActive = false, ...rest }: Props,
  ref: Ref<HTMLButtonElement>
) {
  return (
    <button css={buttonCss(isActive)} ref={ref} {...rest}>
      {children}
    </button>
  );
});

export default Button;

const buttonCss = (isActive: boolean) => css`
  padding: 14px 28px;
  border-radius: ${radius.sm};
  background-color: ${colors.gray9};
  color: ${colors.gray4};
  font-size: 1.5rem;
  white-space: pre;

  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${isActive ? colors.primary : colors.gray8};
  }

  &:active {
    ${activeCss}
  }

  ${isActive && activeCss}

  ${mediaQuery('xs')} {
    padding: 8px 16px;
    border-radius: ${radius.xs};
    font-size: 14px;
  }
`;

const activeCss = css`
  color: ${colors.white};
  background-color: ${colors.primary};
`;
