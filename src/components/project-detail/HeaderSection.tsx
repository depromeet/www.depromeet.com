import { css } from '@emotion/react';

import { PROJECTS_IMAGE_BASE } from '~/constants/images';
import { mediaQuery } from '~/styles/constants';

import { Project } from '../project/constants';

export default function HeaderSection({ image }: Project) {
  return (
    <section css={sectionCss}>
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${PROJECTS_IMAGE_BASE}/${image})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
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
