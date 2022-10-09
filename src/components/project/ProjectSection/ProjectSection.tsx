import React, { useState } from 'react';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import BottomSheet from '~/components/common/BottomSheet';
import Button from '~/components/common/Button';
import { ArrowIcon } from '~/components/common/icons/ArrowIcon';
import { CheckIcon } from '~/components/common/icons/CheckIcon';
import { Project, projects } from '~/components/project/constants';
import { defaultFadeInVariants, staggerOne } from '~/constants/motions';
import useMediaQuery from '~/hooks/use-media-query';
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
  const isMobile = useMediaQuery('xs');
  const [isShowing, setIsShowing] = useState(false);

  const setProjects = (order: Order) => {
    setOrder(order);
    setSortedProjects(
      Object.entries(organizeProjects).sort(([a], [b]) =>
        order === 'latest' ? Number(b) - Number(a) : Number(a) - Number(b)
      )
    );
  };

  return (
    <>
      <motion.section initial="initial" animate="animate" exit="exit">
        {isMobile && (
          <motion.div css={mobilOrderContainerCss} variants={defaultFadeInVariants}>
            <Button
              onClick={() => {
                setIsShowing(true);
              }}
            >
              {order === 'latest' ? '최신순' : '오래된순'}
              <ArrowIcon direction={isShowing ? 'up' : 'down'} width={19} height={19} />
            </Button>
          </motion.div>
        )}
        {!isMobile && (
          <motion.div css={orderContainerCss(order)} variants={defaultFadeInVariants}>
            <button onClick={() => setProjects('latest')}>최신순</button>
            <VerticalDivider />
            <button onClick={() => setProjects('oldest')}>오래된순</button>
          </motion.div>
        )}

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
      <BottomSheet
        isShowing={isShowing}
        onClose={() => {
          setIsShowing(false);
        }}
      >
        <motion.div css={sortMenuListCss} variants={defaultFadeInVariants}>
          <button
            css={sortMenuCss(order === 'latest')}
            onClick={() => {
              setProjects('latest');
              setIsShowing(false);
            }}
          >
            최신순
            {order === 'latest' && <CheckIcon width={24} height={24} />}
          </button>
          <hr css={sortMenuDivider} />
          <button
            css={sortMenuCss(order === 'oldest')}
            onClick={() => {
              setProjects('oldest');
              setIsShowing(false);
            }}
          >
            오래된순
            {order === 'oldest' && <CheckIcon width={24} height={24} />}
          </button>
        </motion.div>
      </BottomSheet>
    </>
  );
}

const sortMenuListCss = css`
  margin: 30px 30px 0;
`;

const sortMenuDivider = css`
  margin-bottom: 24px;

  border: 0px;
  border-top: 1px solid ${colors.gray7};
`;

const sortMenuCss = (selected: boolean) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  font-size: 1.286rem;
  line-height: 120%;
  font-weight: ${selected ? 700 : 400};
  color: ${selected ? colors.white : colors.gray3};

  margin-bottom: 24px;
`;

const orderContainerCss = (order: Order) => css`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin: 24px 0 50px;
  gap: 12px;

  button {
    font-weight: 600;
    font-size: 1rem;
    transition: color 0.3s;
  }
  button:first-of-type {
    color: ${order === 'latest' ? colors.white : colors.gray4};
  }
  button:last-child {
    color: ${order === 'latest' ? colors.gray4 : colors.white};
  }
`;

const mobilOrderContainerCss = css`
  display: flex;
  justify-content: end;
  margin: 17px 0 23px;

  button {
    display: flex;
    align-items: center;
    gap: 6px;

    color: ${colors.white};

    &:hover {
      background-color: ${colors.gray8};
    }
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
