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
        height={84}
        css={titleImageCss}
      />
    </div>
  );
};

const titleImageContainerCss = css`
  align-self: flex-start;
  max-width: 1200px;
  width: 100%;
  padding-inline: 48px;
  padding-top: 47px;
  padding-bottom: 26px;

  ${mediaQuery('mobile')} {
    padding-left: 20px;
  }
`;

const titleImageCss = css`
  object-fit: contain;

  ${mediaQuery('mobile')} {
    width: 150px;
    height: 60px;
  }
`;
