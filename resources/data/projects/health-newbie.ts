import { ProjectData } from '../interface';
import { healthNewbieIcon, healthNewbieImage } from '../../images/projects';

const projectHealthNewbie: ProjectData = {
  title: '3대 얼마',
  catchphrase: '헬린이 철 들기 프로젝트',
  generation: 8,
  team: '2조',
  desingers: ['김민효', '김종훈', '추지효'],
  backends: ['조민국', '최문경'],
  frontends: ['오기환 (iOS)', '유영평 (Android)', '황견주 (Android)'],
  description:
    "'3대 얼마'는 보디빌딩 3대 종목인 벤치프레스, 데드리프트, 스쿼트의 총 합 무게를 증명하는 공간입니다. 점진적 과부화를 위해 꾸준한 3대 기록으로 근육을 성장시키고 서로 피드백을 받아 헬스 친구를 만들 수 있습니다.",
  icon: healthNewbieIcon,
  image: healthNewbieImage,
};

export default projectHealthNewbie;
