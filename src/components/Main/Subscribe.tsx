import Link from 'next/link';
import { css, Theme } from '@emotion/react';

import { mediaQuery } from '~/styles/media';

export function Subscribe() {
  return (
    <section css={containerCss}>
      <div css={descriptionCss}>
        <h1>
          매일 성장하는 디프만의 이야기가 궁금하다면?
          <br />
          <span>디프만 뉴스레터</span> 구독하기
        </h1>
        <h3>
          사이드 프로젝트, 포트폴리오, 채용 공고 등<br />
          커리어 성장을 위한 모든 이야기를 뉴스레터로 보내드려요.
        </h3>
      </div>
      <Link href="https://depromeet.stibee.com/subscribe/" css={linkCss}>
        디프만 뉴스레터 구독하기
      </Link>
    </section>
  );
}

const containerCss = (theme: Theme) => css`
  height: 530px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.lightGray};
`;

const descriptionCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;

  h1 {
    ${theme.typosV2.pretendard.semibold32}

    span {
      color: ${theme.colors.blue};
    }
  }

  h3 {
    ${theme.typosV2.pretendard.regular20}
    color: #555555;
  }

  ${mediaQuery('mobile')} {
    h1 {
      ${theme.typosV2.pretendard.semibold24}
    }

    h3 {
      ${theme.typosV2.pretendard.regular16}
    }
  }
`;

const linkCss = (theme: Theme) => css`
  width: 296px;
  height: 62px;
  padding: 16px 48px 16px 48px;
  border-radius: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: black;
  text-align: center;

  &:hover {
    color: ${theme.colors.pink};
  }
`;
