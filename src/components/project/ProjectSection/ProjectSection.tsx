import React, { useState } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';

import { Project, projects } from '~/components/project/ProjectSection/constants';
import { PROJECTS_IMAGE_BASE } from '~/constants/images/images';
import { colors } from '~/styles/constants';

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

export default function HeaderSection() {
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
    <>
      <div css={orderContainerCss(order)}>
        <button onClick={() => setProjects('latest')}>최신순</button>
        <VerticalDivider />
        <button onClick={() => setProjects('oldest')}>오래된순</button>
      </div>
      {sortedProjects.map((projects, generationIndex) => (
        <div key={`generation-${generationIndex}`} css={projectsCss}>
          <div css={generationCss}>
            {Number(projects[0]) > oldGeneration ? `${projects[0]}기` : '이전기수'}
          </div>
          <div css={cardContainerCss}>
            {projects[1].map(({ title, catchphrase, thumbnail }, projectIndex) => (
              <div key={`project-${projectIndex}`} css={cardCss}>
                <div>
                  <Image
                    src={`${PROJECTS_IMAGE_BASE}/${thumbnail}`}
                    alt={`${title} icon`}
                    height="200"
                    width="332"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <div css={cardNameCss}>{title}</div>
                  <div css={cardDescriptionCss}>{catchphrase}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
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

const projectsCss = css`
  margin-bottom: 80px;
`;

const generationCss = css`
  margin-bottom: 30px;
  font-size: 1.5rem;
  font-weight: 700;
`;

const cardContainerCss = css`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 40px 42px;
`;

const cardCss = css`
  width: 332px;
  height: 296px;

  > div {
    transition: background-color 0.3s;
  }

  &:hover {
    > div:last-child {
      background-color: ${colors.gray8};
    }
  }

  > div:first-child {
    height: 200px;
    border-radius: 16px 16px 0 0;
    background-color: ${colors.gray7};
    overflow: hidden;
  }
  > div:last-child {
    height: 96px;
    border-radius: 0 0 16px 16px;
    background-color: ${colors.gray9};
    padding: 20px 20px 20px;
  }
`;

const cardNameCss = css`
  color: ${colors.gray1};
  font-size: 1.5rem;
  padding-bottom: 8px;
  line-height: 29px;
  font-weight: 700;
`;

const cardDescriptionCss = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${colors.gray4};
  line-height: 19px;
  font-weight: 500;
`;
