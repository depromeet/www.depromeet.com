import { css, Theme } from '@emotion/react';
import Marquee from 'react-fast-marquee';

import { ReviewItem } from '~/components/Review/ReviewItem';
import { REVIEWS } from '~/constant/review';
import { sectionBg } from '~/styles/background';

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
  gap: 52px;
  align-items: center;
  overflow: hidden;
  ${sectionBg};

  h1 {
    ${theme.typosV2.pretendard.bold32}
  }
`;
