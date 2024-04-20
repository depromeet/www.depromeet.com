import { css, SerializedStyles, Theme } from '@emotion/react';

import { LinkButton } from './LinkButton';
import { Journey } from '../Journey';

interface JorneyEntranceProps {
  hasLinkButton: boolean;
  style?: SerializedStyles;
}

export function JourneyEntrance({ hasLinkButton, style }: JorneyEntranceProps) {
  return (
    <section css={[layoutCss, style]}>
      <Journey />
      {hasLinkButton && <LinkButton color="black" text="ABOUT" href="/about" />}
    </section>
  );
}

const layoutCss = (theme: Theme) => css`
  padding: 120px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  background-color: ${theme.colors.lightGray};
`;
