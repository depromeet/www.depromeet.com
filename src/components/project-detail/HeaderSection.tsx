import Image from 'next/image';
import { css } from '@emotion/react';

import { PROJECTS_IMAGE_BASE } from '~/constants/images';
import { mediaQuery } from '~/styles/constants';

import { Project } from '../project/constants';

export default function HeaderSection({ image, title }: Project) {
  return (
    <section css={sectionCss}>
      <Image
        key={title}
        src={`${PROJECTS_IMAGE_BASE}/${image}`}
        alt={title}
        fill
        priority
        quality={100}
        placeholder="blur"
        blurDataURL={`${PROJECTS_IMAGE_BASE}/${image}`}
        css={css`
          object-fit: cover;
        `}
      />
    </section>
  );
}

const sectionCss = css`
  position: relative;
  width: 100%;
  height: 667px;
  overflow: hidden;

  ${mediaQuery('md')} {
    height: 500px;
  }

  ${mediaQuery('sm')} {
    height: 400px;
  }

  ${mediaQuery('xs')} {
    height: 174px;
  }
`;
