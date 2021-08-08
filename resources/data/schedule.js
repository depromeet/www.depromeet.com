import { stepA, stepB, stepC, stepD } from '../lottie';

export const steps = [
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
