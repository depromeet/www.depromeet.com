import { css } from '@emotion/react';

import { QualificationItem } from '~/components/Qualification/QualificationItem';
import { SectionTitle } from '~/components/SectionTitle';
import { QUALIFICATIONS } from '~/constant/qualification';

export function Qualification() {
  return (
    <div css={layoutCss}>
      <SectionTitle label="Qualification" title="전체 지원 자격" />
      <div css={listCss}>
        {QUALIFICATIONS.map(({ index, description }) => (
          <QualificationItem key={index} index={index} description={description} />
        ))}
      </div>
    </div>
  );
}

const layoutCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const listCss = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  max-width: 960px; // TODO: 변수화해서 theme.ts에서 관리하기
`;
