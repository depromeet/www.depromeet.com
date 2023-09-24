import { css } from '@emotion/react';

import { OfflineThumbnail } from '~/components/OfflineSession/OfflineThumbnail';
import { SectionTitle } from '~/components/SectionTitle';
import { OFFLINE_SESSIONS } from '~/constant/offline';
import { commonLayoutCss } from '~/styles/layout';
import { mediaQuery } from '~/styles/media';

export function OfflineSession() {
  return (
    <div css={[commonLayoutCss, layoutCss]}>
      <SectionTitle label="Offline Activity" title="오프라인 세션" />
      <ul css={sessionContainerCss}>
        {OFFLINE_SESSIONS.map(session => (
          <OfflineThumbnail key={session.title} {...session} showInfoDefault backgroundShow />
        ))}
      </ul>
    </div>
  );
}

const layoutCss = css``;

const sessionContainerCss = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 12px;
  ${mediaQuery('tablet')} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mediaQuery('mobile')} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
