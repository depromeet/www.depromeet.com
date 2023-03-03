import { useEffect, useRef } from 'react';
import { css } from '@emotion/react';

import useCursorState from '~/store/cursor/useCursorState';

const CURSOR_URL = '/common/cursor.webp';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLSpanElement>(null);
  const { cursorState } = useCursorState();

  useEffect(() => {
    if (cursorRef == null || cursorRef.current == null) return;

    function handleMouseMove(e: MouseEvent) {
      cursorRef.current?.setAttribute(
        'style',
        `top: ${e.pageY}px;` + `left: ${e.pageX}px; display: inline`
      );
    }
    document.addEventListener('mousemove', handleMouseMove);

    function handleMouseOut() {
      cursorRef.current?.setAttribute('style', `display: none`);
    }
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return <span css={[cursorCss, cursorState === 'hover' && hoverCss]} ref={cursorRef} />;
}

const cursorCss = css`
  /* NOTE: 초기 값 */
  top: 1000px;

  background-image: url(${CURSOR_URL});
  background-size: contain;
  width: 32px;
  height: 32px;
  position: absolute;
  pointer-events: none;
  z-index: 9999;

  transition: transform 0.3s cubic-bezier(0.6, -0.05, 0.01, 0.99);
  transform-origin: left top;
`;

const hoverCss = css`
  /* NOTE: 44px */
  transform: scale(1.375);
`;
