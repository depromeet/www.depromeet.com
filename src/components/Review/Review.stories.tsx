import { css } from '@emotion/react';
import type { Meta } from '@storybook/react';

import { Review } from './index';

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
