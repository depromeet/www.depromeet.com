import Image from 'next/image';
import { css, Theme } from '@emotion/react';

import { mediaQuery } from '~/styles/media';

type IntroProps = {
  imageUrl: string;
  title: string;
  width: number;
  height: number;
};

type ImageSize = {
  width: number;
  height: number;
};

const MAX_WIDTH = 1024;

export function Intro({ imageUrl, title, width, height }: IntroProps) {
  return (
    <section css={containerCss}>
      <div css={bgImageCss({ width, height })}>
        <Image src={imageUrl} alt={title} width={width} height={height} />
      </div>
    </section>
  );
}

const containerCss = (theme: Theme) => css`
  padding-top: 61px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.blue};

  ${mediaQuery('mobile')} {
    padding-top: 75px;
  }
`;

const bgImageCss = (props: ImageSize) => css`
  top: 20px;

  img {
    width: ${props.width}px;
    height: ${props.height}px;

    @media screen and (max-width: ${MAX_WIDTH}px) {
      width: 100%;
      height: auto;
    }
  }

  ${mediaQuery('pc')} {
    top: 0;
  }
`;
