import { PropsWithChildren } from 'react';
import { css } from '@emotion/react';

interface QualificationBodyProps {}

export function QualificationBody({ children }: PropsWithChildren<QualificationBodyProps>) {
  return <div css={layoutCss}>{children}</div>;
}

const layoutCss = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  max-width: 960px; // TODO: 변수화해서 theme.ts에서 관리하기
`;
