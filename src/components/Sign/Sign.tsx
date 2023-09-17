import Image from 'next/image';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

const signPathGroup = ['/about', '/recruit', '/project'];

export function Sign() {
  const router = useRouter();
  const path = router.pathname;

  if (!signPathGroup.includes(path)) return <></>;

  return (
    <div css={imageContainerCss}>
      <Image src={`/images/sign${path}.png`} width={960} height={290} alt="sign" />
    </div>
  );
}

const imageContainerCss = css`
  display: flex;
  justify-content: center;
`;
