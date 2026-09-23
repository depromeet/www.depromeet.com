import { css } from '@emotion/react';

import { colors } from '~/styles/colors';
import { theme } from '~/styles/theme';

export const ProjectTitleSection = () => {
  return (
    <div css={titleContainerCss}>
      <h1 css={titleCss}>Project</h1>
    </div>
  );
};

const titleContainerCss = css`
  width: 100%;
`;

const titleCss = css`
  ${theme.typosV4.instrumentSans.head3};
  color: ${colors.v19.coolGray900};
  margin: 0;

  @media (min-width: 768px) {
    ${theme.typosV4.instrumentSans.head1};
  }
`;
