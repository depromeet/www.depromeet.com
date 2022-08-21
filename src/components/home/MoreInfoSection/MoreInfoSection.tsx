import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { DEPROMEET_MEDIUM } from '~/constants/common';
import { defaultFadeInUpVariants, defaultFadeInVariants, staggerOne } from '~/constants/motions';
import useMediaQuery from '~/hooks/use-media-query';
import { colors, mediaQuery, radius } from '~/styles/constants';

const MORE_INFO_IMAGE_BASE = '/images/home/more-info';

const MORE_INFO_MEDIUM_IMAGE = `${MORE_INFO_IMAGE_BASE}/medium.png`;
const MORE_INFO_MEDIUM_IMAGE_MOBILE = `${MORE_INFO_IMAGE_BASE}/medium_mobile.png`;

const MORE_INFO_INTERVIEW_IMAGE = `${MORE_INFO_IMAGE_BASE}/interview.png`;
const MORE_INFO_INTERVIEW_IMAGE_MOBILE = `${MORE_INFO_IMAGE_BASE}/interview_mobile.png`;

const MORE_INFO_PROJECTS_IMAGE = `${MORE_INFO_IMAGE_BASE}/projects.png`;
const MORE_INFO_PROJECTS_IMAGE_MOBILE = `${MORE_INFO_IMAGE_BASE}/projects_mobile.png`;

export default function MoreInfoSection() {
  const isMobile = useMediaQuery('xs');

  return (
    <motion.section
      css={sectionCss}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ amount: isMobile ? 0.2 : 0.6, once: true }}
    >
      <motion.h2 css={headingCss} variants={defaultFadeInVariants}>
        디프만에 대해서
        <br />더 자세히 알고 싶다면?
      </motion.h2>

      <motion.div css={articleWrapperCss} variants={staggerOne}>
        <LinkArticle
          href={DEPROMEET_MEDIUM}
          image={isMobile ? MORE_INFO_MEDIUM_IMAGE_MOBILE : MORE_INFO_MEDIUM_IMAGE}
          heading="활동 내역"
          description="결과만큼 과정도 중요한 디프만의 활동 내역"
          blank
        />
        <LinkArticle
          href="/interview"
          image={isMobile ? MORE_INFO_INTERVIEW_IMAGE_MOBILE : MORE_INFO_INTERVIEW_IMAGE}
          heading="멤버 인터뷰"
          description="디프만 11기 멤버가 말해주는 디프만"
        />
        <LinkArticle
          href="/project"
          image={isMobile ? MORE_INFO_PROJECTS_IMAGE_MOBILE : MORE_INFO_PROJECTS_IMAGE}
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

  ${mediaQuery('xs')} {
    font-size: 24px;
    font-weight: 500;

    margin-bottom: 30px;
  }
`;

const articleWrapperCss = css`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 2.625rem;

  ${mediaQuery('xs')} {
    flex-direction: column;
    gap: 15px;
  }
`;

interface LinkArticleProps {
  href: string;
  image: string;
  heading: string;
  description: string;
  blank?: boolean;
}

function LinkArticle({ href, heading, image, description, blank = false }: LinkArticleProps) {
  if (blank) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        css={anchorCss}
        variants={defaultFadeInUpVariants}
        whileHover={{ scale: 1.02, transformOrigin: 'center' }}
        whileTap={{ scale: 0.98 }}
      >
        <div css={imageWrapperCss}>
          <Image
            src={image}
            alt={heading}
            layout="fill"
            objectFit="cover"
            unoptimized
            placeholder="blur"
            blurDataURL={image}
          />
        </div>

        <div css={contentWrapperCss}>
          <h2 css={contentHeadingCss}>{heading}</h2>
          <p css={contentParagraphCss}>{description}</p>
        </div>
      </motion.a>
    );
  }

  return (
    <Link href={href}>
      <motion.a
        css={anchorCss}
        variants={defaultFadeInUpVariants}
        whileHover={{ scale: 1.02, transformOrigin: 'center' }}
        whileTap={{ scale: 0.98 }}
      >
        <div css={imageWrapperCss}>
          <Image
            src={image}
            alt={heading}
            layout="fill"
            objectFit="cover"
            unoptimized
            placeholder="blur"
            blurDataURL={image}
          />
        </div>

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
  overflow: hidden;
  border-radius: ${radius.md};
  background-color: ${colors.gray9};

  ${mediaQuery('xs')} {
    height: 354px;
  }
`;

const imageWrapperCss = css`
  position: relative;
  width: 100%;
  height: 346px;
  background-color: ${colors.gray7};

  ${mediaQuery('xs')} {
    height: 233px;
  }
`;

const contentWrapperCss = css`
  padding: 35px 2.5rem;

  ${mediaQuery('xs')} {
    padding: 20px;
  }
`;

const contentHeadingCss = css`
  color: ${colors.gray4};
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 120%;

  margin-bottom: 12px;

  ${mediaQuery('xs')} {
    font-size: 14px;

    margin-bottom: 6px;
  }
`;

const contentParagraphCss = css`
  color: ${colors.gray2};
  font-size: 1.625rem;
  font-weight: 600;
  line-height: 150%;

  ${mediaQuery('xs')} {
    width: 60%;
    font-size: 18px;
  }
`;
