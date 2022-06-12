import styled from '@emotion/styled';

import { Device } from 'common/contexts/device';
import { useDeviceContext } from 'common/hooks';

import { stepA, stepB, stepC, stepD } from '../assets';

import Step from './Step';

export default function Schedule() {
  const device = useDeviceContext();

  return (
    <>
      <Title device={device} css={device === 'mobile' && { fontSize: 16 }}>
        14주간 여정
        {device !== 'mobile' && <SubText>Depromeet 11기는 매주 토요일 14주간 진행됩니다.</SubText>}
      </Title>

      <div css={{ display: 'grid', rowGap: 32 }}>
        {steps.map((step, index) => (
          <Step key={`steps-${index}`} step={step} index={index} />
        ))}
      </div>
    </>
  );
}

const Title = styled.h3<{ device: Device }>`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: -0.3px;
  color: #fff;

  margin-bottom: 40px;
`;

const SubText = styled.sub`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 2px;
  text-transform: uppercase;

  color: #fff;
  vertical-align: center;
  margin-left: 24px;
`;

const steps = [
  {
    duration: 'O.T, 1~2weeks ',
    desc: <>온라인 레크레이션 및 팀 구성, 서비스 기획, MVP 도출</>,
    lottie: stepA,
  },
  {
    duration: '3~7weeks',
    desc: (
      <>
        Hi-fi 디자인 및 개발 진행,
        <br />
        중간 발표
      </>
    ),
    lottie: stepB,
  },
  {
    duration: '8~9weeks',
    desc: (
      <>
        서비스 런칭 후 데이터와
        <br />
        마케팅 계획 수립
      </>
    ),
    lottie: stepC,
  },
  {
    duration: '10~14weeks',
    desc: (
      <>
        데이터 분석 및 서비스 개선,
        <br />
        최종 발표
      </>
    ),
    lottie: stepD,
  },
];
