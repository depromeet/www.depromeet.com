export const size = {
  xs: '650px',
  sm: '960px',
  md: '1280px',
  lg: '1400px',
  xl: '1920px',
} as const;

type SizeKey = keyof typeof size;

export function mediaQuery(maxWidth: number): string;

export function mediaQuery(mediaKey: SizeKey): string;

export function mediaQuery(prop: number | SizeKey) {
  if (typeof prop === 'number') return `@media (max-width: ${prop}px)`;

  return `@media (max-width: ${size[prop]})`;
}
