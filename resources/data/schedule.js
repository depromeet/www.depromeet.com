import {
  stepA, stepB, stepC, stepD,
} from '../lottie';

export const steps = [
  {
    duration: '1~3 주차',
    desc: (<>팀 선별, 아이디어 회의<br />MVP 도출, 스타일 가이드 제작</>),
    lottie: stepA,
  },
  {
    duration: '4~7 주차',
    desc: (<>프로덕트 개발</>),
    lottie: stepB,
  },
  {
    duration: '8~9 주차',
    desc: (<>프로덕트 출시 및 중간 발표</>),
    lottie: stepC,
  },
  {
    duration: '10~13 주차',
    desc: (<>데이터 수집/분석, 서비스 개선<br />최종 발표</>),
    lottie: stepD,
  },
];
