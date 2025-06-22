import { css } from '@emotion/react';

import { colors } from '~/styles/colors';

import { mediaQuery } from './media';

const baseGridColor = `${colors.primary.blue}4A`;

export const sectionBg = css`
  background-color: ${colors.primary.gray};
  background-image: linear-gradient(to right, ${baseGridColor} 1px, ${colors.primary.gray} 1px);

  background-position: calc(50% - 32px) 0;
  background-size: 64px 100%;

  ${mediaQuery('mobile')} {
    background-position: 50% 0;
    background-size: 32px 100%;
  }
`;

export const generateCrossSvg = ({
  width = 256,
  height = 256,
  stroke = '#478AF44A',
  thickness = 2,
  offset = 10,
}) => {
  const half = width / 2;
  return `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <line x1="${half}" y1="${half - offset}" x2="${half}" y2="${
    half + offset
  }" stroke="${stroke}" stroke-width="${thickness}" />
      <line x1="${half - offset}" y1="${half}" x2="${
    half + offset
  }" y2="${half}" stroke="${stroke}" stroke-width="${thickness}" />
    </svg>
  `.trim();
};

export const encodeSvg = (svg: string) => `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;

const crossSvg = encodeSvg(generateCrossSvg({}));
const crossSvgMobile = encodeSvg(
  generateCrossSvg({
    width: 128,
    height: 128,
    offset: 8,
    thickness: 1.5,
  })
);

export const sectionGridBg = css`
  background-color: ${colors.primary.gray};

  background-image: linear-gradient(${baseGridColor} 1px, transparent 1px),
    linear-gradient(90deg, ${baseGridColor} 1px, transparent 1px), ${crossSvg};

  background-size: 64px 64px, 64px 64px, 256px 256px;

  background-position: calc(50% - 32px) -50px, calc(50% - 32px) -50px, 50% -50px;

  ${mediaQuery('mobile')} {
    background-image: linear-gradient(${baseGridColor} 1px, transparent 1px),
      linear-gradient(90deg, ${baseGridColor} 1px, transparent 1px), ${crossSvgMobile};

    background-size: 32px 32px, 32px 32px, 128px 128px;

    background-position: calc(50% - 16px) -50px, calc(50% - 16px) -50px, 50% -50px;
  }
`;
