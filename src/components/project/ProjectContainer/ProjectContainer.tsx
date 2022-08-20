import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { Project } from '~/components/project/constants';
import { PROJECTS_IMAGE_BASE } from '~/constants/images/images';
import { colors } from '~/styles/constants';

interface Props {
  projects: Project[];
}

export default function ProjectContainer({ projects }: Props) {
  const { push } = useRouter();

  return (
    <div css={projectsContainerCss}>
      {projects.map(({ order, title, catchphrase, thumbnail }, projectIndex) => (
        <button
          key={`project-${projectIndex}`}
          css={projectCss}
          onClick={() => push(`/project/${order}`)}
        >
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
            <div css={projectNameCss}>{title}</div>
            <div css={projectCatchphraseCss}>{catchphrase}</div>
          </div>
        </button>
      ))}
    </div>
  );
}
const projectsContainerCss = css`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 40px 42px;
`;

const projectCss = css`
  width: 332px;
  height: 296px;
  overflow: hidden;
  text-align: left;

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
    padding: 20px 20px 0 20px;
  }

  &:hover {
    > div:first-child img {
      transition: transform 0.5s;
      transform: scale(1.1);
    }
    > div:last-child {
      transition: background-color 0.5s;
      background-color: ${colors.gray8};
    }
  }
`;

const projectNameCss = css`
  color: ${colors.gray1};
  font-size: 1.5rem;
  padding-bottom: 8px;
  line-height: 29px;
  font-weight: 700;
`;

const projectCatchphraseCss = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${colors.gray4};
  line-height: 19px;
  font-weight: 500;
`;
