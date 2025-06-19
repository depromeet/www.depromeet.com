import Image from 'next/image';
import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/media';

export const BlogRulerDecoration = () => {
  return (
    <div css={rulerImageContainerCss}>
      <Image src="/images/blog/footer-ruler.png" alt="ruler decoration" fill css={rulerImageCss} />
    </div>
  );
};

const rulerImageContainerCss = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 20px;
  z-index: 1;

  ${mediaQuery('mobile')} {
    height: 30px;
  }
`;

const rulerImageCss = css`
  object-fit: cover;
  object-position: center;
`;
