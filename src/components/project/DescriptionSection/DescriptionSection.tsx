import { css } from '@emotion/react';

import { colors } from '~/styles/constants';

export default function DescriptionSection() {
  return (
    <header css={headerCss}>
      <h2>
        디프만에서 탄생한 개성만점
        <br />
        서비스들을 소개할게요
      </h2>
    </header>
  );
}

const headerCss = css`
  font-weight: 600;
  font-size: 2rem;
  line-height: 150%;
  color: ${colors.white};
  margin: 120px 0 60px;
`;
