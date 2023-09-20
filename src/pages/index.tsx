import { css, Theme } from '@emotion/react';

import { Journey } from '~/components/Journey';
import { SEO } from '~/components/SEO';
import { TimerContainer } from '~/components/TimerContainer';

export default function Root() {
  return (
    <>
      <SEO />
      <main css={layoutCss}>
        <TimerContainer />
        <div css={contentCss}>
          <Journey />
        </div>
      </main>
    </>
  );
}

const layoutCss = (theme: Theme) => css`
  background-color: ${theme.colors.black800};
`;

const contentCss = css`
  & > * {
    margin-bottom: 200px;
  }
`;
