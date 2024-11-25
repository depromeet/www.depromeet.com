import Link from 'next/link';
import { css, Theme } from '@emotion/react';

import { Icon } from '~/components/Icon/Icon';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

export function BlogSubscribeSection() {
  return (
    <section css={containerCss}>
      <article css={articleCss}>
        <Icon icon={'ic_letter'} />
        <div css={descriptionCss}>
          <span>
            모집 공고와 활동 이야기 등 <br /> 디프만의 최신 소식을 뉴스레터로 보내드려요
          </span>
        </div>
        <Link href="https://depromeet.stibee.com/subscribe/" css={linkCss}>
          디프만 뉴스레터 구독하기
        </Link>
      </article>
    </section>
  );
}

const containerCss = (theme: Theme) => css`
  height: 530px;
  display: flex;
  flex-direction: column;
  padding: 80px 60px 120px 60px;
  gap: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.white};

  ${mediaQuery('mobile')} {
    padding: 80px 20px;
  }
`;

const articleCss = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.colors.grey['100']};
  padding: 36px 16px 40px 16px;
  width: 100%;
  max-width: 500px;
  max-width: 900px;
  height: auto;
  border-radius: 20px;
`;

const descriptionCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  margin-top: 18px;
  margin-bottom: 24px;

  span {
    ${theme.typosV2.pretendard.semibold26};
    color: ${theme.colors.grey['900']};
  }

  ${mediaQuery('mobile')} {
    span {
      ${theme.typosV2.pretendard.semibold20}
    }
  }
`;

const linkCss = (theme: Theme) => css`
  ${theme.typosV2.pretendard.semibold16}
  padding: 12px 30px;
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
