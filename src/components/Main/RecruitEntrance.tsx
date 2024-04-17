import Image from 'next/image';
import { css, Theme } from '@emotion/react';

import { mediaQuery } from '~/styles/media';

import { LinkButton } from './LinkButton';

export function RecruitEntrance() {
  return (
    <section css={layoutCss}>
      <div css={descriptionCss}>
        <div>
          <Image
            src="/images/main/left-bracket.svg"
            alt="모집 안내 설명 시작"
            width={16}
            height={163}
          />
        </div>
        <h1>
          함께 몰입하고 성장하며,
          <br />
          배움을 공유할 수 있는,
          <br />
          디프만 15기를 모집합니다.
        </h1>
        <div>
          <Image
            src="/images/main/right-bracket.svg"
            alt="모집 안내 설명 끝"
            width={16}
            height={163}
          />
        </div>
      </div>
      <div css={imgFlexCss}>
        <Image
          src="/images/main/responsibility-clock.svg"
          alt="인재상중 책임감"
          width={292}
          height={292}
        />
        <Image src="/images/main/digging-clock.svg" alt="인재상중 몰입" width={292} height={292} />
        <Image src="/images/main/share-clock.svg" alt="인재상중 공유" width={292} height={292} />
      </div>
      <LinkButton color="black" text="모집 안내" />
    </section>
  );
}

const layoutCss = (theme: Theme) => css`
  padding: 120px 0;
  height: 894px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background-color: ${theme.colors.blue};
  overflow: hidden;

  ${mediaQuery('tablet')} {
    gap: 20px;
  }

  ${mediaQuery('mobile')} {
    gap: 16px;
  }
`;

const descriptionCss = (theme: Theme) => css`
  display: flex;
  gap: 20px;
  align-items: center;

  h1 {
    ${theme.typos.notosans.semibold24};
    text-align: center;
  }

  ${mediaQuery('mobile')} {
    h1 {
      ${theme.typos.notosans.semibold20};
    }

    img {
      width: 15px;
      height: 150px;
    }
  }
`;

const imgFlexCss = css`
  display: flex;
  gap: 24px;
`;
