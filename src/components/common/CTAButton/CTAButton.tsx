import { ComponentPropsWithoutRef, forwardRef, Ref } from 'react';
import { css } from '@emotion/react';

import { colors, mediaQuery, radius } from '~/styles/constants';

interface Props extends ComponentPropsWithoutRef<'button'> {}

const CTAButton = forwardRef(function CTAButton(
  { children, ...rest }: Props,
  ref: Ref<HTMLButtonElement>
) {
  return (
    <button css={buttonCss} ref={ref} {...rest}>
      {children}
    </button>
  );
});

export default CTAButton;

const buttonCss = css`
  padding: 26px 80px;
  font-size: 1.5rem;
  font-weight: 600;
  background-color: ${colors.primary};
  color: ${colors.white};
  border-radius: ${radius.sm};

  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.primaryDark};
  }

  &:disabled {
    background-color: ${colors.gray6};
    color: ${colors.gray9};
  }

  ${mediaQuery('xs')} {
    padding: 16px 30px;
    font-size: 16px;
  }
`;
