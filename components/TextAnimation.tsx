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

  useEffect(() => {
    const config = {
      x: 1000,
      duration: 1,
    };

    gsap.to(text1.current, config);
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
          designer
          <div className="text__arrow">
            <LongArrow />
          </div>
          programmer
          <div className="text__arrow">
            <LongArrow />
          </div>
          2022 meet
        </div>
        <div className="text__content" ref={text2}>
          programmer
          <div className="text__arrow left">
            <LongArrow />
          </div>
          2022 meet
          <div className="text__arrow left">
            <LongArrow />
          </div>
          designer
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
  font-family: Gmarket Sans;

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
    text-transform: uppercase;
    font-weight: 800;
    font-size: 60px;
    line-height: 14.6rem;
    white-space: nowrap;

    ${media.mobile} {
      font-size: 40px;
      line-height: 4rem;
    }

    &__content {
      display: flex;
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
      display: flex;
      align-items: center;
      margin: 0 2rem;
      width: 55px;

      &.left {
        transform: rotate(180deg);
      }
      ${media.mobile} {
        display: flex;
        width: 35px;
        height: 4.4rem;
        margin: 0 2rem;
        align-items: center;
      }
    }
  }
`;

export default TextAnimation;
