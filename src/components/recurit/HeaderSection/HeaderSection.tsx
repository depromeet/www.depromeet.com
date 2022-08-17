import { css } from '@emotion/react';

export default function HeaderSection() {
  return (
    <header css={headerCss}>
      <p>지원받는다~</p>
    </header>
  );
}

const headerCss = css`
  width: 100%;
  height: 100vh;
`;
