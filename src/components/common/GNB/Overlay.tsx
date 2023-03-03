import { css } from '@emotion/react';

interface Props {
  close: VoidFunction;
}

export default function Overlay({ close }: Props) {
  return <div onClick={close} css={overlayCss} />;
}

const overlayCss = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9000;
`;
