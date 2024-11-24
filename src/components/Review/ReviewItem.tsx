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
  background-color: ${theme.colors.lightGray};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 476px;
  height: 294px;
  margin-left: 20px;

  ${mediaQuery('tablet')} {
    padding: 30px 50px;
  }

  ${mediaQuery('mobile')} {
    margin-left: 8px;
    max-width: 293px;
    height: 220px;
    padding: 20px;
  }
`;

const titleLayoutCss = css`
  display: flex;
  gap: 12px;
  align-items: center;

  ${mediaQuery('mobile')} {
    gap: 8px;
  }
`;

const titleH3Css = (theme: Theme) => css`
  ${theme.typosV2.pretendard.semibold20};
  color: black;

  ${mediaQuery('mobile')} {
    ${theme.typosV2.pretendard.semibold16};
  }
`;

const titleSpanCss = (theme: Theme) => css`
  ${theme.typosV2.pretendard.semibold16};
  color: ${theme.colors.gray};
  display: flex;
  gap: 5px;
  margin-top: 2px;

  ${mediaQuery('mobile')} {
    ${theme.typosV2.pretendard.regular14};
  }
`;

const summaryCss = (theme: Theme) => css`
  ${theme.typosV2.pretendard.regular16};
  color: black;
  margin-top: 16px;

  > p {
    word-break: break-all;
  }

  ${mediaQuery('tablet')} {
    margin-top: 32px;
  }

  ${mediaQuery('mobile')} {
    ${theme.typosV2.pretendard.regular14};
    margin-top: 8px;
  }
`;

const linkLayoutCss = css`
  display: flex;
  gap: 12px;
`;

const arrowIconCss = (theme: Theme) => css`
  margin-top: 2px;
  width: 24px;
  height: 24px;

  > path {
    stroke: ${theme.colors.pink};
  }
`;

const linkCss = (theme: Theme) => css`
  ${theme.typosV2.pretendard.semibold16};
  color: ${theme.colors.pink};
  margin-top: 20px;
  display: flex;
  gap: 4px;
  align-items: center;

  ${mediaQuery('mobile')} {
    ${theme.typosV2.pretendard.regular14};

    > Svg {
      width: 18px;
      height: 18px;
    }
  }
`;
