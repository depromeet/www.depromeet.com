import Image from 'next/image';
import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/media';

export const ProjectTitleSection = () => {
  return (
    <div css={titleImageContainerCss}>
      <Image
        src="/images/project/17기/17th-project-logo.png"
        alt="Project"
        width={330}
        height={84}
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
