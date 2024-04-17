import Image from 'next/image';
import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

export function Intro() {
  return (
    <section css={containerCss}>
      <div css={bgImageCss}>
        <Image
          src="/images/main/intro-img.svg"
          alt="15기 모집 인트로 이미지"
          width={1024}
          height={780}
        />
      </div>
    </section>
  );
}

const containerCss = css`
  padding-top: 61px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.blue};

  ${mediaQuery('mobile')} {
    padding-top: 75px;
  }
`;

const bgImageCss = css`
  top: 20px;

  img {
    width: 1024px;
    height: 780px;

    @media screen and (max-width: 1024px) {
      width: 100%;
      height: auto;
    }
  }

  ${mediaQuery('pc')} {
    top: 0;
  }
`;
