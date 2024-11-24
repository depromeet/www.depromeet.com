import { css, Theme } from '@emotion/react';

import { QualificationItem } from '~/components/Qualification/QualificationItem';
import { QUALIFICATIONS } from '~/constant/qualification';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

export function Qualification() {
  return (
    <section css={layoutCss}>
      <h1 css={titleCss}>지원 자격</h1>
      <div css={listCss}>
        {QUALIFICATIONS.map(({ index, description }) => (
          <QualificationItem key={index} index={index} description={description} />
        ))}
      </div>
    </section>
  );
}

const layoutCss = (theme: Theme) => css`
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-items: center;
  background-color: ${theme.colors.lightGray};
`;

const titleCss = css`
  ${theme.typosV2.pretendard.bold32}
`;

const listCss = css`
  padding: 0 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  max-width: 960px; // TODO: 변수화해서 theme.ts에서 관리하기

  ${mediaQuery('tablet')} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
