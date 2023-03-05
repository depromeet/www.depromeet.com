import { useAtom } from 'jotai';

import { cursorStateAtom } from './cursor';

export default function useCursorState() {
  const [cursorState, setCursorState] = useAtom(cursorStateAtom);

  function onMouseEnter() {
    setCursorState('hover');
  }

  function onMouseLeave() {
    setCursorState('default');
  }

  return { cursorState, onMouseEnter, onMouseLeave };
}
