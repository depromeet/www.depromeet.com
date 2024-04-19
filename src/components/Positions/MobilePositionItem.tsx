import Image from 'next/image';
import Link from 'next/link';
import { css, Theme } from '@emotion/react';

import { POSITION_BASE } from '~/constant/image';
import { getColorByPosition, Position } from '~/constant/position';

import { NarrowArrowIcon } from '../Icons';

interface MobilePositionsItemProps {
  type: Position;
  title: string;
  link: string;
}

export function MobilePositionItem({ type, title, link }: MobilePositionsItemProps) {
  return (
    <div css={theme => layoutCss(theme, type)}>
      <div css={imgContainerCss}>
        <Image src={`${POSITION_BASE}/${type}-mobile.svg`} alt={title} fill />
      </div>
      <div>
        <h1 css={titleCss}>
          {title === 'iOS' ? (
            <>
              <span>i</span>
              OS
            </>
          ) : (
            title
          )}
        </h1>
        {link && (
          <Link href={link} css={linkCss}>
            지원하기
            <span css={arrowIconCss}>
              <NarrowArrowIcon direction="right" fill="white" />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}

const layoutCss = (theme: Theme, position: string) => css`
  padding: 0 20px;
  width: 100%;
  min-width: 240px;
  height: 92px;
  display: flex;
  gap: 20px;
  align-items: center;
  background-color: ${getColorByPosition(theme, position)};
`;

const imgContainerCss = css`
  position: relative;
  width: 86px;
  height: 86px;
`;

const titleCss = (theme: Theme) => css`
  ${theme.typos.bebas.regular24};

  > span {
    ${theme.typos.notosans.semibold18};
  }
`;

const linkCss = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: 5px;
  align-items: center;
  color: black;
  ${theme.typos.notosans.regular18}
`;

const arrowIconCss = css`
  width: 24px;
  height: 24px;
  background-color: black;
  border-radius: 400px;
`;
