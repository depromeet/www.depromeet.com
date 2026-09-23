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
    <main css={errorContainerCss} data-gnb-theme="dark">
      <Image src={ERROR_IMAGE} alt="error image" width={316} height={316} />
      <p css={errorDescriptionCss}>페이지 이동 중 문제가 생겼어요</p>
      <button css={returnButtonCss} onClick={onButtonClick}>
        메인으로 돌아가기
      </button>
    </main>
  );
}

// TODO(19th-design): C-19 — 404 페이지 시안이 없어 배경만 19기 네이비로 맞춘다.
const errorContainerCss = (theme: Theme) => css`
  padding: 180px 0 120px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;

  background-color: ${theme.colors.v19.blue900};

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
  // 배경이 네이비로 바뀌어 상속된 검정 글자는 읽히지 않는다.
  color: ${theme.colors.v19.white100};

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
  // 네이비 배경 위에서는 검정 버튼이 묻힌다. 밝은 면에서 쓰는 다크 필의 반전형.
  color: ${theme.colors.v19.blue900};
  background-color: ${theme.colors.v19.white100};

  ${mediaQuery('mobile')} {
    padding: 12px 28px;
    width: 200px;
    height: 50px;
    ${theme.typosV2.pretendard.semibold16};
  }
`;
