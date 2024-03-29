import Image from 'next/image';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/media';

const signPathGroup = ['/about', '/recruit', '/project'];

export function Sign() {
  const router = useRouter();
  const path = router.pathname;

  if (!signPathGroup.includes(path)) return <></>;

  return (
    <div css={imageContainerCss}>
      <div css={imageWrapperCss}>
        <Image
          src={`/images/sign${path}.png`}
          width={960}
          height={290}
          alt="sign"
          layout="responsive"
        />
      </div>
    </div>
  );
}

const imageContainerCss = css`
  display: flex;
  justify-content: center;
  padding: 0 30px;
  margin-bottom: 200px;

  ${mediaQuery('tablet')} {
    margin-bottom: 150px;
  }

  ${mediaQuery('mobile')} {
    padding: 0 20px;
    margin-bottom: 60px;
  }
`;

const imageWrapperCss = css`
  width: 100vw;
  max-width: 1024px;
`;
