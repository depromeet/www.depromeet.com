import { css } from '@emotion/react';

import { ArrowIcon } from '~/components/common/icons';
import SEO from '~/components/common/SEO';
import ChannelSection from '~/components/contact/ChannelSection';
import useMediaQuery from '~/hooks/use-media-query';
import { colors, mediaQuery } from '~/styles/constants';

export default function Contact() {
  const isMobile = useMediaQuery('xs');

  return (
    <>
      <SEO title="디프만 - Contact" />
      <main css={mainCss}>
        <ChannelSection />
        <ArrowIcon
          direction="down"
          color={colors.black}
          width={isMobile ? 36 : 52}
          height={isMobile ? 36 : 52}
          css={arrowIconCss}
        />
      </main>
    </>
  );
}

const mainCss = css`
  width: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const arrowIconCss = css`
  margin-bottom: 130px;

  ${mediaQuery('xs')} {
    margin-bottom: 92px;
  }
`;
