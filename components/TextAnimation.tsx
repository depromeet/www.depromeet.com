import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { LongArrow } from '../public';
import StepLottie from './StepLottie';
import { stepA, stepD } from '../resources/lottie';
import { media } from '../styles/theme';

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);

const TextAnimation = () => {
  const startTrigger = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);

  useEffect(() => {
    const config = {
      scrollTrigger: {
        scrub: 1,
      },
      x: 1000,
      duration: 1,
    };

    gsap.to(text1.current, config);
    gsap.to(text3.current, config);
    gsap.to(text2.current, {
      ...config,
      x: -1000,
    });
  }, []);

  return (
    <Container ref={startTrigger}>
      <div className="svg__stepD">
        <StepLottie lottie={stepD} />
      </div>
      <div className="svg__stepA">
        <StepLottie lottie={stepA} />
      </div>
      <div className="text">
        <div className="text__content" ref={text1}>
          Programmer
          <div className="text__arrow">
            <LongArrow />
          </div>
          Designer
          <div className="text__arrow">
            <LongArrow />
          </div>
          Programmer
        </div>
        <div className="text__content" ref={text2}>
          Depromeet 10th
          <div className="text__arrow left">
            <LongArrow />
          </div>
          2021 Meet
          <div className="text__arrow left">
            <LongArrow />
          </div>
          Depromeet 10th
        </div>
        <div className="text__content text__content--mobile" ref={text3}>
          Depromeet
          <div className="text__arrow">
            <LongArrow />
          </div>
          Depromeet
          <div className="text__arrow">
            <LongArrow />
          </div>
          Depromeet
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
  .svg {
    &__stepD {
      position: absolute;
      width: 17.7rem;
      top: -5rem;
      left: 92.7rem;
      ${media.mobile} {
        width: 14rem;
        top: 1.5rem;
        left: 30rem;
      }
    }
    &__stepA {
      position: absolute;
      width: 17.7rem;
      bottom: -5rem;
      right: 103rem;
      ${media.mobile} {
        width: 14rem;
        right: 25rem;
        bottom: -7.6rem;
      }
    }
  }
  .text {
    font-family: Montserrat;
    font-weight: 900;
    font-size: 12rem;
    line-height: 14.6rem;
    white-space: nowrap;
    ${media.mobile} {
      line-height: 4rem;
      font-size: 3.4rem;
    }
    &__content {
      display: flex;
      margin-bottom: 6rem;
      :last-child {
        margin-bottom: 0;
      }
      ${media.mobile} {
        margin-bottom: 4rem;
        position: relative;
        :last-child {
          margin-bottom: 0;
        }
      }
      &--mobile {
        display: none;
        ${media.mobile} {
          display: flex;
        }
      }
    }
    &__arrow {
      margin: 0 4rem;
      &.left {
        transform: rotate(180deg);
      }
      ${media.mobile} {
        width: 5rem;
        display: flex;
        width: 5.3rem;
        height: 4.4rem;
        margin: 0 2rem;
        align-items: center;
      }
    }
  }
`;

export default TextAnimation;
