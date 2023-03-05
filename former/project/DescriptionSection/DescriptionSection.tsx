import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { defaultFadeInUpVariants } from '~/constants/motions';
import { colors } from '~/styles/constants';

export default function DescriptionSection() {
  return (
    <motion.header css={headerCss} initial="initial" animate="animate" exit="exit">
      <motion.h2 variants={defaultFadeInUpVariants}>
        디프만에서 탄생한 개성만점
        <br />
        서비스들을 소개할게요!
      </motion.h2>
    </motion.header>
  );
}

const headerCss = css`
  font-weight: 600;
  font-size: 2rem;
  line-height: 150%;
  color: ${colors.white};
  margin: 120px 0 60px;
`;
