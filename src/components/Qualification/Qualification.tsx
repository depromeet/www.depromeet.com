import { css } from '@emotion/react';

import { QualificationItem } from '~/components/Qualification/QualificationItem';
import { SectionTitle } from '~/components/SectionTitle';
import { QUALIFICATIONS } from '~/constant/qualification';
import { commonLayoutCss } from '~/styles/layout';
import { mediaQuery } from '~/styles/media';

export function Qualification() {
  return (
    <section css={layoutCss}>
      <SectionTitle label="Qualification" title="전체 지원 자격" />
      <div css={listCss}>
        {QUALIFICATIONS.map(({ index, description }) => (
          <QualificationItem key={index} index={index} description={description} />
        ))}
      </div>
    </section>
  );
}

const layoutCss = css`
  ${commonLayoutCss}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const listCss = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  max-width: 960px; // TODO: 변수화해서 theme.ts에서 관리하기

  ${mediaQuery('mobile')} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
