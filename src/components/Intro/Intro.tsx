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

export function Intro({ imageUrl, title, width, height, color }: IntroProps) {
  return (
    <section css={containerCss({ color: theme.colors[color] })}>
      <div css={bgImageCss({ width, height })}>
        <Image src={imageUrl} alt={title} fill priority />
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
  position: relative;
  width: 100%;
  max-width: 1024px;
  height: ${props.height}px;

  ${mediaQuery('pc')} {
    top: 0;
  }
`;
