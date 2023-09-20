import { css, Theme } from '@emotion/react';

import { Journey } from '~/components/Journey';
import { RecruitEntrance } from '~/components/RecruitEntrance';
import { SEO } from '~/components/SEO';
import { TimerContainer } from '~/components/TimerContainer';
import { mediaQuery } from '~/styles/media';

export default function Root() {
  return (
    <>
      <SEO />
      <main css={layoutCss}>
        <TimerContainer />
        <div css={contentCss}>
          <Journey /> 
          <RecruitEntrance />
        </div>
      </main>
    </>
  );
}

const layoutCss = (theme: Theme) => css`
  background-color: ${theme.colors.black800};
`;

const contentCss = css`
  & > section {
    margin-bottom: 200px;
  }

  ${mediaQuery('mobile')} {
    & > section {
      margin-bottom: 120px;
    }
  }
`;
