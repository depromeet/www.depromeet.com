import { css, Theme } from '@emotion/react';
import Marquee from 'react-fast-marquee';

import { ReviewItem } from '~/components/Review/ReviewItem';
import { REVIEWS } from '~/constant/review';

export function Review() {
  return (
    <section css={layoutCss}>
      <h1>멤버 후기</h1>
      <Marquee>
        {REVIEWS.map(({ ...info }) => (
          <ReviewItem key={info.name} {...info} />
        ))}
      </Marquee>
    </section>
  );
}

const layoutCss = (theme: Theme) => css`
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  overflow: hidden;

  h1 {
    ${theme.typos.notosans.semibold20}
  }
`;
