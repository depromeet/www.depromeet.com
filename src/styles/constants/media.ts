export const SIZE = {
  xs: 650,
  sm: 960,
  md: 1280,
  lg: 1400,
  xl: 1920,
} as const;

export const size = {
  xs: `${SIZE.xs}px`,
  sm: `${SIZE.sm}px`,
  md: `${SIZE.md}px`,
  lg: `${SIZE.lg}px`,
  xl: `${SIZE.xl}px`,
} as const;

export type SizeKey = keyof typeof size;

export function mediaQuery(maxWidth: number): string;

export function mediaQuery(mediaKey: SizeKey): string;

export function mediaQuery(prop: number | SizeKey) {
  if (typeof prop === 'number') return `@media (max-width: ${prop}px)`;

  return `@media (max-width: ${size[prop]})`;
}
