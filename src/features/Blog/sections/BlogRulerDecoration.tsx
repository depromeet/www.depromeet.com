import Image from 'next/image';
import { css } from '@emotion/react';

import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { mediaQuery } from '~/styles/media';

export const BlogRulerDecoration = () => {
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');

  const imageSrc = isMobileSize
    ? '/images/blog/footer-ruler_mobile.png'
    : '/images/blog/footer-ruler.png';

  return (
    <div css={rulerImageContainerCss}>
      <Image src={imageSrc} alt="ruler decoration" fill css={rulerImageCss} />
    </div>
  );
};

const rulerImageContainerCss = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 30px;
  z-index: 1;

  ${mediaQuery('mobile')} {
    height: 30px;
  }
`;

const rulerImageCss = css`
  object-fit: cover;
  object-position: center;
`;
