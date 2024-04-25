import Image from 'next/image';
import { css, Theme } from '@emotion/react';

import { mediaQuery } from '~/styles/media';

export function Ending() {
  return (
    <section css={containerCss}>
      <div css={bgImageCss}>
        <Image
          src="/images/main/ending-img.svg"
          alt="15기 모집 엔딩 이미지"
          width={1024}
          height={700}
        />
      </div>
      <h1>
        디프만은 여러분을
        <br />
        기다리고 있습니다.
      </h1>
    </section>
  );
}

const containerCss = (theme: Theme) => css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.blue};

  h1 {
    position: absolute;
    bottom: 10px;
    left: calc(50% - 118px);
    ${theme.typosV2.pretendard.semibold32}
  }

  ${mediaQuery('tablet')} {
    h1 {
      left: calc(50% - 85px);
      ${theme.typosV2.pretendard.semibold24}
    }
  }

  ${mediaQuery('mobile')} {
    h1 {
      left: calc(50% - 76px);
      ${theme.typosV2.pretendard.semibold20}
    }
  }
`;

const bgImageCss = css`
  img {
    vertical-align: bottom;
    width: 1024px;
    height: 700px;

    @media screen and (max-width: 1024px) {
      width: 100%;
      height: auto;
    }
  }
`;
