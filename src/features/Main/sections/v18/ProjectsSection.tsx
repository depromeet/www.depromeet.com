import Link from 'next/link';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { ProjectThumbnail } from '~/components/Project';
import { CONTENT_WIDTH } from '~/constant/layout';
import { PROJECT_LIST } from '~/constant/project';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';

const MAIN_PROJECT_COUNT = 6;

export const ProjectsSection = () => {
  const displayProjects = PROJECT_LIST.slice(0, MAIN_PROJECT_COUNT);

  return (
    <section css={sectionCss}>
      <div css={contentCss}>
        {/* 메인 페이지 전용 타이틀/서브타이틀 */}
        <div css={headerCss}>
          <motion.h2
            css={titleCss}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            프로젝트
          </motion.h2>
          <motion.p
            css={subtitleCss}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            디프만 멤버 &apos;디퍼(DEEPER)&apos;들의 다양한 프로젝트를 확인해보세요
          </motion.p>
        </div>

        {/* 프로젝트 페이지와 동일한 ProjectThumbnail 사용 */}
        <div css={gridCss}>
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              css={cardWrapperCss}
            >
              <ProjectThumbnail {...project} textWrapperPadding mainPageCard />
            </motion.div>
          ))}
        </div>

        <div css={buttonContainerCss}>
          <Link href="/project" css={viewAllButtonCss}>
            프로젝트 전체 보기
            <ArrowRightIconDesktop />
            <ArrowRightIconDesktopHover />
            <ArrowRightIconMobile />
            <ArrowRightIconMobileHover />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ArrowRightIconDesktop = () => (
  <span css={desktopIconCss} data-icon="desktop-default">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M16.0003 29.3337C23.3641 29.3337 29.3337 23.3641 29.3337 16.0003C29.3337 8.63653 23.3641 2.66699 16.0003 2.66699C8.63653 2.66699 2.66699 8.63653 2.66699 16.0003C2.66699 23.3641 8.63653 29.3337 16.0003 29.3337Z"
        fill="#0078E7"
      />
      <path
        d="M16 21.3337L21.3333 16.0003L16 10.667"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.667 16H21.3337"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const ArrowRightIconDesktopHover = () => (
  <span css={desktopIconHoverCss} data-icon="desktop-hover">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M16.0003 29.3337C23.3641 29.3337 29.3337 23.3641 29.3337 16.0003C29.3337 8.63653 23.3641 2.66699 16.0003 2.66699C8.63653 2.66699 2.66699 8.63653 2.66699 16.0003C2.66699 23.3641 8.63653 29.3337 16.0003 29.3337Z"
        fill="white"
      />
      <path
        d="M16 21.3337L21.3333 16.0003L16 10.667"
        stroke="#0078E7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.667 16H21.3337"
        stroke="#0078E7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const ArrowRightIconMobile = () => (
  <span css={mobileIconCss} data-icon="mobile-default">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="#0078E7"
      />
      <path
        d="M12 16L16 12L12 8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12H16"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const ArrowRightIconMobileHover = () => (
  <span css={mobileIconHoverCss} data-icon="mobile-hover">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="white"
      />
      <path
        d="M12 16L16 12L12 8"
        stroke="#0078E7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12H16"
        stroke="#0078E7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const desktopIconCss = css`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const desktopIconHoverCss = css`
  display: none;
`;

const mobileIconCss = css`
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
`;

const mobileIconHoverCss = css`
  display: none;
`;

const sectionCss = css`
  width: 100%;
  padding: 120px 30px;
  background: ${colors.primary18['extra-light']};

  ${mediaQuery('mobile')} {
    padding: 40px 20px;
  }
`;

const contentCss = css`
  width: 100%;
  max-width: ${CONTENT_WIDTH.desktop}px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const headerCss = css`
  width: 100%;
  margin-bottom: 40px;
`;

const titleCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.4;
  color: ${colors.grey18['900']};
  margin: 0 0 12px 0;

  ${mediaQuery('mobile')} {
    font-size: 1.25rem;
    margin-bottom: 8px;
  }
`;

const subtitleCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.6;
  color: ${colors.grey18['600']};
  margin: 0;

  ${mediaQuery('mobile')} {
    font-size: 1rem;
  }
`;

/* 프로젝트 페이지와 동일한 그리드 스타일, 같은 행 카드 높이 맞춤 */
const gridCss = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
  row-gap: 60px;
  justify-items: stretch;
  align-items: stretch;

  @media (min-width: 768px) and (max-width: 1279px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    row-gap: 28px;
  }
`;

const cardWrapperCss = css`
  width: 100%;
  height: 100%;
  min-height: 0;
`;

const buttonContainerCss = css`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const viewAllButtonCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 287px;
  height: 80px;
  padding: 20px 30px;
  border: 2px solid #e3e5e7;
  border-radius: 100px;
  background: #fff;
  color: ${colors.grey18['900']};
  font-family: Pretendard, sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:hover {
    background: #0078e7;
    color: #fff;
  }

  @media (min-width: 768px) {
    &:hover [data-icon='desktop-default'] {
      display: none;
    }
    &:hover [data-icon='desktop-hover'] {
      display: flex;
    }
  }

  @media (max-width: 767px) {
    &:hover [data-icon='mobile-default'] {
      display: none;
    }
    &:hover [data-icon='mobile-hover'] {
      display: flex;
    }
  }

  ${mediaQuery('mobile')} {
    width: 199px;
    height: 48px;
    padding: 12px 20px;
    font-size: 1rem;
  }
`;
