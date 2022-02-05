import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { LongArrow, MainPageIcon1, MainPageIcon2 } from '../public';
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
      x: 700,
      duration: 1,
    };

    gsap.to(text1.current, config);
    gsap.to(text3.current, config);
    gsap.to(text2.current, {
      ...config,
      x: -700,
    });
  }, []);

  return (
    <Container ref={startTrigger}>
      <div className="svg__stepD">
        {/* <StepLottie lottie={stepD} /> */}
        <MainPageIcon1 />
      </div>
      <div className="svg__stepA">
        <MainPageIcon2 />
        {/* <StepLottie lottie={stepA} /> */}
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
          <div className="text__arrow">
            <LongArrow />
          </div>
          designer
          <div className="text__arrow">
            <LongArrow />
          </div>
          programmer
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
          <div className="text__arrow left">
            <LongArrow />
          </div>
          programmer
          <div className="text__arrow left">
            <LongArrow />
          </div>
          2022 meet
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
      left: 95.7rem;

      ${media.tablet} {
        width: 10rem;
        top: -3.5rem;
        left: 60%;
      }

      ${media.mobile} {
        top: -7.5rem;

        svg {
          width: 100px;
        }
      }
    }
    &__stepA {
      position: absolute;
      width: 17.7rem;
      bottom: -12rem;
      right: 103rem;

      ${media.tablet} {
        width: 14rem;
        right: 60%;
        bottom: -14rem;
      }

      ${media.mobile} {
        bottom: -13rem;
        right: 40%;
        svg {
          width: 70px;
        }
      }
    }
  }
  .text {
    font-family: Montserrat;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 60px;
    line-height: 14.6rem;
    white-space: nowrap;
    position: relative;

    ${media.mobile} {
      line-height: 4rem;
      font-size: 30px;
    }

    &__content {
      display: flex;

      :last-child {
        margin-bottom: 0;
        position: absolute;
        right: 0;
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
      width: 60px;

      margin: 0 4rem;
      &.left {
        transform: rotate(180deg);
      }
      ${media.mobile} {
        width: 30px;
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
