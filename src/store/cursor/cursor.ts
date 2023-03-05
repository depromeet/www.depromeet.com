import { atom } from 'jotai';

type CursorState = 'hover' | 'default';

export const cursorStateAtom = atom<CursorState>('default');
