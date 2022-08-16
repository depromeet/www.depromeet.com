import Link from 'next/link';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { DEPROMEET_MEDIUM } from '~/constants/common';
import { defaultFadeInUpVariants, defaultFadeInVariants, staggerOne } from '~/constants/motions';
import { colors, radius } from '~/styles/constants';

export default function MoreInfoSection() {
  return (
    <motion.section
      css={sectionCss}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ amount: 0.6 }}
    >
      <motion.h2 css={headingCss} variants={defaultFadeInVariants}>
        디프만에 대해서
        <br />더 자세히 알고 싶다면?
      </motion.h2>

      <motion.div css={articleWrapperCss} variants={staggerOne}>
        <LinkArticle
          href={DEPROMEET_MEDIUM}
          heading="활동 내역"
          description="결과만큼 과정도 중요한 디프만의 활동 내역"
        />
        <LinkArticle
          href="/interview"
          heading="멤버 인터뷰"
          description="디프만 11기 멤버가 말해주는 디프만"
        />
        <LinkArticle
          href="/project"
          heading="프로젝트"
          description="디프만에서 론칭된 개성있는 프로젝트"
        />
      </motion.div>
    </motion.section>
  );
}

const sectionCss = css`
  margin-top: 220px;
`;

const headingCss = css`
  text-align: center;
  font-size: 2.75rem;
  line-height: 150%;

  margin-bottom: 50px;
`;

const articleWrapperCss = css`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 2.625rem;
`;

interface LinkArticleProps {
  href: string;
  // TODO: 이미지 추가
  heading: string;
  description: string;
}

function LinkArticle({ href, heading, description }: LinkArticleProps) {
  return (
    <Link href={href}>
      <motion.a
        css={anchorCss}
        variants={defaultFadeInUpVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div css={imageWrapperCss}>이미지 구역</div>

        <div css={contentWrapperCss}>
          <h2 css={contentHeadingCss}>{heading}</h2>
          <p css={contentParagraphCss}>{description}</p>
        </div>
      </motion.a>
    </Link>
  );
}

const anchorCss = css`
  width: 100%;
  height: 530px;
  background-color: ${colors.gray9};
  border-radius: ${radius.md};
  overflow: hidden;
`;

const imageWrapperCss = css`
  width: 100%;
  height: 346px;
  background-color: ${colors.gray7};
`;

const contentWrapperCss = css`
  padding: 35px 2.5rem;
`;

const contentHeadingCss = css`
  color: ${colors.gray4};
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 120%;

  margin-bottom: 12px;
`;

const contentParagraphCss = css`
  color: ${colors.gray2};
  font-size: 1.625rem;
  font-weight: 600;
  line-height: 150%;
`;
