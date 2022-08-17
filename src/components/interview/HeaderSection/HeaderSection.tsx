import { css } from '@emotion/react';

export default function HeaderSection() {
  return (
    <header
      css={css`
        position: relative;
        width: 100vw;
        left: calc(-50vw + 50%);
        height: 400px;
        background-color: gray;
      `}
    >
      아마도 그래픽
    </header>
  );
}
