import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { RightArrow, LeftArrow } from '../public';
import StepLottie from './StepLottie';
import { stepA, stepD } from '../resources/lottie';

gsap.registerPlugin(ScrollTrigger);

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const TextAnimation = () => {
  const startTrigger = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);

  useEffect(() => {
    const config = {
      scrollTrigger: {
        scrub: 1,
      },
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
          Programmer
          <div className="text__arrow"><RightArrow /></div>
          Designer
          <div className="text__arrow"><RightArrow /></div>
          Programmer
        </div>
        <div className="text__content" ref={text2}>
          Depromeet 9th
          <div className="text__arrow"><LeftArrow /></div>
          2020 Meet
          <div className="text__arrow"><LeftArrow /></div>
          Depromeet 9th
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
      left: 40.7rem;
    }
    &__stepA {
      position: absolute;
      width: 17.7rem;
      bottom: -5rem;
      right: 47rem;
    }
  }
  .text {
    font-family: Montserrat;
    font-weight: 900;
    font-size: 12rem;
    white-space: nowrap;
    &__content {
      display: flex;
      &:last-child {
        margin-top: 6rem;
      }
    }
    &__arrow {
      margin: 0 4rem;
    }
  }
`;

export default TextAnimation;
