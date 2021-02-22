import { ProjectData } from '../interface';
import { threeDollarsImage, threeDollarsIcon } from '../../images/projects';

const project3Dollars: ProjectData = {
  title: '가슴속 3천원',
  catchphrase: '길거리 음식 찾기',
  generation: 8,
  team: '청일점',
  backends: ['전해성', '손지수', '이유리'],
  desingers: ['이윤이', '양효정'],
  frontends: ['유현식(iOS), 이윤지(Android)'],
  description: `가슴속 3천원"은 우리 가슴속에 지니고 다니는 3천원을 털어가는 붕어빵, 타코야끼, 계란빵, 호떡 등의 길거리 음식을 파는 곳을 알려드립니다.${'\n'}가슴속 3천원은 사용자 참여형 서비스인 만큼 직접 가게를 제보하여 사용자들과 함께 가게 정보를 채워나갈 수 있습니다. `,
  ios: '#',
  android: '#',
  icon: threeDollarsIcon,
  image: threeDollarsImage,
};
export default project3Dollars;
