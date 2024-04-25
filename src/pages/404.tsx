import Image from 'next/image';
import { useRouter } from 'next/router';
import { css, Theme } from '@emotion/react';

import { mediaQuery } from '~/styles/media';

const ERROR_IMAGE = `/images/error/404-clock.svg`;
export default function NotFound() {
  const router = useRouter();

  const onButtonClick = () => {
    router.push('/');
  };

  return (
    <main css={errorContainerCss}>
      <Image src={ERROR_IMAGE} alt="error image" width={316} height={316} />
      <p css={errorDescriptionCss}>페이지 이동 중 문제가 생겼어요</p>
      <button css={returnButtonCss} onClick={onButtonClick}>
        메인으로 돌아가기
      </button>
    </main>
  );
}

const errorContainerCss = (theme: Theme) => css`
  padding: 180px 0 120px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;

  background-color: ${theme.colors.blue};

  ${mediaQuery('mobile')} {
    padding: 180px 0 120px 0;

    img {
      width: 240px;
      height: 240px;
    }
  }
`;

const errorDescriptionCss = (theme: Theme) => css`
  ${theme.typosV2.pretendard.semibold32};
  text-align: center;

  ${mediaQuery('mobile')} {
    ${theme.typosV2.pretendard.semibold24};
  }
`;

const returnButtonCss = (theme: Theme) => css`
  padding: 16px 40px;
  width: 240px;
  height: 62px;
  border-radius: 400px;
  ${theme.typosV2.pretendard.semibold20};
  color: white;
  background-color: black;

  ${mediaQuery('mobile')} {
    padding: 12px 28px;
    width: 200px;
    height: 50px;
    ${theme.typosV2.pretendard.semibold16};
  }
`;
