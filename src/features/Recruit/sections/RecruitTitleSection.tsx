import Image from 'next/image';
import { css } from '@emotion/react';

import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

export function RecruitTitleSection() {
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');

  return (
    <section css={sectionCss}>
      <div>
        <h1 id="title">
          <Image
            width={isMobileSize ? 248.438 : 300}
            height={isMobileSize ? 39.375 : 84}
            src={
              isMobileSize
                ? '/images/17th/recruitment-title-mobile.svg'
                : '/images/17th/recruitment-title.svg'
            }
            alt="디프만 17기 모집 안내"
          />
        </h1>
      </div>
      <div css={descriptionCss}>
        <div>2025.06.30 - 07.06</div>
        <div>
          <span>depromeet 17.0</span>
        </div>
      </div>
    </section>
  );
}

const sectionCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  background-image: url('/images/project/17기/17th-project-background.png');
  background-size: 100% auto;
  background-position: center top;
  background-repeat: no-repeat;
  gap: 36px;

  & > div {
    width: 100%;
    max-width: 1100px;
  }

  & #title {
    padding: 103px 48px 26px;

    ${mediaQuery('mobile')} {
      padding: 76px 24px 16px;
    }
  }
`;

const descriptionCss = css`
  display: flex;
  gap: 68px;
  width: 100%;
  max-width: 1100px;
  padding: 0 48px;
  color: ${theme.colors.primary.darknavy};
  ${theme.typosV3.MartianMono.body2}

  & > span {
    padding: 9px;
  }

  ${mediaQuery('mobile')} {
    flex-direction: column;
    gap: 12px;
    padding: 0 24px;
  }
`;
