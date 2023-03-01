import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { defaultFadeInVariants, staggerHalf } from '~/constants/motions';
import { colors, mediaQuery } from '~/styles/constants';

export default function ApplySection() {
  return (
    <motion.section
      css={sectionCss}
      variants={staggerHalf}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ amount: 0.6, once: true }}
    >
      <motion.span css={spanCss} variants={defaultFadeInVariants}>
        알림 신청하고 이메일로 간편히 받아보세요
      </motion.span>

      <motion.h2 css={headingCss} variants={defaultFadeInVariants}>
        디프만 13기 언제 시작하나..
        <br />
        오매불망 기다리고만 있었다면?
      </motion.h2>

      {/* <Link href="/recruit" passHref>
        <motion.a variants={defaultFadeInScaleVariants}>
          <CTAButton disabled={!isInProgress()}>
            {isInProgress() ? '지금 지원하기' : '모집 기간이 아닙니다.'}
          </CTAButton>
        </motion.a>
      </Link> */}
    </motion.section>
  );
}

const sectionCss = css`
  margin-top: 220px;
  margin-bottom: 120px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const spanCss = css`
  display: block;
  font-size: 2rem;
  line-height: 110%;
  color: ${colors.gray4};
  text-align: center;

  margin-bottom: 12px;

  ${mediaQuery('xs')} {
    font-size: 16px;
    line-height: 150%;

    margin-bottom: 8px;
  }
`;

const headingCss = css`
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 110%;
  color: ${colors.white};
  text-align: center;

  margin-bottom: 60px;

  ${mediaQuery('xs')} {
    font-size: 24px;
    line-height: 150%;

    margin-bottom: 30px;
  }
`;
