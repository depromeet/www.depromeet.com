import styled from 'styled-components';

import { media } from '../../styles/theme';
import Image from 'next/image';
import { Device } from '../../contexts/device';
import SNSBox from './SNSBox';

type Props = {
  device: Device;
};

export default function Box({ device }: Props) {
  return (
    <Container>
      {device !== 'desktop' && (
        <DPMLogoWrapper>
          <Image src="/dpm.png" alt="dpm" width="217" height="69.5" />
        </DPMLogoWrapper>
      )}
      <Title>
        <p>궁금한 것이 있거나</p>
        <p>문의 사항이 있으신가요?</p>
      </Title>
      <SubTitle>
        <p>디자인과 개발 관련된 일상적인 대화도</p>
        <p>언제든지 환영합니다.</p>
      </SubTitle>
      <SNSBox />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: min(100%, 461px);
  padding: 0 10%;
  color: #fff;

  ${media.tablet} {
    text-align: center;
  }
`;

const DPMLogoWrapper = styled.div`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 900;
  line-height: 140%;

  ${media.mobile} {
    text-align: center;
    font-size: 24px;
    line-height: 36px;
  }
`;

const SubTitle = styled.div`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;

  ${media.mobile} {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
  }
`;
