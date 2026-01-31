import { css } from '@emotion/react';

import { theme } from '~/styles/theme';

export function RecruitTitleSection() {
  return (
    <section css={sectionCss}>
      <div css={contentWrapperCss}>
        <h1 id="title" css={titleTextCss}>
          Recruitment
        </h1>
        <div css={descriptionCss}>
          <span>2026.02.12 - 02.18</span>
          <span>depromeet 18.0</span>
        </div>
      </div>
    </section>
  );
}

const sectionCss = css`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 100px 20px 40px;

  @media (max-width: 768px) {
    padding: 60px 20px 30px;
  }
`;

const contentWrapperCss = css`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  @media (min-width: 1280px) and (max-width: 1919px) {
    max-width: 880px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    max-width: 688px;
  }

  @media (min-width: 360px) and (max-width: 767px) {
    max-width: 688px;
  }
`;

const titleTextCss = css`
  font-family: 'Helvetica Neue', 'Pretendard', sans-serif;
  font-size: 88px;
  font-weight: 700;
  line-height: 1.2;
  color: ${theme.colors.white};
  margin: 0;
  letter-spacing: -0.04em;

  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 60px;
    line-height: 1.4;
    letter-spacing: -0.01em;
  }

  @media (min-width: 360px) and (max-width: 767px) {
    font-size: 40px;
    line-height: 1.4;
    letter-spacing: -0.01em;
  }
`;

const descriptionCss = css`
  display: flex;
  align-items: center;
  gap: 28px;
  color: ${theme.colors.white};
  font-family: 'Helvetica Neue', 'Pretendard', sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.01em;

  @media (min-width: 360px) and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    font-size: 20px;
    letter-spacing: 0;
  }
`;
