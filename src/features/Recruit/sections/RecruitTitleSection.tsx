import Image from 'next/image';
import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

export function RecruitTitleSection() {
  return (
    <section css={sectionCss}>
      <div>
        <h1 id="title">
          <Image
            width={530}
            height={84}
            src="/images/17th/recruitment-title.svg"
            alt="디프만 17기 모집 안내"
            css={imageCss}
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

  ${mediaQuery('mobile')} {
    gap: 0px;
  }
`;

const imageCss = css`
  ${mediaQuery('mobile')} {
    width: 248.438px;
    height: 39.375px;
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

  & > div {
    width: fit-content;
    padding: 4px 0;
    background-color: ${theme.colors.primary.gray};
  }

  & > span {
    padding: 9px;
  }

  ${mediaQuery('mobile')} {
    flex-direction: column;
    gap: 4px;
    padding: 0 24px;
  }
`;
