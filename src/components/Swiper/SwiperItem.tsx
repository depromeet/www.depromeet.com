import { PropsWithChildren } from 'react';
import * as SwiperReact from 'swiper/react';

type SwiperCardProps = PropsWithChildren;

export const SwiperItem = ({ children, ...rest }: SwiperCardProps) => {
  return <SwiperReact.SwiperSlide {...rest}>{children}</SwiperReact.SwiperSlide>;
};

// displayName 고정 (참고: https://github.com/depromeet/Ding-dong-fe/pull/88)
SwiperItem.displayName = 'SwiperSlide';
