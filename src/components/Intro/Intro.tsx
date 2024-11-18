import Image from 'next/image';
import { css } from '@emotion/react';

import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';

type IntroProps = {
  imageUrl: string;
  title: string;
  width: number;
  height: number;
  color: keyof typeof colors | string;
};

export function Intro({ imageUrl, title, width, height, color }: IntroProps) {
  const getColor = (color: string) => {
    const keys = color.split('.');
    let current: any = colors;

    for (const key of keys) {
      if (!current[key]) {
        throw new Error(`Invalid color key: ${color}`);
      }
      current = current[key];
    }

    if (typeof current !== 'string') {
      throw new Error(`Color key '${color}' points to a nested object, not a string.`);
    }

    return current;
  };
  return (
    <section css={containerCss({ color: getColor(color) })}>
      <div css={bgImageCss}>
        <Image src={imageUrl} alt={title} width={width} height={height} priority />
      </div>
    </section>
  );
}

const containerCss = ({ color }: { color: string }) => css`
  padding-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color};

  ${mediaQuery('mobile')} {
    padding-top: 72px;
  }
`;

const bgImageCss = () => css`
  top: 20px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: cover;

    ${mediaQuery('mobile')} {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  ${mediaQuery('pc')} {
    top: 0;
  }
`;
