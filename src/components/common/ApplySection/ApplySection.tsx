import Link from 'next/link';
import { css, Interpolation, Theme } from '@emotion/react';

import { NOTION_RECRUIT_PATH } from '~/constants/common';
import { colors, mediaQuery } from '~/styles/constants';
import { section36HeadingCss, sectionSmallCss } from '~/styles/css';

interface Props {
  wrapperCss?: Interpolation<Theme>;
}

export default function ApplySection({ wrapperCss }: Props) {
  return (
    <section css={[sectionCss, wrapperCss]}>
      <small css={smallCss}>APPLY</small>
      <h2 css={headingCss}>
        이제 여러분 차례예요!
        <br />
        디프만 13기 멤버가 되고 싶다면
      </h2>
      <Link css={linkCss} href={NOTION_RECRUIT_PATH} target="_blank" rel="noopener noreferrer">
        바로 지원하기
      </Link>
    </section>
  );
}

const sectionCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const smallCss = css`
  ${sectionSmallCss};
  margin-bottom: 10px;
`;

const headingCss = css`
  ${section36HeadingCss};
  margin-bottom: 60px;

  ${mediaQuery('xs')} {
    margin-bottom: 36px;
  }
`;

const linkCss = css`
  border-radius: 2px;
  padding: 16px 98px;
  background-color: ${colors.black};

  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: ${colors.gray100};

  ${mediaQuery('xs')} {
    padding: 18px 60px;
    font-size: 16px;
    line-height: 19px;
  }
`;