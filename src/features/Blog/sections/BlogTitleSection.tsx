import { css } from '@emotion/react';

import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';

export const BlogTitleSection = () => {
  return (
    <div css={titleContainerCss}>
      <h1 css={titleCss}>Blog</h1>
    </div>
  );
};

const titleContainerCss = css`
  width: 100%;
`;

const titleCss = css`
  font-size: 60px;
  font-weight: 700;
  line-height: 1.2;
  color: ${colors.grey18['900']};
  margin: 0;

  ${mediaQuery('mobile')} {
    font-size: 40px;
  }
`;
