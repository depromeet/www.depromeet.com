import Image from 'next/image';
import { css } from '@emotion/react';
import { Carousel } from 'react-responsive-carousel';

import { colors, mediaQuery } from '~/styles/constants';
import { section40HeadingCss, sectionSmallCss } from '~/styles/css';

import { POSITION_TIPS, POSITION_TYPE, PositionType, TIP_BASE_IMAGE_URL } from './constants';
import { sectionCss, sectionHeadingCss } from './RecruitDetail.style';
import { ArrowIcon } from '../common/icons';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function TipSection({ positionType }: { positionType: PositionType }) {
  return (
    <section css={sectionCss}>
      <div css={sectionHeadingCss}>
        <small css={sectionSmallCss}>TIP</small>
        <h2 css={section40HeadingCss}>디프만 전 멤버들의 지원 꿀팁</h2>
      </div>
      <Carousel
        showArrows
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        renderArrowPrev={RenderArrowPrev}
        renderArrowNext={RenderArrowNext}
        renderIndicator={RenderIndicator}
      >
        {POSITION_TIPS[POSITION_TYPE[positionType]].map(item => (
          <div key={item.name} css={CarouselCss}>
            <div css={CarouselBoxCss}>
              <div css={carouselImageCss}>
                <Image
                  src={`${TIP_BASE_IMAGE_URL}/${item.name}.webp`}
                  width="80"
                  height="80"
                  alt={`${item.name}의 사진`}
                  quality={100}
                />
              </div>
              <h3>
                {item.name} {item.position}
              </h3>
              <small>
                {item.classList.map(classIndex => (
                  <span key={classIndex}> {classIndex}기 </span>
                ))}
              </small>
              <p dangerouslySetInnerHTML={{ __html: item.tip }} />
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

const RenderArrowPrev = (clickHandler: () => void) => {
  return (
    <div css={[baseArrowCss, prevCss]} onClick={clickHandler}>
      <ArrowIcon width={32} height={32} color="black" />
    </div>
  );
};
const RenderArrowNext = (clickHandler: () => void) => {
  return (
    <div css={[baseArrowCss, nextCss]} onClick={clickHandler}>
      <ArrowIcon width={32} height={32} color="black" />
    </div>
  );
};
const RenderIndicator = (
  clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
  isSelected: boolean
) => {
  return (
    <div onClick={clickHandler} css={indicatorCss(isSelected)}>
      {isSelected}
    </div>
  );
};

const CarouselCss = css`
  position: relative;
  height: 380px;
  width: 100%;

  ${mediaQuery('xs')} {
    height: 460px;
  }
`;

const CarouselBoxCss = css`
  padding-top: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  width: 100%;
  min-height: 250px;
  max-width: 1080px;

  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.3px;
  color: ${colors.black};

  h3 {
    margin-bottom: 6px;
  }

  small {
    display: flex;

    margin-bottom: 32px;

    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: ${colors.gray600};

    & > span {
      display: flex;
      align-items: center;
      &::after {
        display: inline-block;
        margin: 0 8px;
        content: '';
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: ${colors.gray600};
      }

      &:last-of-type {
        &::after {
          display: none;
        }
      }
    }
  }

  p {
    max-width: 800px;
  }

  ${mediaQuery('xs')} {
    h3 {
      margin-bottom: 10px;
    }
    small {
      margin-bottom: 30px;
    }
  }
`;

const carouselImageCss = css`
  width: 80px;
  margin-bottom: 24px;
`;

const baseArrowCss = css`
  position: absolute;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);

  ${mediaQuery('xs')} {
    display: none;
  }

  &:hover {
    svg {
      fill: ${colors.black};
      & > line,
      path {
        stroke: ${colors.gray100};
      }
    }
  }
`;

const prevCss = css`
  left: 0;
  transform: translateY(-50%) rotate(180deg);
  ${mediaQuery('xs')} {
    display: none;
  }
`;

const nextCss = css`
  right: 0;
`;

const indicatorCss = (isSelected: boolean) => css`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${isSelected ? colors.black : '#e7e8e9'};

  margin-right: 8px;

  &:last-of-type {
    margin-right: 0;
  }
`;
