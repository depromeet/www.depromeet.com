import Image from 'next/image';
import { css } from '@emotion/react';

import { ColorType } from '~/constant/color';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

type IntroProps = {
  imageUrl: string;
  title: string;
  width: number;
  height: number;
  color: ColorType;
};

type ImageSize = {
  width: number;
  height: number;
};

const MAX_WIDTH = 1024;

export function Intro({ imageUrl, title, width, height, color }: IntroProps) {
  return (
    <section css={containerCss({ color: theme.colors[color] })}>
      <div css={bgImageCss({ width, height })}>
        <Image src={imageUrl} alt={title} width={width} height={height} />
      </div>
    </section>
  );
}

const containerCss = ({ color }: { color: string }) => css`
  padding-top: 61px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color};

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
