import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import { sectionGridBg } from '~/styles/background';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';

export const IntroSection = () => {
  const [isClientReady, setIsClientReady] = useState<boolean>(false);

  useEffect(() => {
    setIsClientReady(true);
  }, []);

  return (
    <>
      <div css={containerCss}>
        {isClientReady && (
          <>
            <div css={recruitmentCss}>Recruitment</div>
            <div css={dateCss}>
              <span>2025.07.01 - 2025.07.11</span>
              <span>depromeet 17.0</span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

const containerCss = css`
  width: 100%;
  margin-top: 60px;
  padding: 48px 0 26px 48px;

  ${sectionGridBg};

  ${mediaQuery('mobile')} {
    min-height: 0;
    aspect-ratio: 2/1;
    margin-top: 72px;
  }
`;

const recruitmentCss = css`
  color: ${colors.grey['900']};
  font-size: 100px;
`;

const dateCss = css`
  color: ${colors.grey['900']};
  margin-top: 26px;
  font-size: 20px;
  display: flex;
  gap: 68px;
`;
