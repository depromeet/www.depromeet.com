import { css } from '@emotion/react';

import HeaderSection from '~/components/about/HeaderSection';
import JobGroupSection from '~/components/about/JobGroupSection';
import MoreExperienceSection from '~/components/about/MoreExperienceSection';
import SessionSection from '~/components/about/SessionSection';
import SponsorSection from '~/components/about/SponsorSection';
import ApplySection from '~/components/common/ApplySection';
import { ArrowIcon } from '~/components/common/icons';
import SEO from '~/components/common/SEO';
import { colors } from '~/styles/constants';

export default function Interview() {
  return (
    <>
      <SEO title="about 디프만" />
      <main css={mainCss}>
        <HeaderSection />
        <ArrowIcon
          css={arrowIconCss}
          direction="down"
          width={52}
          height={52}
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
`;

const arrowIconCss = css`
  align-self: center;
  margin-bottom: 134px;
`;

const applySectionMarginCss = css`
  margin-bottom: 240px;
`;
