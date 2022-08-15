import { css } from '@emotion/react';

import HeaderSection from '~/components/home/HeaderSection';
import RecordSection from '~/components/home/RecordSection';

export default function Root() {
  return (
    <main>
      <HeaderSection />
      <RecordSection />

      <div
        css={css`
          height: 3000px;
        `}
      ></div>
    </main>
  );
}
