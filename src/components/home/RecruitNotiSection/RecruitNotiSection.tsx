import { css } from '@emotion/react';

import CTAButton from '~/components/common/CTAButton';
import { colors, mediaQuery } from '~/styles/constants';

export default function RecruitNotiSection() {
  return (
    <section css={sectionCss}>
      <div css={headingWrapperCss}>
        <div css={logoWrapperCss}>
          <h1 css={pendingHeadingCss}>13기 운영진은 겨울잠 자는 중 🐻💤</h1>
        </div>

        <span css={notificationSpanCss}>디프만 13기 리쿠르팅 기간을 놓치고 싶지 않다면?</span>

        <CTAButton disabled>13기 모집 알림 신청하기</CTAButton>
      </div>
    </section>
  );
}

const sectionCss = css`
  margin-top: 260px;
  width: 100%;
  padding-bottom: 260px;
`;

const headingWrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const logoWrapperCss = css`
  margin-bottom: 19px;

  ${mediaQuery('xs')} {
    margin-bottom: 15px;
  }
`;

const pendingHeadingCss = css`
  font-weight: 600;
  font-size: 4.375rem;
  line-height: 120%;
  white-space: pre;

  ${mediaQuery('sm')} {
    font-size: 3.5rem;
  }

  ${mediaQuery('xs')} {
    font-size: 1.875rem;
    line-height: 150%;
  }
`;

const notificationSpanCss = css`
  font-weight: 400;
  font-size: 2rem;
  line-height: 140%;
  white-space: pre;
  color: ${colors.gray3};

  margin-bottom: 80px;

  ${mediaQuery('xs')} {
    font-size: 1.25rem;
  }
`;
