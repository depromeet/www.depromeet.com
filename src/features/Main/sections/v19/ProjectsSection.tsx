import Link from 'next/link';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import {
  CIRCLE_ARROW_SIZE,
  circleArrowHoverCss,
  CircleArrowRightIcon,
} from '~/components/Icons/CircleArrowIcon';
import { ProjectThumbnail } from '~/components/Project';
import { PROJECT_LIST } from '~/constant/project';
import { RECRUIT } from '~/constant/recruit';
import { colors } from '~/styles/colors';
import { theme } from '~/styles/theme';

const MAIN_PROJECT_COUNT = 6;
/** 소개 페이지에는 직전 기수(19기 기준 18기) 프로젝트를 노출한다. 리터럴 대신 계산해서 쓴다. */
const FEATURED_GENERATION = `${RECRUIT.generation - 1}기`;

export const ProjectsSection = () => {
  const displayProjects = PROJECT_LIST.filter(
    project => project.subTitle === FEATURED_GENERATION
  ).slice(0, MAIN_PROJECT_COUNT);

  return (
    <section css={sectionCss} data-gnb-theme="light">
      <div css={contentCss}>
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

        {/* 호버 시 Github/Behance/Web 링크 노출 — /project 페이지와 동일한 ProjectThumbnail 재사용 */}
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
              <ProjectThumbnail {...project} gridCard />
            </motion.div>
          ))}
        </div>

        <div css={buttonContainerCss}>
          <Link href="/project" css={viewAllButtonCss}>
            프로젝트 전체 보기
            <CircleArrowRightIcon size={CIRCLE_ARROW_SIZE.button} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const sectionCss = css`
  width: 100%;
  background: ${colors.v19.coolGray100};
  padding: 60px 20px;

  @media (min-width: 768px) {
    padding: 120px 40px;
  }

  @media (min-width: 1280px) {
    padding: 200px 40px;
  }

  @media (min-width: 1920px) {
    padding: 240px 40px;
  }
`;

const contentCss = css`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const headerCss = css`
  width: 100%;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

const titleCss = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.01em;
  color: ${colors.v19.coolGray900};
  margin: 0 0 8px 0;

  @media (min-width: 768px) {
    ${theme.typosV4.pretendard.head1};
    margin-bottom: 12px;
  }
`;

const subtitleCss = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  color: ${colors.v19.coolGray600};
  margin: 0;

  @media (min-width: 768px) {
    ${theme.typosV4.pretendard.sub2M};
  }
`;

const gridCss = css`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 16px;
  row-gap: 60px;
  justify-items: stretch;
  align-items: stretch;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
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
  margin-top: 32px;

  @media (min-width: 768px) {
    margin-top: 40px;
  }
`;

const viewAllButtonCss = css`
  ${circleArrowHoverCss};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 190px;
  height: 44px;
  padding: 10px 16px;
  white-space: nowrap;
  border: 2px solid ${colors.v19.coolGray200};
  border-radius: 200px;
  background: ${colors.v19.white100};
  color: ${colors.v19.coolGray900};
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:hover {
    background: ${colors.v19.blue500};
    color: ${colors.v19.white100};
  }

  @media (min-width: 768px) {
    width: 287px;
    height: 80px;
    padding: 20px 30px;
    gap: 12px;
    font-size: 24px;
  }
`;
