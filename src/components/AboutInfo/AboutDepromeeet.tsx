import { css } from '@emotion/react';

import { JourneyEntrance } from '../Main';
import { OfflineSession } from '../OfflineSession';

export default function AboutDepromeeet() {
  return (
    <div css={layoutCss} style={{ backgroundColor: '#f4f4f4' }}>
      <JourneyEntrance hasLinkButton={false} style={journeyEntranceCss} />
      <OfflineSession />
    </div>
  );
}

const layoutCss = css`
  background-color: '#F4F4F4';
`;

const journeyEntranceCss = css`
  padding: 0;
`;
