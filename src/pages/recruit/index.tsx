import { css } from '@emotion/react';

import ApplySection from '~/components/common/ApplySection';
import SEO from '~/components/common/SEO';
import FAQSection from '~/components/recruit/FAQSection';
import HeaderSection from '~/components/recruit/HeaderSection';
import JobGroupSection from '~/components/recruit/JobGroupSection';
import QualificationSection from '~/components/recruit/QualificationSection';
import ScheduleSection from '~/components/recruit/ScheduleSection';
import { mediaQuery } from '~/styles/constants';

export default function Recruit() {
  return (
    <>
      <SEO title="디프만 - Recruit" />
      <main css={mainCss}>
        <HeaderSection />
        <ScheduleSection />
        <QualificationSection />
        <JobGroupSection />
        <FAQSection />
        <ApplySection />
      </main>
    </>
  );
}

const mainCss = css`
  width: 100%;
  padding-bottom: 240px;

  ${mediaQuery('xs')} {
    padding-bottom: 150px;
  }
`;
