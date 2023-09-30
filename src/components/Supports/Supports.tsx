import { css } from '@emotion/react';

import { SectionTitle } from '~/components/SectionTitle';
import { SupportThumbnail } from '~/components/Supports/SupportThumbnail';
import { SUPPORTS } from '~/constant/supports';
import { commonLayoutCss } from '~/styles/layout';
import { mediaQuery } from '~/styles/media';

export function Supports() {
  return (
    <div css={[commonLayoutCss, layoutCss]}>
      <SectionTitle label="Supports" title="후원사 소개" />
      <ul css={supportContainerCss}>
        {SUPPORTS.map(support => (
          <SupportThumbnail key={support.title} {...support} />
        ))}
        <SupportThumbnail.OnlyImage title="what's next?" img="/images/support/next.png" />
      </ul>
    </div>
  );
}

const layoutCss = css`
  margin-top: 150px;
  ${mediaQuery('tablet')} {
    margin-top: 150px;
  }
  ${mediaQuery('mobile')} {
    margin-top: 100px;
  }
`;

const supportContainerCss = css`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: flex-start;
  justify-content: center;
`;
