import React from 'react';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { defaultFadeInUpVariants } from '~/constants/motions';
import { defaultFadeInSlideToLeftVariants } from '~/constants/motions/motions';
import { colors, mediaQuery } from '~/styles/constants';

const memberTextFilter = (members: string[]) => {
  return members.reduce((result, member) => {
    return `${result}, ${member}`;
  });
};

interface Props {
  job: 'Design' | 'FrontEnd' | 'Backend';
  member: string[];
}

export default function JobContainer({ job, member }: Props) {
  return (
    <motion.div css={JobContainerCss} variants={defaultFadeInUpVariants}>
      <motion.div css={jobCss} variants={defaultFadeInSlideToLeftVariants}>
        {job}
      </motion.div>
      <motion.div css={memberCss} variants={defaultFadeInSlideToLeftVariants}>
        {memberTextFilter(member)}
      </motion.div>
    </motion.div>
  );
}

const JobContainerCss = css`
  display: flex;
  margin-bottom: 12px;
`;

const jobCss = css`
  min-width: 105px;
  font-weight: 400;
  color: ${colors.gray2};
`;

const memberCss = css`
  min-width: 200px;
  font-weight: 500;
  color: ${colors.gray4};
  white-space: normal;

  ${mediaQuery('xs')} {
    white-space: normal;
  }
`;
