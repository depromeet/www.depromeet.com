import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';

import { Project } from '~/components/project/constants';
import { CONTACT_PROJECT_IMAGES, PROJECTS_IMAGE_BASE } from '~/constants/images/images';
import { colors, mediaQuery } from '~/styles/constants';

import JobContainer from './JobContainer';
import LinkIcon from './LinkIcon';

interface Props {
  project: Project;
}

export default function ProjectDetailSection({ project }: Props) {
  return (
    <div css={projectDetailCss}>
      <div css={imageCss}>
        <Image
          src={`${PROJECTS_IMAGE_BASE}/${project.image}`}
          alt={'image'}
          layout="fill"
          objectFit="cover"
        />
        <div css={imageLinnerCss} />
      </div>
      <div css={explanationCss}>
        <div css={imageThumbnailCss}>
          <Image
            src={`${PROJECTS_IMAGE_BASE}/${project.icon}`}
            alt={'image'}
            height="97"
            width="97"
            objectFit="cover"
          />
        </div>
        <div css={titleContainerCss}>
          <div css={titleCss}>{project.title}</div>
          <div css={catchphraseCss}>{project.catchphrase}</div>
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
    </div>
  );
}

const projectDetailCss = css`
  padding-top: 60px;

  ${mediaQuery('xs')} {
    padding-top: 0;
  }
`;

const imageCss = css`
  position: relative;
  height: 500px;
  width: auto;
  border-radius: 20px;
  overflow: hidden;

  ${mediaQuery('xs')} {
    max-height: 174px;
    width: auto;
    border-radius: 0px;
  }
`;

const imageLinnerCss = css`
  ${mediaQuery('xs')} {
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.8;
    transform: matrix(1, 0, 0, -1, 0, 0);
  }
`;

const explanationCss = css`
  position: relative;
  margin: 60px 0 120px;

  ${mediaQuery('xs')} {
    margin: 83px 20px 100px;
  }
`;

const imageThumbnailCss = css`
  position: absolute;
  display: none;
  top: -127px;
  width: 97px;
  height: 97px;
  border-radius: 12px;
  overflow: hidden;
  ${mediaQuery('xs')} {
    display: block;
  }
`;

const titleContainerCss = css`
  display: flex;
  align-items: flex-end;
  margin-top: 60px;

  ${mediaQuery('xs')} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const titleCss = css`
  margin-right: 16px;
  font-weight: 600;
  font-size: 2rem;
  line-height: 38px;
  letter-spacing: -0.5px;
  color: ${colors.white};
`;

const catchphraseCss = css`
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

  ${mediaQuery('xs')} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const teamContainerCss = css`
  width: 335px;
  font-size: 1.25rem;
  line-height: 150%;
  margin: 0 10% 30px 0;
`;

const descriptionCss = css`
  font-weight: 500;
  font-size: 1.25rem;
  color: ${colors.gray2};
  margin: 0 0 40px 0;
`;

const iconContainerCss = css`
  display: flex;
  gap: 24px;

  ${mediaQuery('xs')} {
    gap: 16px;
  }
`;
