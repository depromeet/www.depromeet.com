import { css } from '@emotion/react';

import CTAButton from '~/components/common/CTAButton';
import { colors, mediaQuery } from '~/styles/constants';

export default function Finish() {
  return (
    <>
      <span css={descriptionCss}>13기 세부 일정은 2월 말 오픈 예정입니다</span>
      <h1 css={headingCss}>13기 모집 알람이 마감되었습니다</h1>

      <CTAButton disabled>13기 모집 알림 신청하기</CTAButton>
    </>
  );
}
const descriptionCss = css`
  font-weight: 400;
  font-size: 2rem;
  line-height: 140%;
  text-align: center;

  color: ${colors.gray3};

  margin-bottom: 30px;

  ${mediaQuery('xs')} {
    font-size: 1.429rem;

    margin-bottom: 8px;
  }
`;

const headingCss = css`
  font-weight: 600;
  font-size: 4.5rem;
  line-height: 120%;
  text-align: center;

  color: ${colors.white};

  margin-bottom: 155px;

  ${mediaQuery('sm')} {
    font-size: 3.5rem;
  }

  ${mediaQuery('xs')} {
    font-size: 1.857rem;
    line-height: 150%;

    margin-bottom: 40px;
  }
`;
