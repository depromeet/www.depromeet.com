import { css } from '@emotion/react';

import useMediaQuery from '~/hooks/use-media-query';
import { colors, mediaQuery } from '~/styles/constants';
import { layoutCss, section36HeadingCss, sectionSmallCss } from '~/styles/css';

import DesktopSessions from './DesktopSessions';
import MobileSessions from './MobileSessions';

export default function SessionSection() {
  const isMobile = useMediaQuery('xs');

  return (
    <section css={sectionCss}>
      <article css={headingArticleCss}>
        <small css={smallCss}>SESSION</small>
        <h2 css={headingCss}>
          체계적이고 효율적으로 굴러가는
          <br />
          디프만 정규세션
        </h2>

        <span css={asteriskCss}>*</span>
        <p css={paragraphCss}>
          디프만 13기는 매주 토요일, 총 17주간 진행되며,
          <br />
          정규세션 이외에도 팀 활동은 자율적으로 진행합니다
        </p>
      </article>

      {isMobile ? <MobileSessions /> : <DesktopSessions />}
    </section>
  );
}

const sectionCss = css`
  width: 100%;

  margin-bottom: 240px;

  ${mediaQuery('xs')} {
    margin-bottom: 100px;
  }
`;

const headingArticleCss = css`
  ${layoutCss};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  margin-bottom: 83px;

  ${mediaQuery('xs')} {
    margin-bottom: 60px;
  }
`;

const smallCss = css`
  ${sectionSmallCss};

  margin-bottom: 10px;
`;

const headingCss = css`
  ${section36HeadingCss};

  margin-bottom: 40px;

  ${mediaQuery('xs')} {
    margin-bottom: 20px;
  }
`;

const asteriskCss = css`
  font-weight: 500;
  font-size: 26px;
  line-height: 31px;
  color: ${colors.point};
`;

const paragraphCss = css`
  font-weight: 500;
  font-size: 1rem;
  line-height: 140%;
  color: ${colors.gray600};
`;
