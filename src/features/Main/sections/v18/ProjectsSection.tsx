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
              <ProjectThumbnail {...project} />
            </motion.div>
          ))}
        </div>

        <div css={buttonContainerCss}>
          <Link href="/project" css={viewAllButtonCss}>
            프로젝트 전체 보기
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ArrowRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
    <path
      d="M10 8L14 12L10 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const sectionCss = css`
  width: 100%;
  padding: 120px 40px;
  background: ${colors.grey18['00']};

  ${mediaQuery('mobile')} {
    padding: 60px 20px;
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

/* 프로젝트 페이지와 동일한 그리드 스타일 */
const gridCss = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
  row-gap: 60px;
  justify-items: stretch;
  align-items: start;

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
`;

const buttonContainerCss = css`
  display: flex;
  justify-content: center;
  margin-top: 48px;

  ${mediaQuery('mobile')} {
    margin-top: 32px;
  }
`;

const viewAllButtonCss = css`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  border: 1px solid ${colors.grey18['200']};
  border-radius: 100px;
  background: transparent;
  color: ${colors.grey18['900']};
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.grey18['100']};
  }

  ${mediaQuery('mobile')} {
    font-size: 14px;
    padding: 12px 24px;
  }
`;
