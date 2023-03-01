import React from 'react';
import dynamic from 'next/dynamic';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { projects } from '~/components/project/constants';
import { defaultFadeInUpVariants, staggerOne } from '~/constants/motions';
import { mediaQuery } from '~/styles/constants';

import HorizontalDivider from '../HorizontalDivider';

const AnotherProjectContainer = dynamic(() => import('./AnotherProjectContainer'), { ssr: false });

export default function AnotherProjectSection() {
  return (
    <>
      <div css={dividerCss}>
        <HorizontalDivider />
      </div>
      <motion.div
        css={sectionCss}
        variants={staggerOne}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div css={anotherProjectCss} variants={defaultFadeInUpVariants}>
          다른 프로젝트
        </motion.div>
        <AnotherProjectContainer
          projects={projects.sort(() => Math.random() - Math.random()).slice(0, 4)}
        />
      </motion.div>
    </>
  );
}

const dividerCss = css`
  ${mediaQuery('xs')} {
    margin: 0 20px;
  }
`;

const sectionCss = css`
  margin: 60px 0 120px;

  ${mediaQuery('xs')} {
    margin: 40px 20px 120px;
  }
`;

const anotherProjectCss = css`
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 40px;

  ${mediaQuery('xs')} {
    text-align: left;
    margin-bottom: 30px;
  }
`;
