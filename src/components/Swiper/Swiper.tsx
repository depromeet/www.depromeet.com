import { PropsWithChildren, useRef } from 'react';
import { css } from '@emotion/react';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import * as SwiperReact from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

interface SwiperProps extends SwiperReact.SwiperProps {}
/**
 * 사용법은 story 참고해주세요!
 */
export function SwiperWrapper({ children, ...props }: PropsWithChildren<SwiperProps>) {
  const swiperRef = useRef<SwiperReact.SwiperRef>(null);

  return (
    <SwiperReact.Swiper
      ref={swiperRef}
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      css={swiperWrapperCss}
      {...props}
    >
      {children}
    </SwiperReact.Swiper>
  );
}

const swiperWrapperCss = css`
  > .swiper-wrapper {
    transition-timing-function: linear;
  }
`;
