import { css } from '@emotion/react';

import { colors } from '~/styles/constants';

export default function HeaderSection() {
  return (
    <div css={descriptionCss}>
      <div>디프만에서 탄생한 개성만점</div>
      <div>서비스들을 소개할게요</div>
    </div>
  );
}

const descriptionCss = css`
  font-weight: 600;
  font-size: 2rem;
  line-height: 150%;
  color: ${colors.white};
  margin: 120px 0 60px;
`;
