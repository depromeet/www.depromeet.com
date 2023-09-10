import { PropsWithChildren } from 'react';

import { Swiper } from '~/components/Swiper';

interface ReviewWrapperProps {}

export function ReviewWrapper({ children }: PropsWithChildren<ReviewWrapperProps>) {
  return (
    <Swiper.Wrapper
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 0,
      }}
      speed={8000}
    >
      {children}
    </Swiper.Wrapper>
  );
}
