import { ComponentProps } from 'react';

import { PositionsItem } from '~/components/Positions/PositionsItem';

export const POSITIONS: Array<ComponentProps<typeof PositionsItem>> = [
  { type: 'design', title: 'UX/UI DESIGN', link: '' },
  { type: 'ios', title: 'IOS', link: '' },
  { type: 'aos', title: 'ANDROID', link: '' },
  { type: 'web', title: 'WEB', link: '' },
  { type: 'server', title: 'SERVER', link: '' },
];
