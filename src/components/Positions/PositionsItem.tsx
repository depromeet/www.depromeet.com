import Image from 'next/image';
import Link from 'next/link';
import { css, Theme } from '@emotion/react';
import { m } from 'framer-motion';

import { POSITION_BASE } from '~/constant/image';
import { defaultFadeInVariants } from '~/constant/motion';
import { mediaQuery } from '~/styles/media';

import { NarrowArrowIcon } from '../Icons';

type Position = 'aos' | 'design' | 'ios' | 'server' | 'web';

interface PositionsItemProps {
  type: Position;
  title: string;
  link: string;
  description: string[];
}

export function PositionsItem({ type, title, link, description }: PositionsItemProps) {
  return (
    <m.article
      css={articleCss}
      variants={defaultFadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div css={theme => layoutCss(theme, type)}>
        <div css={imgContainerCss}>
          <Image fill src={`${POSITION_BASE}/${type}.svg`} alt={title} />
        </div>
      </div>
      <div css={contentsCss}>
        <div>
          <h1 css={titleCss}>
            {title === 'iOS' ? (
              <>
                <span>i</span>
                OS
              </>
            ) : (
              title
            )}{' '}
            {type !== 'design' ? 'DEVELOPER' : 'DESIGNER'}
          </h1>
          <div css={descriptionCss}>
            {description.map((comment, idx) => (
              <p key={idx}>{comment}</p>
            ))}
          </div>
        </div>
        <div css={linkContainerCss}>
          <Link css={linkCss} href={link}>
            지원하기
            <span css={arrowIconCss}>
              <NarrowArrowIcon direction="right" fill="black" />
            </span>
          </Link>
        </div>
      </div>
    </m.article>
  );
}

const getColorByPosition = (theme: Theme, position: string) => {
  if (position === 'web') return theme.colors.yellow;
  else if (position === 'server') return theme.colors.purple;
  else if (position === 'ios') return theme.colors.pink;
  else if (position === 'aos') return theme.colors.green;
  else if (position === 'design') return theme.colors.blue;
};

const articleCss = css`
  position: relative;
  width: 306px;
  height: 430px;
  overflow: hidden;

  ${mediaQuery('tablet')} {
    max-width: 100%;
  }
  ${mediaQuery('mobile')} {
    max-width: 100%;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover img {
    filter: blur(6px) brightness(0.7);
  }
`;

const contentsCss = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 306px;
  height: 430px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  transition: opacity 0.3s ease;
  opacity: 0;

  &:hover {
    background-color: rgba(19, 28, 40, 0.7);
    opacity: 1;
  }
`;

const layoutCss = (theme: Theme, position: string) => css`
  background-color: ${getColorByPosition(theme, position)};
  width: 306px;
  height: 430px;
`;

const titleCss = (theme: Theme) => css`
  ${theme.typos.bebas.regular32};
  color: white;

  > span {
    ${theme.typos.notosans.semibold28};
  }
`;

const descriptionCss = (theme: Theme) => css`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  > p {
    color: white;
    ${theme.typos.notosans.regular16}
  }
`;

const linkContainerCss = css`
  display: flex;
  justify-content: flex-end;
`;

const linkCss = (theme: Theme) => css`
  display: flex;
  gap: 5px;
  align-items: center;
  color: white;
  ${theme.typos.notosans.regular20}
`;

const arrowIconCss = css`
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 400px;
`;

const imgContainerCss = css`
  top: 15px;
  position: relative;
  width: 306px;
  height: 310px;
`;
