import { css } from '@emotion/react';

import SEO from '~/components/common/SEO';
import ChannelSection from '~/components/contact/ChannelSection';

export default function Contact() {
  return (
    <>
      <SEO title="디프만 - Contact" />
      <main css={mainCss}>
        <ChannelSection />
      </main>
    </>
  );
}

const mainCss = css`
  width: 100%;
  overflow: hidden;
`;
