import { css } from '@emotion/react';

import ApplySection from '~/components/common/ApplySection';
import SEO from '~/components/common/SEO';
import HeaderSection from '~/components/home/HeaderSection';
import IntroductionSection from '~/components/home/IntroductionSection';
import { mediaQuery } from '~/styles/constants';

export default function Root() {
  return (
    <>
      <SEO />
      <main>
        <HeaderSection />
        <IntroductionSection />
        <ApplySection wrapperCss={applySectionMarginCss} />
      </main>
    </>
  );
}

const applySectionMarginCss = css`
  margin-bottom: 240px;

  ${mediaQuery('xs')} {
    margin-bottom: 150px;
  }
`;
