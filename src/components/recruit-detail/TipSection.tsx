import { css } from '@emotion/react';
import { Carousel } from 'react-responsive-carousel';

import { colors } from '~/styles/constants';

import { sectionCss } from './RecruitDetail.style';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function TipSection() {
  return (
    <section css={sectionCss}>
      <Carousel
        css={CarouselCss}
        showArrows
        showStatus={false}
        showThumbs={true}
        infiniteLoop
        renderArrowPrev={RenderArrowPrev}
        renderArrowNext={RenderArrowNext}
        renderIndicator={RenderIndicator}
      >
        <div css={CarouselBoxCss}>1</div>
        <div css={CarouselBoxCss}>2</div>
        <div css={CarouselBoxCss}>3</div>
      </Carousel>
    </section>
  );
}

const RenderArrowPrev = (clickHandler: () => void) => {
  return (
    <div css={prevCss} onClick={clickHandler}>
      이전
    </div>
  );
};
const RenderArrowNext = (clickHandler: () => void) => {
  return (
    <div css={nextCss} onClick={clickHandler}>
      다음
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
  height: 328px;
  width: 100%;
`;

const CarouselBoxCss = css`
  width: 100%;
  margin: 0 auto;
  min-height: 250px;
  max-width: 1080px;
`;

const nextCss = css`
  position: absolute;
  z-index: 10;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;
const prevCss = css`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
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
