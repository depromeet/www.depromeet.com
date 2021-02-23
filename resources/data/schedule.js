import {
  stepA, stepB, stepC, stepD,
} from '../lottie';

export const steps = [
  {
    duration: 'O.T, 1~3weeks ',
    desc: (<>온라인 레크레이션 및 팀 구성,<br />서비스 기획, MVP 도출</>),
    lottie: stepA,
  },
  {
    duration: '3~7weeks',
    desc: (<>디자인 및 개발 진행, <br />중간 발표</>),
    lottie: stepB,
  },
  {
    duration: '8~10weeks',
    desc: (<>서비스 런칭 및 데이터 수집,<br />직군별 세미나 주최</>),
    lottie: stepC,
  },
  {
    duration: '11~13weeks',
    desc: (<>데이터 분석 및 서비스 개선,<br />최종 발표</>),
    lottie: stepD,
  },
];
