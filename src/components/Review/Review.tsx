import { css } from '@emotion/react';
import Marquee from 'react-fast-marquee';

import { ReviewItem } from '~/components/Review/ReviewItem';
import { SectionTitle } from '~/components/SectionTitle';
import { REVIEWS } from '~/constant/review';

export function Review() {
  return (
    <section css={layoutCss}>
      <SectionTitle label="Review" title="지난 기수 후기" />
      <Marquee>
        {REVIEWS.map(({ ...info }) => (
          <ReviewItem key={info.name} {...info} />
        ))}
      </Marquee>
    </section>
  );
}

const layoutCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
