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

export default function AnotherProjectContainer({ projects }: Props) {
  const { push } = useRouter();

  return (
    <motion.div css={projectsContainerCss} variants={staggerHalf}>
      {projects.map(({ order, title, catchphrase, thumbnail, icon }, projectIndex) => (
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
          <div css={imageMobileCss}>
            <Image
              src={`${PROJECTS_IMAGE_BASE}/${icon}`}
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

  > button:nth-child(n + 4) {
    display: none;
  }

  ${mediaQuery('xs')} {
    gap: 20px 30px;

    > button:nth-child(n + 4) {
      display: block;
    }
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

    transition: background-color 0.5s;
  }

  &:hover {
    > div:first-child img {
      transform: scale(1.1);
    }
    > div:last-child {
      background-color: ${colors.gray8};
    }
  }

  ${mediaQuery('xs')} {
    width: 160px;
    height: 221px;

    > div:first-child {
      width: 160px;
      height: 160px;
      border-radius: 16px;
      background-color: ${colors.gray7};
      overflow: hidden;
    }
    > div:last-child {
      height: 51px;
      border-radius: 0;
      background-color: transparent;
      padding: 10px 0 0;
    }
  }
`;

const imageCss = css`
  position: relative;
  width: 335px;
  height: 200px;

  ${mediaQuery('xs')} {
    display: none;
  }
`;

const imageMobileCss = css`
  position: relative;
  width: 160px;
  height: 160px;
  display: none;

  ${mediaQuery('xs')} {
    display: block;
  }
`;

const projectNameCss = css`
  color: ${colors.gray1};
  padding-bottom: 8px;
  font-size: 1.5rem;
  line-height: 29px;
  font-weight: 700;

  ${mediaQuery('xs')} {
    padding-bottom: 4px;
    font-size: 1rem;
    line-height: 19px;
    font-weight: 600;
    letter-spacing: -0.005em;
  }
`;

const projectCatchphraseCss = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${colors.gray4};
  line-height: 19px;
  font-weight: 500;

  ${mediaQuery('xs')} {
    font-size: 0.75rem;
    line-height: 14px;
    font-weight: 500;
    letter-spacing: -0.005em;
  }
`;
