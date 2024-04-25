import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { css, Theme } from '@emotion/react';

import { mediaQuery } from '~/styles/media';

import { LinkWrapper } from './LinkWrapper';
import { NarrowArrowIcon } from '../Icons';

export function RecruitEntrance() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const currentWidth = window.innerWidth;
    ref.current.scrollLeft = currentWidth / 2 - (currentWidth > 700 ? currentWidth / 3 : 0);
  }, []);

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
      <div css={imgFlexCss} ref={ref}>
        <Image
          src="/images/main/responsibility-clock.svg"
          alt="인재상중 책임감"
          width={316}
          height={292}
        />
        <Image src="/images/main/digging-clock.svg" alt="인재상중 몰입" width={292} height={292} />
        <Image src="/images/main/share-clock.svg" alt="인재상중 공유" width={316} height={292} />
      </div>
      <LinkWrapper href="/project" textColor="white" textHover={true}>
        모집 안내
        <span css={arrowImgContainerCss}>
          <NarrowArrowIcon direction="right" color="black" fill="black" />
        </span>
      </LinkWrapper>
    </section>
  );
}

const layoutCss = (theme: Theme) => css`
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  gap: 100px;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.blue};
  overflow: hidden;

  ${mediaQuery('tablet')} {
    gap: 56px;
  }
`;

const descriptionCss = (theme: Theme) => css`
  display: flex;
  gap: 20px;
  align-items: center;

  h1 {
    ${theme.typosV2.pretendard.semibold24};
    text-align: center;
  }

  ${mediaQuery('mobile')} {
    h1 {
      ${theme.typosV2.pretendard.semibold20};
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

  @media (max-width: 800px) {
    width: 100%;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    scrollbar-width: none; /* FireFox */
    &::-webkit-scrollbar {
      /* Chrome, Safari, Edge, ... */
      display: none;
    }

    img {
      flex: 0 0 40%;
      scroll-snap-align: center;
    }
  }

  ${mediaQuery('mobile')} {
    img {
      flex: 0 0 60%;
    }
  }
`;

const arrowImgContainerCss = css`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 400px;
  background-color: white;
`;
