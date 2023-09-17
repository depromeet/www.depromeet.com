import { css, Theme } from '@emotion/react';

import { SEO } from '~/components/SEO';
import { TimerContainer } from '~/components/TimerContainer';

export default function Root() {
  return (
    <>
      <SEO />
      <main css={layoutCss}>
        <TimerContainer />
      </main>
    </>
  );
}

const layoutCss = (theme: Theme) => css`
  background-color: ${theme.colors.black800};
`;
