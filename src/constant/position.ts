import { ComponentProps } from 'react';

import { PositionsItem } from '~/components/Positions/PositionsItem';

export const POSITIONS: Array<ComponentProps<typeof PositionsItem>> = [
  { type: 'design', title: 'UX/UI DESIGN', link: process.env.NEXT_PUBLIC_GREETING_DESIGN ?? '' },
  { type: 'ios', title: 'IOS', link: process.env.NEXT_PUBLIC_GREETING_IOS ?? '' },
  { type: 'aos', title: 'ANDROID', link: process.env.NEXT_PUBLIC_GREETING_AOS ?? '' },
  { type: 'web', title: 'WEB', link: process.env.NEXT_PUBLIC_GREETING_WEB ?? '' },
  { type: 'server', title: 'SERVER', link: process.env.NEXT_PUBLIC_GREETING_SERVER ?? '' },
];
