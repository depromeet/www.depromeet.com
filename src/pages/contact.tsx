import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import ContactSection from '~/components/contact/ContactSection';
import OrganizerSection from '~/components/contact/OrganizerSection';
import { defaultFadeInVariants } from '~/constants/motions';
import { colors } from '~/styles/constants';

export default function Contact() {
  return (
    <main>
      <ContactSection />
      <motion.hr
        css={hrCss}
        variants={defaultFadeInVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      />
      <OrganizerSection />
    </main>
  );
}

const hrCss = css`
  width: 100%;
  height: 1px;
  color: ${colors.gray7};
`;