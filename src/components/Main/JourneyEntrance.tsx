import { css } from '@emotion/react';

import { LinkButton } from './LinkButton';
import { Journey } from '../Journey';

export function JourneyEntrance() {
  return (
    <section css={layoutCss}>
      <Journey />
      <LinkButton color="black" text="ABOUT" href="/about" />
    </section>
  );
}

const layoutCss = css`
  padding: 80px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  background-color: white;
`;
