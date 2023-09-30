import Link from 'next/link';
import { css, Theme } from '@emotion/react';

import { ArrowIcon } from '~/components/Icons';
import { ReviewItemType } from '~/constant/review';
import { mediaQuery } from '~/styles/media';

interface ReviewItemProps extends ReviewItemType {}
export function ReviewItem({ name, group, part, summary, links }: ReviewItemProps) {
  return (
    <div css={layoutCss}>
      <div>
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
      </div>
      <div css={linkLayoutCss}>
        {links.map(({ label, url }) => (
          <Link key={label} href={url} css={linkCss} target="_blank">
            <span>{label} 보기 </span>
            <ArrowIcon direction="right" css={arrowIconCss} />
          </Link>
        ))}
      </div>
    </div>
  );
}

const layoutCss = (theme: Theme) => css`
  padding: 44px 52px;
  background-color: ${theme.colors.black400};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 476px;
  height: 289px;
  margin-left: 20px;

  ${mediaQuery('tablet')} {
    padding: 30px 50px;
    max-width: 510px;
    height: 336px;
  }

  ${mediaQuery('mobile')} {
    margin-left: 8px;
    max-width: 277px;
    height: 212px;
    padding: 20px;
  }
`;

const titleLayoutCss = css`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const titleH3Css = (theme: Theme) => css`
  ${theme.typos.pretendard.subTitle2};
  color: ${theme.colors.white};

  ${mediaQuery('tablet')} {
    ${theme.typos.pretendard.subTitle1};
  }

  ${mediaQuery('mobile')} {
    ${theme.typos.pretendard.subTitle1};
  }
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
  margin-top: 16px;
  > p {
    word-break: break-all;
  }

  ${mediaQuery('tablet')} {
    margin-top: 32px;
  }
  ${mediaQuery('mobile')} {
    margin-top: 8px;
  }
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

  ${mediaQuery('tablet')} {
    margin-top: 20px;
  }
  ${mediaQuery('mobile')} {
    margin-top: 24px;
  }
`;
