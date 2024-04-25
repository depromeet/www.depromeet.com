import { css, Theme } from '@emotion/react';

import { OfflineThumbnail } from '~/components/OfflineSession/OfflineThumbnail';
import { OFFLINE_SESSIONS } from '~/constant/offline';
import { commonLayoutCss } from '~/styles/layout';
import { mediaQuery } from '~/styles/media';

import { SectionTitleV2 } from '../SectionTitleV2';

export function OfflineSession() {
  return (
    <div css={[commonLayoutCss, conatinerCss]}>
      <SectionTitleV2 style={titleCss}>오프라인 세션</SectionTitleV2>
      <ul css={sessionContainerCss}>
        {OFFLINE_SESSIONS.map(session => (
          <OfflineThumbnail key={session.title} {...session} />
        ))}
      </ul>
    </div>
  );
}

const conatinerCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`;

const sessionContainerCss = css`
  display: grid;
  width: 100%;
  max-width: 960px;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
  column-gap: 12px;

  ${mediaQuery('tablet')} {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 32px;
  }

  ${mediaQuery('mobile')} {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 16px;
  }
`;

const titleCss = (theme: Theme) => css`
  ${theme.typos.notosans.semibold20}
`;
