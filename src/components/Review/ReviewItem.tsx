import Link from 'next/link';
import { css, Theme } from '@emotion/react';

import { ArrowIcon } from '~/components/Icons';
import { Swiper } from '~/components/Swiper';

export type ReadMoreLink = {
  type: 'blog' | 'project';
  url: string;
  label: string;
};

export interface ReviewItemProps {
  name: string;
  /**
   * 기수
   * ex) 14기
   */
  group: string;
  /**
   * 파트
   * ex) WEB
   */
  part: string;
  summary: string;
  links: ReadMoreLink[];
}

export function ReviewItem({ name, group, part, summary, links }: ReviewItemProps) {
  return (
    <Swiper.Item css={layoutCss}>
      <div css={titleLayoutCss}>
        <h3 css={titleH3Css}>{name}</h3>
        <div css={titleSpanCss}>
          <span>{group}</span>
          <span>{part}</span>
        </div>
      </div>
      <div css={summaryCss}>
        <p>{summary}</p>
      </div>
      <div css={linkLayoutCss}>
        {links.map(({ label, url }) => (
          <Link key={label} href={url} css={linkCss} target="_blank">
            <span>{label} 보기 </span>
            <ArrowIcon direction="right" css={arrowIconCss} />
          </Link>
        ))}
      </div>
    </Swiper.Item>
  );
}

const layoutCss = (theme: Theme) => css`
  padding: 44px 52px;
  background-color: ${theme.colors.black400};
  display: flex;
  flex-direction: column;
  max-width: 476px;
`;

const titleLayoutCss = css`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const titleH3Css = (theme: Theme) => css`
  ${theme.typos.pretendard.subTitle2};
  color: ${theme.colors.white};
`;

const titleSpanCss = (theme: Theme) => css`
  ${theme.typos.pretendard.body1};
  color: ${theme.colors.white};
  display: flex;
  gap: 8px;
`;

const summaryCss = (theme: Theme) => css`
  ${theme.typos.pretendard.body1};
  color: ${theme.colors.gray100};
  margin-top: 20px;
`;

const linkLayoutCss = css`
  display: flex;
  gap: 12px;
`;

const arrowIconCss = (theme: Theme) => css`
  width: 24px;
  height: 24px;

  > path {
    stroke: ${theme.colors.blue400};
  }
`;

const linkCss = (theme: Theme) => css`
  ${theme.typos.pretendard.body1};
  color: ${theme.colors.blue400};
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

ReviewItem.displayName = 'SwiperSlide';