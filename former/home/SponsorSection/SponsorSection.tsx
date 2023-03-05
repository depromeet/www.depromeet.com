import Image from 'next/image';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { defaultFadeInUpVariants, defaultFadeInVariants, staggerHalf } from '~/constants/motions';
import { mediaQuery } from '~/styles/constants';

const SPONSOR_IMAGE_BASE = '/images/sponsor';

const SPONSOR_IMAGES = [
  { name: 'aws', src: `${SPONSOR_IMAGE_BASE}/aws.svg`, width: 101, height: 62 },
  { name: 'notefolio', src: `${SPONSOR_IMAGE_BASE}/notefolio.svg`, width: 211, height: 35 },
  { name: 'surfit', src: `${SPONSOR_IMAGE_BASE}/surfit.svg`, width: 153, height: 62 },
  { name: 'inflearn', src: `${SPONSOR_IMAGE_BASE}/inflearn.svg`, width: 194, height: 36 },
  { name: 'dcamp', src: `${SPONSOR_IMAGE_BASE}/dcamp.svg`, width: 172, height: 40 },
  { name: 'openup', src: `${SPONSOR_IMAGE_BASE}/openup.png`, width: 170, height: 78 },
] as const;

export default function SponsorSection() {
  return (
    <motion.section
      css={sectionCss}
      variants={staggerHalf}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ amount: 0.6, once: true }}
    >
      <motion.h2 css={headingCss} variants={defaultFadeInVariants}>
        디프만과 함께하는
        <br />
        후원사를 소개할게요
      </motion.h2>
      <motion.div css={imageWrapperCss} variants={staggerHalf}>
        {SPONSOR_IMAGES.map(({ name, src, width, height }) => (
          <motion.div key={name} variants={defaultFadeInUpVariants}>
            <Image
              src={src}
              alt={name}
              width={width}
              height={height}
              objectFit="contain"
              placeholder="blur"
              blurDataURL={src}
              unoptimized
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

const sectionCss = css`
  margin-top: 220px;
  width: 100%;

  ${mediaQuery('xs')} {
    margin-top: 160px;
  }
`;

const headingCss = css`
  font-weight: 500;
  font-size: 2.75rem;
  line-height: 150%;
  text-align: center;

  ${mediaQuery('xs')} {
    font-size: 24px;
  }
`;

const imageWrapperCss = css`
  margin-top: 90px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 124px;
  row-gap: 55px;
  padding: 0 100px;

  ${mediaQuery('xs')} {
    margin-top: 30px;

    flex-direction: column;
    gap: 60px;
  }
`;
