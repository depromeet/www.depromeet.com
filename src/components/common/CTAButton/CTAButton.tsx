import { ComponentPropsWithoutRef, forwardRef, Ref } from 'react';

import { ctaCss } from '~/styles/css/cta';

interface Props extends ComponentPropsWithoutRef<'button'> {}

const CTAButton = forwardRef(function CTAButton(
  { children, ...rest }: Props,
  ref: Ref<HTMLButtonElement>
) {
  return (
    <button css={ctaCss} ref={ref} {...rest}>
      {children}
    </button>
  );
});

export default CTAButton;
