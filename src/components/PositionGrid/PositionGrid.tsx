import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import useIsApplyTime from '~/hooks/useIsApplyTime';

import { PositionCard } from './PositionCard';

/** 순서: Design, Android, iOS, Server, Web */
const APPLY_URLS = [
  'https://01owexg4.ninehire.site/job_posting/TfqjWoxO', // Product Designer
  'https://01owexg4.ninehire.site/job_posting/gCbRwvgi', // Android
  'https://01owexg4.ninehire.site/job_posting/TvN63rIi', // iOS
  'https://01owexg4.ninehire.site/job_posting/f3zG7SvK', // Server
  'https://01owexg4.ninehire.site/job_posting/gmTwerXt', // Web
];

export const PositionGrid = () => {
  const [isTabletOrSmaller, setIsTabletOrSmaller] = useState(false);
  const isApplyTime = useIsApplyTime();

  useEffect(() => {
    const checkSize = () => {
      setIsTabletOrSmaller(window.innerWidth < 1280);
    };

    checkSize();
    window.addEventListener('resize', checkSize);

    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  const positions = [
    {
      id: 'product-designer',
      title: 'Product \nDesigner',
      subtitle: '리서치 · UX · UI · 디자인시스템',
      isActive: true,
      imageConfig: {
        src: '/images/18th/recruit/img_design.png',
      },
      hoverDescription:
        '프로덕트 디자이너로서 Figma를 이용해 화면을 디자인하고 개발자와 소통하며 프로덕트를 만듭니다. UX 리서치부터 UI 설계까지 사용자 중심의 사고로 제품 전반의 디자인을 주도하며, 논리적인 사고를 바탕으로 팀과 원활하게 협업합니다.',
      applyUrl: '',
    },
    {
      id: 'android-developer',
      title: 'Android \nDeveloper',
      subtitle: 'Android · Kotlin · Git',
      isActive: true,
      imageConfig: {
        src: '/images/18th/recruit/img_android.png',
      },
      hoverDescription:
        '안드로이드 개발자로서 Kotlin 언어에 대한 이해를 바탕으로, Jetpack Compose 또는 XML을 활용한 UI를 개발합니다. Retrofit 등의 서버 통신 경험과 안드로이드 생태계에 대한 이해를 바탕으로 서비스 흐름을 파악하고, 안정적인 앱 출시를 이끌어냅니다.',
      applyUrl: '',
    },
    {
      id: 'ios-developer',
      title: 'iOS \nDeveloper',
      subtitle: 'iOS · Swift · Git',
      isActive: true,
      imageConfig: {
        src: '/images/18th/recruit/img_ios.png',
      },
      hoverDescription:
        'iOS 개발자로서 Swift에 대한 이해를 바탕으로, UIKit 또는 SwiftUI를 활용한 UI를 개발합니다. URLSession, Alamofire, Moya 등을 이용한 API 통신 경험을 갖추고 있으며, 팀과 협업하여 앱스토어에 서비스를 성공적으로 배포합니다.',
      applyUrl: '',
    },
    {
      id: 'server-developer',
      title: 'Server \nDeveloper',
      subtitle: 'Backend · Infra · Git',
      isActive: true,
      imageConfig: {
        src: '/images/18th/recruit/img_server.png',
      },
      hoverDescription:
        '서버 개발자로서 프로젝트 초기 설계부터 인프라 구축까지 주도적으로 참여하며, 웹 서버 프레임워크를 활용해 프로덕트를 만듭니다. 프로덕트의 문제를 정의하고, 팀과의 협업을 통해 요구사항을 정리한 뒤, 이를 바탕으로 데이터 구조를 설계하고 구현합니다.',
      applyUrl: '',
    },
    {
      id: 'web-developer',
      title: 'Web \nDeveloper',
      subtitle: 'Frontend · React · Git',
      isActive: true,
      imageConfig: {
        src: '/images/18th/recruit/img_web.png',
      },
      hoverDescription:
        '웹 개발자로서 Git과 협업 도구에 익숙하며, HTTP 통신에 대한 기본적인 이해를 갖추고 있습니다. REST API 기반의 프론트엔드 개발 경험을 바탕으로 React, Vue, Angular 등 모던 자바스크립트 프레임워크를 활용해 사용자와 맞닿는 서비스를 구현합니다.',
      applyUrl: '',
    },
  ];

  return (
    <>
      {isTabletOrSmaller ? (
        <>
          <section css={sectionStyles}>
            <div css={mobileContainerStyles}>
              <PositionCard {...positions[0]} applyUrl={isApplyTime ? APPLY_URLS[0] : ''} />
              <PositionCard {...positions[1]} applyUrl={isApplyTime ? APPLY_URLS[1] : ''} />
              <PositionCard {...positions[2]} applyUrl={isApplyTime ? APPLY_URLS[2] : ''} />
              <PositionCard {...positions[3]} applyUrl={isApplyTime ? APPLY_URLS[3] : ''} />
              <PositionCard {...positions[4]} applyUrl={isApplyTime ? APPLY_URLS[4] : ''} />
            </div>
          </section>
        </>
      ) : (
        <>
          <section css={sectionStyles}>
            <div css={containerStyles}>
              <div css={gridStyles}>
                <PositionCard {...positions[0]} applyUrl={isApplyTime ? APPLY_URLS[0] : ''} />
                <PositionCard {...positions[1]} applyUrl={isApplyTime ? APPLY_URLS[1] : ''} />
                <PositionCard {...positions[2]} applyUrl={isApplyTime ? APPLY_URLS[2] : ''} />
                <PositionCard {...positions[3]} applyUrl={isApplyTime ? APPLY_URLS[3] : ''} />
                <PositionCard {...positions[4]} applyUrl={isApplyTime ? APPLY_URLS[4] : ''} />
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

const sectionStyles = css`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`;

const containerStyles = css`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 120px;
`;

const mobileContainerStyles = css`
  display: grid;
  width: 100%;
  max-width: 688px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  align-items: stretch;
  justify-items: stretch;
  justify-content: center;
  padding: 24px 40px 0 40px;
  gap: 8px;
  margin: 0 auto;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 20px 0 20px;
    gap: 20px;
    max-width: 100%;
  }
`;

const gridStyles = css`
  display: grid;
  grid-template-columns: repeat(5, 230px);
  gap: 12px;
  justify-content: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  @media (min-width: 1280px) and (max-width: 1919px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 12px;
    max-width: 880px;

    & > div:nth-child(1),
    & > div:nth-child(2),
    & > div:nth-child(3) {
      grid-column: span 2;
    }

    & > div:nth-child(4) {
      grid-column: 2 / 4;
    }

    & > div:nth-child(5) {
      grid-column: 4 / 6;
    }
  }
`;
