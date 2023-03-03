import { HTMLAttributes } from 'react';

import useCursorState from '~/store/cursor/useCursorState';

export function ClickableButton({ children, ...props }: HTMLAttributes<HTMLButtonElement>) {
  const { onMouseEnter, onMouseLeave } = useCursorState();

  return (
    <button {...props} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </button>
  );
}
