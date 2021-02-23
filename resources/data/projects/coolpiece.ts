import { ProjectData } from '../interface';

const projectCoolpiece: ProjectData = {
  title: '쿨피스',
  catchphrase: '에어컨 사용 요금 측정 서비스',
  generation: 6,
  team: '',
  desingers: ['노경래', '서수민'],
  frontends: ['유현식 (Android)'],
  description: `원룸러분들 방에서 에어컨 킬 때 전기세가 많이 나올까 걱정되지 않나요? 에어컨 
  사용량에 따른 예상 전기 요금을 알려드립니다. 캘린더에 하루 사용시간을 입력하면 이번 달 전기 요금을
  알 수 있습니다. 또한 지난 과거에 나온 전기 요금도 알 수 있습니다.`,
  image: '/img-coolpiece.png',
  icon: '/icon-coolpiece.png',
  android: 'https://play.google.com/store/apps/details?id=com.depromeet.tmj.cool_fees',
};
export default projectCoolpiece;
