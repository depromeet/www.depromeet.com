import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Device } from 'common/contexts/device';
import { useDeviceContext } from 'common/hooks';
import Lottie, { Props as LottieProps } from './Lottie';

type Props = {
  index: number;
  step: {
    duration: string;
    desc: React.ReactNode;
    lottie: LottieProps;
  };
};

export default function Step({ step, index }: Props) {
  const device = useDeviceContext();

  return (
    <Container device={device}>
      <Title css={device === 'mobile' && { justifyContent: 'space-between' }}>
        <Main device={device}>step {index + 1}</Main>
        <Sub device={device}>{step.duration}</Sub>
      </Title>

      <Content device={device}>
        <Description device={device}>{step.desc}</Description>

        {device !== 'mobile' && <div css={{ flex: 1, flexShrink: 0 }} />}

        <Motion device={device}>
          <LottieContainer>
            <Lottie {...step.lottie} />
          </LottieContainer>
        </Motion>
      </Content>
    </Container>
  );
}

const Container = styled.div<{ device: Device }>`
  position: relative;
  box-sizing: border-box;
  width: 1140px;
  height: 260px;

  border-radius: 32px;
  padding: 40px 48px;
  background-color: #191919;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      width: 100%;
      height: 180px;

      border-radius: 20px;
      padding: 22px 22px;
    `}
`;

const Title = styled.div`
  display: flex;
  align-items: center;

  font-weight: 700;
  text-transform: uppercase;
`;

const Main = styled.div<{ device: Device }>`
  font-size: 26px;
  line-height: 32px;

  color: #fff;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      font-size: 20px;
      line-height: 24px;
    `}
`;

const Sub = styled.div<{ device: Device }>`
  font-size: 16px;
  line-height: 19px;
  margin-left: 37px;

  color: #38e3a8;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      font-size: 12px;
      line-height: 14px;
    `}
`;

const Description = styled.div<{ device: Device }>`
  flex: 1;

  font-size: 36px;
  line-height: 48px;
  text-transform: uppercase;

  color: #fff;
  word-break: keep-all;
  margin-top: 24px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      flex: none;
      align-self: flex-start;
      width: 170px;

      font-size: 20px;
      line-height: 28px;

      padding-right: 20px;
    `}
`;

const Motion = styled.div<{ device: Device }>`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 10rem;

  height: 100%;
  width: 180px;
  aspect-ratio: 1/1;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      flex: 1;
      right: 16px;

      width: 80px;
      height: 80px;
      margin-top: 70px;
    `}
`;

const LottieContainer = styled.div`
  position: relative;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Content = styled.div<{ device: Device }>`
  display: flex;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
`;
