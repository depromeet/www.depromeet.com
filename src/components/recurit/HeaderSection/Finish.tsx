import { css } from '@emotion/react';

import CTAButton from '~/components/common/CTAButton';
import { colors } from '~/styles/constants';

export default function Finish() {
  return (
    <>
      <span css={descriptionCss}>서류 접수 마감까지</span>
      <h1 css={headingCss}>12기 모집이 마감되었습니다.</h1>
      <CTAButton>모집 알림 받기</CTAButton>
    </>
  );
}
const descriptionCss = css`
  font-weight: 700;
  font-size: 2rem;
  line-height: 140%;
  text-align: center;

  color: ${colors.white};

  margin-bottom: 30px;
`;

const headingCss = css`
  font-weight: 600;
  font-size: 4.5rem;
  line-height: 120%;
  text-align: center;

  color: ${colors.white};

  margin-bottom: 155px;
`;
