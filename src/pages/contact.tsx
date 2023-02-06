import { css } from '@emotion/react';

import SEO from '~/components/common/SEO';
import ContactSection from '~/components/contact/ContactSection';
// import OrganizerSection from '~/components/contact/OrganizerSection';

export default function Contact() {
  return (
    <>
      <SEO title="디프만 - Contact" />
      <main css={wrapperCss}>
        <ContactSection />
        {/* <motion.hr
          css={hrCss}
          variants={defaultFadeInVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        /> */}
        {/* <OrganizerSection /> */}
      </main>
    </>
  );
}

// const hrCss = css`
//   width: 100%;
//   height: 1px;
//   color: ${colors.gray7};
// `;

const wrapperCss = css`
  padding-bottom: 200px;
`;
