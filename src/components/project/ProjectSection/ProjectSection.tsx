import React, { useState } from 'react';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { Project, projects } from '~/components/project/constants';
import { defaultFadeInVariants, staggerOne } from '~/constants/motions';
import { colors, mediaQuery } from '~/styles/constants';

import ProjectContainer from './ProjectContainer';
import VerticalDivider from '../VerticalDivider';

type Order = 'latest' | 'oldest';

/**
 * [string, Project[]][]
 * - string: 해당 기수
 * - Project[]: 해당 기수 프로젝트 리스트
 */
const oldGeneration = 7;
const organizeProjects = projects.reduce<Record<number, Project[]>>((result, project) => {
  // 8기 이전 기수는 이전 기수라는 명칭으로 통일합니다.
  const generation = project.generation > oldGeneration ? project.generation : oldGeneration;

  result[generation] = [...(result[generation] ? result[generation] : []), project];

  return result;
}, {});

export default function ProjectSection() {
  const [order, setOrder] = useState<Order>('latest');
  const [sortedProjects, setSortedProjects] = useState(
    Object.entries(organizeProjects).sort(([a], [b]) => Number(b) - Number(a))
  );

  const setProjects = (order: Order) => {
    setOrder(order);
    setSortedProjects(
      Object.entries(organizeProjects).sort(([a], [b]) =>
        order === 'latest' ? Number(b) - Number(a) : Number(a) - Number(b)
      )
    );
  };

  return (
    <motion.section initial="initial" animate="animate" exit="exit">
      <motion.div css={orderContainerCss(order)} variants={defaultFadeInVariants}>
        <button onClick={() => setProjects('latest')}>최신순</button>
        <VerticalDivider />
        <button onClick={() => setProjects('oldest')}>오래된순</button>
      </motion.div>
      {sortedProjects.map((projects, generationIndex) => (
        <motion.div
          key={`generation-${generationIndex}`}
          css={sortedProjectsContainerCss}
          variants={staggerOne}
        >
          <motion.div css={generationCss} variants={defaultFadeInVariants}>
            <div css={generationInnerCss}>
              {Number(projects[0]) > oldGeneration ? `${projects[0]}기` : '이전기수'}
            </div>
          </motion.div>
          <ProjectContainer projects={projects[1]} />
        </motion.div>
      ))}
    </motion.section>
  );
}

const orderContainerCss = (order: Order) => css`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  margin: 24px 0 50px;
  gap: 12px;

  button {
    font-weight: 600;
    font-size: 1rem;
    transition: color 0.3s;
  }
  button:first-child {
    color: ${order === 'latest' ? colors.white : colors.gray4};
  }
  button:last-child {
    color: ${order === 'latest' ? colors.gray4 : colors.white};
  }
`;

const sortedProjectsContainerCss = css`
  margin-bottom: 80px;
`;

const generationCss = css`
  margin-bottom: 30px;
  font-size: 1.5rem;
  font-weight: 700;

  ${mediaQuery('xs')} {
    display: flex;
    justify-content: center;
  }
`;

const generationInnerCss = css`
  ${mediaQuery('xs')} {
    width: 332px;
  }
`;
