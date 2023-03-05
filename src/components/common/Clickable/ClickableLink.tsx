import { ComponentProps } from 'react';
import Link from 'next/link';

import useCursorState from '~/store/cursor/useCursorState';

export function ClickableLink({ children, ...props }: ComponentProps<typeof Link>) {
  const { onMouseEnter, onMouseLeave } = useCursorState();

  return (
    <Link {...props} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </Link>
  );
}
