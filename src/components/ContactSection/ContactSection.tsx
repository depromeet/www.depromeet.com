import { css } from '@emotion/react';

import { DEPROMEET_EMAIL } from '~/constant/depromeet';
import { sectionBg } from '~/styles/background';
import { theme } from '~/styles/theme';

export const ContactSection = () => {
  return (
    <>
      <div css={containerStyles}>
        <div css={contentStyles}>
          <h2 css={titleStyles}>궁금한 점이 있으신가요?</h2>
          <div css={cardGridStyles}>
            <a href="https://pf.kakao.com/_xoxmcxed" target="_blank" rel="noreferrer">
              <div css={cardStyles}>
                <div css={cardHeaderStyles}>
                  <h3 css={cardTitleStyles}>카카오톡 문의</h3>
                </div>
                <p css={contactInfoStyles}>@depromeet</p>
              </div>
            </a>

            <a href={DEPROMEET_EMAIL}>
              <div css={cardStyles}>
                <div css={cardHeaderStyles}>
                  <h3 css={cardTitleStyles}>이메일 문의</h3>
                </div>
                <p css={contactInfoStyles}>depromeet@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div css={rulerCss} />
    </>
  );
};

const containerStyles = css`
  width: 100%;
  padding: 80px 20px;
  ${sectionBg};
`;

const contentStyles = css`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const titleStyles = css`
  ${theme.typosV3.pretendard.head1};
  color: ${theme.colors.primary.darknavy};
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 40px;
  }
`;

const cardGridStyles = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const cardStyles = css`
  background: ${theme.colors.primary.gray};
  border: 1px solid ${theme.colors.primary.blue};

  padding: 40px 24px;
  text-align: left;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    padding: 32px 20px;
  }
`;

const cardHeaderStyles = css`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const cardTitleStyles = css`
  font-size: 20px;
  font-weight: 600;
  color: ${theme.colors.primary.darknavy};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const contactInfoStyles = css`
  font-size: 16px;
  color: black;
  margin: 0;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const rulerCss = css`
  left: 0;
  bottom: 0;
  width: 100%;
  height: 20px;
  background-image: url('/images/project/17기/footer-ruler.png');
  background-size: cover;
  background-position: bottom;
  background-repeat: repeat-x;
  background-color: ${theme.colors.primary.gray};
`;
