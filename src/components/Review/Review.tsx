import { css } from '@emotion/react';

import { ReviewItem } from '~/components/Review/ReviewItem';
import { SectionTitle } from '~/components/SectionTitle';
import { Swiper } from '~/components/Swiper';
import { REVIEWS } from '~/constant/review';

export function Review() {
  return (
    <div css={layoutCss}>
      <SectionTitle label="Review" title="지난 기수 후기" />
      <Swiper.Wrapper
        spaceBetween={20}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 0,
        }}
        speed={8000}
      >
        {REVIEWS.map(({ ...info }) => (
          <ReviewItem key={info.name} {...info} />
        ))}
      </Swiper.Wrapper>
    </div>
  );
}

const layoutCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
