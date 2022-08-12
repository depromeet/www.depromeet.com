import { Section } from 'common/components';
import { useDeviceContext } from 'common/hooks';

import { stepA, stepB, stepC, stepD } from '../../assets';

import Step from './Step';

export default function Schedule() {
  const device = useDeviceContext();

  return (
    <Section>
      <Section.Title css={device === 'mobile' && { fontSize: 16 }}>
        14주간 여정
        {device !== 'mobile' && <Section.SubText>DEPROMEET 11기는 매주 토요일 14주간 진행됩니다.</Section.SubText>}
      </Section.Title>

      <Section.Content css={{ display: 'grid', rowGap: 32 }}>
        {steps.map((step, index) => (
          <Step key={`steps-${index}`} step={step} index={index} />
        ))}
      </Section.Content>
    </Section>
  );
}

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
