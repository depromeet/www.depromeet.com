import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { defaultFadeInVariants } from '~/constants/motions';
import { colors } from '~/styles/constants';

export default function HorizontalDivider() {
  return (
    <motion.hr
      css={horizontalDividerCss}
      variants={defaultFadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    />
  );
}

const horizontalDividerCss = css`
  border: thin solid ${colors.gray7};
`;
