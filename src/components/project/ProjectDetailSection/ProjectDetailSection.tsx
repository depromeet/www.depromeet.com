import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';

import { Project } from '~/components/project/constants';
import { CONTACT_PROJECT_IMAGES, PROJECTS_IMAGE_BASE } from '~/constants/images/images';
import { colors } from '~/styles/constants';

import JobContainer from './JobContainer';
import LinkIcon from './LinkIcon';

interface Props {
  project: Project;
}

export default function ProjectDetailSection({ project }: Props) {
  return (
    <div css={projectDetailCss}>
      <Image
        src={`${PROJECTS_IMAGE_BASE}/${project.image}`}
        alt={'image'}
        height="500"
        width="1080"
        objectFit="cover"
      />
      <div css={titleContainerCss}>
        <span css={titleCss}>{project.title}</span>
        <span css={catchphraseCss}>{project.catchphrase}</span>
      </div>
      <div css={generationCss}>
        {project.generation}기 · {project.team}
      </div>
      <div css={detailCss}>
        <div css={teamContainerCss}>
          {project.designers && <JobContainer job={'Design'} member={project.designers} />}
          {project.frontends && <JobContainer job={'FrontEnd'} member={project.frontends} />}
          {project.backends && <JobContainer job={'Backend'} member={project.backends} />}
        </div>
        <div css={descriptionCss}>{project.description}</div>
      </div>
      <div css={iconContainerCss}>
        {project.ios && <LinkIcon src={CONTACT_PROJECT_IMAGES.ios} alt={'app-store icon'} />}
        {project.android && (
          <LinkIcon src={CONTACT_PROJECT_IMAGES.android} alt={'play-store icon'} />
        )}
        {/* TODO: web 아이콘이 나오면 교체 필요 */}
        {project.web && <LinkIcon src={CONTACT_PROJECT_IMAGES.android} alt={'web icon'} />}
      </div>
    </div>
  );
}

const projectDetailCss = css`
  margin: 100px 0 120px;
`;

const titleContainerCss = css`
  margin-top: 60px;
`;

const titleCss = css`
  font-weight: 600;
  font-size: 2rem;
  line-height: 38px;
  letter-spacing: -0.5px;
  color: ${colors.white};
`;

const catchphraseCss = css`
  margin-left: 16px;
  font-size: 1.5rem;
  line-height: 29px;
  letter-spacing: -0.5px;
  color: ${colors.gray4};
`;

const generationCss = css`
  margin: 40px 0 12px;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

const detailCss = css`
  display: flex;
  justify-content: space-between;
`;

const teamContainerCss = css`
  width: 40vh;
  font-size: 1.25rem;
  line-height: 150%;
  margin: 0 10% 60px 0;
`;

const descriptionCss = css`
  font-weight: 500;
  font-size: 1.25rem;
  color: ${colors.gray2};
`;

const iconContainerCss = css`
  display: flex;
  gap: 24px;
  font-weight: 500;
  font-size: 1.25rem;
  color: ${colors.gray2};
`;
