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
      {/* TODO: 디프만 stibee 주소 기입 필요 */}
      <Link href="https://stibee.com/" css={linkCss}>
        <span>디프만 뉴스레터 구독하기</span>
      </Link>
    </section>
  );
}

const containerCss = css`
  height: 530px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
`;

const descriptionCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;

  h1 {
    ${theme.typos.notosans.semibold32}

    span {
      color: ${theme.colors.blue};
    }
  }

  h3 {
    ${theme.typos.notosans.regular20}
    color: #555555;
  }

  ${mediaQuery('mobile')} {
    h1 {
      ${theme.typos.notosans.semibold24}
    }

    h3 {
      ${theme.typos.notosans.regular16}
    }
  }
`;

const linkCss = css`
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
`;