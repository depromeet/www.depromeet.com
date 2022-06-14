import Image from 'next/image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Device } from 'common/contexts/device';
import { useDeviceContext } from 'common/hooks';

import SNSBox from './SNSBox';

export default function Box() {
  const device = useDeviceContext();

  return (
    <Container device={device}>
      {device !== 'desktop' && (
        <DPMLogoWrapper>
          <img src="/dpm.png" alt="dpm" width={217} height={70} />
        </DPMLogoWrapper>
      )}

      <Title device={device}>
        <p>궁금한 것이 있거나</p>
        <p>문의 사항이 있으신가요?</p>
      </Title>

      <SubTitle device={device}>
        <p>디자인과 개발 관련된 일상적인 대화도</p>
        <p>언제든지 환영합니다.</p>
      </SubTitle>

      <SNSBox />
    </Container>
  );
}

const Container = styled.div<{ device: Device }>`
  position: relative;
  width: min(100%, 461px);
  padding: 0 10%;
  color: #fff;

  ${({ device }) =>
    device !== 'desktop' &&
    css`
      text-align: center;
    `}
`;

const DPMLogoWrapper = styled.div`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`;

const Title = styled.div<{ device: Device }>`
  font-size: 36px;
  font-weight: 900;
  line-height: 140%;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      text-align: center;
      font-size: 24px;
      line-height: 36px;
    `}
`;

const SubTitle = styled.div<{ device: Device }>`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      margin-top: 10px;
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
      text-align: center;
    `}
`;
