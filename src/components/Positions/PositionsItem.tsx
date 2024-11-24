import Image from 'next/image';
import Link from 'next/link';
import { css, Theme } from '@emotion/react';
import { m } from 'framer-motion';

import { POSITION_BASE } from '~/constant/image';
import { defaultFadeInVariants } from '~/constant/motion';
import { Position } from '~/constant/position';
import useIsInProgress from '~/hooks/useIsInProgress';
import { mediaQuery } from '~/styles/media';

import { NarrowArrowIcon } from '../Icons';

interface PositionsItemProps {
  type: Position;
  title: string;
  link: string;
  description: string[];
}

export function PositionsItem({ type, title, link, description }: PositionsItemProps) {
  const { isInProgress } = useIsInProgress();

  return (
    <m.article
      css={articleCss}
      variants={defaultFadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div css={() => layoutCss()}>
        <div css={imgContainerCss}>
          <Image fill src={`${POSITION_BASE}/${type}.svg`} alt={title} id={'default'} />
        </div>
      </div>
      <div css={contentsCss}>
        <div>
          <div css={titleCss}>
            {title === 'iOS' ? (
              <div css={iosCss}>
                <span css={spanCss}>i</span>
                <h1 css={h1Css}>OS</h1>
              </div>
            ) : (
              <h1 css={h1Css}>{title}</h1>
            )}{' '}
            <h1 css={h1Css}>{type !== 'design' ? 'DEVELOPER' : 'DESIGNER'}</h1>
          </div>
          <div css={descriptionCss}>
            {description.map((comment, idx) => (
              <p key={idx}>{comment}</p>
            ))}
          </div>
        </div>
        {link && isInProgress && (
          <div css={linkContainerCss}>
            <Link css={linkCss} href={link} target="_blank">
              지원하기
              <span css={arrowIconCss}>
                <NarrowArrowIcon direction="right" fill="black" />
              </span>
            </Link>
          </div>
        )}
      </div>
    </m.article>
  );
}

const articleCss = css`
  position: relative;
  width: 306px;
  height: 336px;
  overflow: hidden;
  border-radius: 20px;

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
  height: 336px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  transition: opacity 0.3s ease;
  opacity: 0;

  img {
    border-radius: 20px;
  }

  &:hover {
    background-color: rgba(19, 28, 40, 0.7);
    opacity: 1;
  }
`;

const layoutCss = () => css`
  width: 306px;
  height: 336px;
`;

const titleCss = css`
  display: flex;
  gap: 6px;
`;

const h1Css = (theme: Theme) => css`
  ${theme.typosV2.bebas.regular32};
  color: white;
`;

const spanCss = (theme: Theme) => css`
  ${theme.typosV2.pretendard.semibold28};
  color: white;
`;

const iosCss = css`
  display: flex;
  gap: 1px;
`;

const descriptionCss = (theme: Theme) => css`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  > p {
    color: white;
    ${theme.typosV2.pretendard.regular16}
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
  ${theme.typosV2.pretendard.regular20}
`;

const arrowIconCss = css`
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 400px;
`;

const imgContainerCss = css`
  position: relative;
  width: 306px;
  height: 336px;

  img {
    border-radius: 20px;
  }
`;
