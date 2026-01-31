import { css } from '@emotion/react';

import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';

export const ProjectTitleSection = () => {
  return (
    <div css={titleContainerCss}>
      <h1 css={titleCss}>Project</h1>
    </div>
  );
};

const titleContainerCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1920px) {
    width: 1280px;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    width: 880px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    width: 688px;
  }

  ${mediaQuery('mobile')} {
    max-width: 320px;
    width: 100%;
  }
`;

const titleCss = css`
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 700;
  font-size: 60px;
  line-height: 1.4;
  letter-spacing: 0.6px;
  color: ${colors.grey18['900']};
  white-space: nowrap;

  ${mediaQuery('mobile')} {
    font-size: 40px;
    letter-spacing: -0.4px;
  }
`;
