import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import {
  defaultFadeInUpVariants,
  defaultFadeInVariants,
  staggerHalf,
  staggerOne,
} from '~/constants/motions';
import { colors } from '~/styles/constants';

import OrganizerCard from './OrganizerCard';
import { ORGANIZERS } from './source';

export default function OrganizerSection() {
  return (
    <motion.section
      css={sectionCss}
      variants={staggerOne}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.h2 css={headingCss} variants={defaultFadeInUpVariants}>
        디프만 운영진을 소개할게요
      </motion.h2>
      <motion.p css={paragraphCss} variants={defaultFadeInVariants}>
        여러분들께 특별한 디프만 경험을 전달하기 위해
        <br />
        열심히 일하고 있는 운영진들을 소개할게요!
      </motion.p>

      <motion.div css={organizerHeadingWrapperCss} variants={staggerOne}>
        <motion.h3 css={organizerHeadingCss} variants={defaultFadeInVariants}>
          12기 운영진
        </motion.h3>
        <motion.small css={organizerDateCss} variants={defaultFadeInVariants}>
          <time dateTime="2022-07">2022.07</time> ~
        </motion.small>
      </motion.div>

      <motion.div css={organizerWrapperCss} variants={staggerHalf}>
        {ORGANIZERS.map(organizer => (
          <OrganizerCard key={organizer.name} {...organizer} />
        ))}
      </motion.div>
    </motion.section>
  );
}

const sectionCss = css`
  margin-top: 80px;
`;

const headingCss = css`
  font-size: 2rem;
  font-weight: 600;
  line-height: 140%;

  margin-bottom: 16px;
`;

const paragraphCss = css`
  font-size: 1rem;
  line-height: 150%;
  color: ${colors.gray3};

  margin-bottom: 60px;
`;

const organizerHeadingWrapperCss = css`
  display: flex;
  gap: 10px;
  align-items: flex-end;

  margin-bottom: 60px;
`;

const organizerHeadingCss = css`
  font-size: 1.625rem;
  font-weight: 700;
  line-height: 120%;
`;

const organizerDateCss = css`
  font-size: 1rem;
  line-height: 150%;
  color: ${colors.gray4};
`;

const organizerWrapperCss = css`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
`;
