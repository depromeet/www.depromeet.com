import { css } from '@emotion/react';

import { sectionGridBg } from '~/styles/background';
import { theme } from '~/styles/theme';

import { PositionCard } from './PositionCard';

export const PositionGrid = () => {
  const positions = [
    {
      id: 'product-designer',
      title: 'Product Designer',
      subtitle: '리서치·UX·UI·디자인시스템',
      color: '#FF6B9D', // 핑크
      isActive: true,
      hoverDescription:
        '직군 설명 어쩌구 저쩌구구우우웅웅 프로덕트 디자이너 설명 어쩌구 저쩌구구우우웅웅프로덕트 디자이너 설명 어쩌구 저쩌구구우우웅웅프로덕트 디자이너 설명 어쩌구 저쩌구구우우웅웅',
    },
    {
      id: 'android-developer',
      title: 'Android Developer',
      subtitle: 'Android·Kotlin·Git',
      color: '#6B73FF', // 보라
      isActive: true,
      hoverDescription:
        '안드로이드 개발자로서 모바일 앱 개발의 전반적인 과정을 담당합니다. Kotlin과 Java를 활용하여 사용자 친화적인 앱을 만들고, 최신 안드로이드 기술 스택을 적용합니다.',
    },
    {
      id: 'ios-developer',
      title: 'iOS Developer',
      subtitle: 'iOS·Swift·Git',
      color: '#73B9FF', // 파랑
      isActive: true,
      hoverDescription:
        'iOS 개발자로서 Swift를 활용하여 아이폰과 아이패드용 앱을 개발합니다. 애플의 디자인 가이드라인을 준수하며 사용자 경험을 최우선으로 하는 앱을 만듭니다.',
    },
    {
      id: 'server-developer',
      title: 'Server Developer',
      subtitle: 'Backend·Infra·Git',
      color: '#9E9E9E', // 회색
      isActive: true,
      hoverDescription:
        '서버 개발자로서 백엔드 시스템 설계와 API 개발을 담당합니다. 클라우드 인프라 구축과 데이터베이스 설계, 성능 최적화를 통해 안정적인 서비스를 제공합니다.',
    },
    {
      id: 'web-developer',
      title: 'Web Developer',
      subtitle: 'Frontend·React·Git',
      color: '#FFD93D', // 노랑
      isActive: true,
      hoverDescription:
        '웹 개발자로서 프론트엔드 개발을 담당합니다. React, TypeScript 등 최신 기술을 활용하여 사용자 인터페이스를 구현하고, 반응형 웹사이트를 제작합니다.',
    },
  ];

  return (
    <div css={containerStyles}>
      <div css={gridStyles}>
        {/* 첫 번째 행: o o o x */}
        <PositionCard {...positions[0]} />
        <PositionCard {...positions[1]} />
        <PositionCard {...positions[2]} />
        <div css={emptySlotStyles}></div>

        {/* 두 번째 행: x x o o */}
        <div css={recruitmentMessageStyles}>
          디프만은 다섯개의 직군에서
          <br />
          신규 회원을 모집하고 있습니다.
        </div>
        <div css={emptySlotStyles}></div>
        <PositionCard {...positions[3]} />
        <PositionCard {...positions[4]} />
      </div>
    </div>
  );
};

const containerStyles = css`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  ${sectionGridBg};
`;

const gridStyles = css`
  display: grid;
  grid-template-columns: repeat(4, 240px);
  grid-template-rows: repeat(2, 302px);
  gap: 24px;
  justify-content: center;
`;

const emptySlotStyles = css`
  width: 240px;
  height: 302px;
`;

const recruitmentMessageStyles = css`
  width: 240px;
  height: 302px;
  display: flex;
  align-items: center;
  font-size: 18px;
  color: ${theme.colors.primary.darknavy};
  line-height: 1.5;
  background: transparent;
`;
