import { css } from '@emotion/react';
import type { Meta } from '@storybook/react';

import { REVIEWS } from '~/constant/review';

import { Review } from './index';
import { ReviewItem as ReviewItemComponent } from './ReviewItem';

const meta: Meta<typeof Review> = {
  title: 'components/Review',
};

export default meta;

export const Primary = {
  render: () => (
    <div
      css={css`
        background-color: #070814;
      `}
    >
      <Review />
    </div>
  ),
};

export const ReviewItem = {
  render: () => {
    return <ReviewItemComponent {...REVIEWS[1]} />;
  },
};
