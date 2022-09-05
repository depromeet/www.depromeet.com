import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { Project } from '~/components/project/constants';
import { PROJECTS_IMAGE_BASE } from '~/constants/images/images';
import { defaultFadeInUpVariants, staggerHalf } from '~/constants/motions';
import { colors, mediaQuery } from '~/styles/constants';

interface Props {
  projects: Project[];
}

export default function ProjectContainer({ projects }: Props) {
  const { push } = useRouter();

  return (
    <motion.div css={projectsContainerCss} variants={staggerHalf}>
      {projects.map(({ order, title, catchphrase, thumbnail }, projectIndex) => (
        <motion.button
          key={`project-${projectIndex}`}
          css={projectCss}
          onClick={() => push(`/project/${order}`)}
          variants={defaultFadeInUpVariants}
        >
          <div css={imageCss}>
            <Image
              src={`${PROJECTS_IMAGE_BASE}/${thumbnail}`}
              alt={`${title} icon`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <div css={projectNameCss}>{title}</div>
            <div css={projectCatchphraseCss}>{catchphrase}</div>
          </div>
        </motion.button>
      ))}
    </motion.div>
  );
}
const projectsContainerCss = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px 42px;

  ${mediaQuery('xs')} {
    gap: 20px 0;
  }
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

    & img {
      transition: transform 0.3s;
    }
  }
  > div:last-child {
    height: 96px;
    border-radius: 0 0 16px 16px;
    background-color: ${colors.gray9};
    padding: 20px 20px 0;
    transition: background-color 0.3s;
  }

  &:hover {
    > div:first-child img {
      transform: scale(1.1);
    }
    > div:last-child {
      background-color: ${colors.gray8};
    }
  }
`;

const imageCss = css`
  position: relative;
  width: 335px;
  height: 200px;
`;

const projectNameCss = css`
  color: ${colors.gray1};
  padding-bottom: 8px;
  font-size: 1.5rem;
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
