import { css } from '@emotion/react';

import HeaderSection from '~/components/about/HeaderSection';
import JobGroupSection from '~/components/about/JobGroupSection';
import MoreExperienceSection from '~/components/about/MoreExperienceSection';
import SessionSection from '~/components/about/SessionSection';
import SponsorSection from '~/components/about/SponsorSection';
import ApplySection from '~/components/common/ApplySection';
import { ArrowIcon } from '~/components/common/icons';
import SEO from '~/components/common/SEO';
import useMediaQuery from '~/hooks/use-media-query';
import { colors, mediaQuery } from '~/styles/constants';

export default function Interview() {
  const isMobile = useMediaQuery('xs');

  return (
    <>
      <SEO title="All about 디프만" />
      <main css={mainCss}>
        <HeaderSection />
        <ArrowIcon
          css={arrowIconCss}
          direction="down"
          width={isMobile ? 36 : 52}
          height={isMobile ? 36 : 52}
          color={colors.black}
        />
        <JobGroupSection />
        <SessionSection />
        <MoreExperienceSection />
        <SponsorSection />
        <ApplySection wrapperCss={applySectionMarginCss} />
      </main>
    </>
  );
}

const mainCss = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const arrowIconCss = css`
  align-self: center;
  margin-bottom: 134px;

  ${mediaQuery('xs')} {
    margin-bottom: 110px;
  }
`;

const applySectionMarginCss = css`
  margin-bottom: 240px;
`;
