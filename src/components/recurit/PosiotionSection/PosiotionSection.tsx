import { css } from '@emotion/react';

import { Card } from './Card';

const POSITION_TYPE = {
  DESIGN: 'DESIGN',
  AOS: 'AOS',
  IOS: 'IOS',
  FRONTEND: 'FRONTEND',
  SERVER: 'SERVER',
} as const;

export type PositionType = keyof typeof POSITION_TYPE;

export default function PosiotionSection() {
  return (
    <section css={sectionCss}>
      <h3 css={headingCss}>모집 직군</h3>
      <div css={cardContainerCss}>
        <Card postionType={POSITION_TYPE.DESIGN} />
        <Card postionType={POSITION_TYPE.AOS} />
        <Card postionType={POSITION_TYPE.IOS} />
        <Card postionType={POSITION_TYPE.FRONTEND} />
        <Card postionType={POSITION_TYPE.SERVER} />
      </div>
    </section>
  );
}

const sectionCss = css`
  width: 100%;
  margin-bottom: 180px;
`;
const headingCss = css`
  font-weight: 700;
  font-size: 42px;
  line-height: 140%;
`;
const cardContainerCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 22px;

  margin-top: 60px;
`;
