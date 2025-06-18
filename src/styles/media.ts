export const SIZE = {
  mobile: 767,
  tablet: 1023,
  pc: 1024,
} as const;

export const size = {
  mobile: `${SIZE.mobile}px`,
  tablet: `${SIZE.tablet}px`,
  pc: `${SIZE.pc}px`,
} as const;

export type SizeKey = keyof typeof size;

export function mediaQuery(maxWidth: number): string;

export function mediaQuery(mediaKey: SizeKey): string;

export function mediaQuery(prop: number | SizeKey) {
  if (typeof prop === 'number') return `@media (max-width: ${prop}px)`;
  if (prop === 'pc') return `@media (min-width: ${size[prop]}px)`;
  return `@media (max-width: ${size[prop]})`;
}
