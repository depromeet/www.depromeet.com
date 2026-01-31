import { css } from '@emotion/react';

import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

export const BlogTitleSection = () => {
  return (
    <div css={titleContainerCss}>
      <h1 css={titleCss}>Blog</h1>
    </div>
  );
};

const titleContainerCss = css`
  width: 100%;
  padding: 0 0 24px 0;

  ${mediaQuery('tablet')} {
    padding: 0 0 20px 0;
  }

  ${mediaQuery('mobile')} {
    padding: 0 0 16px 0;
  }
`;

const titleCss = css`
  ${theme.typosV2.pretendard.bold44};
  color: ${colors.grey18['900']};
  margin: 0;

  ${mediaQuery('tablet')} {
    ${theme.typosV2.pretendard.bold32};
  }

  ${mediaQuery('mobile')} {
    ${theme.typosV2.pretendard.bold28};
  }
`;
