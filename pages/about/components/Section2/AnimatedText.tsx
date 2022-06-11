import { useRef, useEffect, Fragment } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { Arrow as Content, Circle, Glitter } from '../../images';
import { Device, useDeviceContext } from 'contexts/device';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedText() {
  const device = useDeviceContext();

  const firstLineRef = useRef(null);
  const secondLineRef = useRef(null);

  useEffect(() => {
    const options = { duration: 1, scrollTrigger: { scrub: 1 } };

    gsap.to(firstLineRef.current, { ...options, x: 150 });
    gsap.to(secondLineRef.current, { ...options, x: -150 });
  }, []);

  return (
    <Container>
      <CircleDecoration device={device}>
        <Circle />
      </CircleDecoration>

      <GlitterDecoration device={device}>
        <Glitter />
      </GlitterDecoration>

      <AnimationWrapper device={device}>
        <Line device={device} ref={firstLineRef}>
          {firstLineText
            .flatMap((text, index, { length }) =>
              index === 0 || index === length - 1
                ? [text]
                : [
                    <Arrow device={device}>
                      <Content />
                    </Arrow>,
                    text,
                  ],
            )
            .map((element, index) => (
              <Fragment key={index}>{element}</Fragment>
            ))}
        </Line>

        <Line device={device} ref={secondLineRef}>
          {secondLineText
            .flatMap((text, index, { length }) =>
              index === 0 || index === length - 1
                ? [text]
                : [
                    text,
                    <Arrow device={device} css={{ transform: 'rotate(180deg)' }}>
                      <Content />
                    </Arrow>,
                  ],
            )
            .map((element, index) => (
              <Fragment key={index}>{element}</Fragment>
            ))}
        </Line>
      </AnimationWrapper>
    </Container>
  );
}

const firstLineText = ['designer', 'programmer', '2022 meet', 'designer', 'programmer'];
const secondLineText = ['programmer', '2022 meet', 'designer', 'programmer', '2022 meet'];

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const CircleDecoration = styled.div<{ device: Device }>`
  position: absolute;
  bottom: -120px;
  right: 1030px;

  ${({ device }) =>
    device === 'tablet'
      ? css`
          bottom: -140px;
          right: 60%;
        `
      : device === 'mobile'
      ? css`
          bottom: -130px;
          right: 60%;

          svg {
            width: 70px;
          }
        `
      : null}
`;

const GlitterDecoration = styled.div<{ device: Device }>`
  position: absolute;
  top: -50px;
  left: 957px;

  ${({ device }) =>
    device === 'tablet'
      ? css`
          top: -35px;
          left: 60%;
        `
      : device === 'mobile'
      ? css`
          top: -75px;
          left: 60%;

          svg {
            width: 100px;
          }
        `
      : null}
`;

const AnimationWrapper = styled.div<{ device: Device }>`
  position: relative;

  font-family: Montserrat;
  font-weight: 800;
  font-size: 60px;
  line-height: 146px;

  text-transform: uppercase;
  white-space: nowrap;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      line-height: 40px;
      font-size: 30px;
    `}
`;

const Line = styled.div<{ device: Device }>`
  display: flex;

  :last-child {
    position: absolute;
    margin-bottom: 0;
    right: 0;
  }

  ${({ device }) =>
    device === 'mobile' &&
    css`
      position: relative;
      margin-bottom: 4rem;

      :last-child {
        margin-bottom: 0;
      }
    `}
`;

const Arrow = styled.div<{ device: Device }>`
  display: flex;
  align-items: center;

  width: 60px;
  margin: 0 40px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      display: flex;
      align-items: center;

      height: 44px;
      width: 30px;
      margin: 0 12px;
    `}
`;
