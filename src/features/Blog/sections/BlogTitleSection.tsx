import Image from 'next/image';
import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/media';

export const BlogTitleSection = () => {
  return (
    <div css={titleImageContainerCss}>
      <Image
        src="/images/blog/17th-blog.png"
        alt="Blog"
        width={190}
        height={64}
        css={titleImageCss}
      />
    </div>
  );
};

const titleImageContainerCss = css`
  align-self: center;
  max-width: 1100px;
  width: 100%;
  padding-inline: 48px;
  padding-top: 47px;
  padding-bottom: 26px;

  ${mediaQuery('tablet')} {
    padding-left: 0;
  }

  ${mediaQuery('mobile')} {
    padding-left: 0;
    padding-top: 55px;
  }
`;

const titleImageCss = css`
  object-fit: contain;
  width: auto;
  height: 90px;

  ${mediaQuery('tablet')} {
    width: auto;
    height: 85px;
  }

  ${mediaQuery('mobile')} {
    width: auto;
    height: 40px;
  }
`;
