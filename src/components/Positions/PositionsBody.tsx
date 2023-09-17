import { PropsWithChildren } from 'react';
import { css } from '@emotion/react';

interface PositionsBodyProps {}

export function PositionsBody({ children }: PropsWithChildren<PositionsBodyProps>) {
  return <div css={layoutCss}>{children}</div>;
}

const layoutCss = css`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  width: 960px; // TODO 전체 너비 상수화
`;
