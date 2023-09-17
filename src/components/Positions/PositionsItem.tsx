import Image from 'next/image';
import Link from 'next/link';
import { css, Theme } from '@emotion/react';

import { ArrowIcon } from '~/components/Icons';
import { POSITION_BASE } from '~/constant/image';

type Position = 'aos' | 'design' | 'ios' | 'server' | 'web';

interface PositionsItemProps {
  type: Position;
  title: string;
  link: string;
}

export function PositionsItem({ type, title, link }: PositionsItemProps) {
  return (
    <div css={layoutCss}>
      <Image width={112} height={112} src={`${POSITION_BASE}/${type}.png`} alt={title} />
      <h3 css={titleCss}>{title}</h3>
      <Link href={link} target="_blank" css={linkCss}>
        <span>자세히보기</span>
        <ArrowIcon direction="right" css={arrowIconCss} />
      </Link>
    </div>
  );
}

const layoutCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 36px 32px;
  background-color: ${theme.colors.black400};
  width: 306px;
  height: 272px;
`;

const titleCss = (theme: Theme) => css`
  ${theme.typos.decimal.body1};
  color: ${theme.colors.white};
  margin-top: 28px;
`;

const linkCss = (theme: Theme) => css`
  ${theme.typos.pretendard.body1};
  color: ${theme.colors.blue400};
  display: flex;
  align-items: center;
  margin-top: 8px;
  > svg {
    margin-left: 4px;
  }
`;

const arrowIconCss = (theme: Theme) => css`
  width: 24px;
  height: 24px;

  > path {
    stroke: ${theme.colors.blue400};
    stroke-width: 4;
  }
`;
