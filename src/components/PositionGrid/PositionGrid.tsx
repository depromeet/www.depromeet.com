import { css } from '@emotion/react';

import { BlogRulerDecoration } from '~/features/Blog/sections/BlogRulerDecoration';
import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

import { PositionCard } from './PositionCard';

export const PositionGrid = () => {
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');
  const { isTargetSize: isTabletSize } = useCheckWindowSize('tablet');
  const positions = [
    {
      id: 'product-designer',
      title: 'Product \nDesigner',
      subtitle: '리서치·UX·UI·디자인시스템',
      isActive: true,
      backgroundImage: !isMobileSize ? '/images/17th/sliced/i1.png' : '/images/17th/sliced/f1.png',
      hoverDescription:
        '프로덕트 디자이너로서 Figma를 이용해 화면을 디자인하고 개발자와 소통하며 프로덕트를 만듭니다. UX 리서치부터 UI 설계까지 사용자 중심의 사고로 제품 전반의 디자인을 주도하며, 논리적인 사고를 바탕으로 팀과 원활하게 협업합니다.',
      applyUrl: 'https://01owexg4.ninehire.site/job_posting/Rc3jxbxM',
    },
    {
      id: 'android-developer',
      title: 'Android \nDeveloper',
      subtitle: 'Android·Kotlin·Git',
      isActive: true,
      backgroundImage: !isMobileSize ? '/images/17th/sliced/i2.png' : '/images/17th/sliced/f2.png',
      hoverDescription:
        '안드로이드 개발자로서 Kotlin 언어에 대한 이해를 바탕으로, Jetpack Compose 또는 XML을 활용한 UI를 개발합니다. Retrofit 등의 서버 통신 경험과 안드로이드 생태계에 대한 이해를 바탕으로 서비스 흐름을 파악하고, 안정적인 앱 출시를 이끌어냅니다.',
      applyUrl: 'https://01owexg4.ninehire.site/job_posting/pF3xSx1u',
    },
    {
      id: 'ios-developer',
      title: 'iOS \nDeveloper',
      subtitle: 'iOS·Swift·Git',
      isActive: true,
      backgroundImage: !isMobileSize ? '/images/17th/sliced/i3.png' : '/images/17th/sliced/f3.png',
      hoverDescription:
        'iOS 개발자로서 Swift에 대한 이해를 바탕으로, UIKit 또는 SwiftUI를 활용한 UI를 개발합니다. URLSession, Alamofire, Moya 등을 이용한 API 통신 경험을 갖추고 있으며, 팀과 협업하여 앱스토어에 서비스를 성공적으로 배포합니다.',
      applyUrl: 'https://01owexg4.ninehire.site/job_posting/GS3wiUKN',
    },
    {
      id: 'server-developer',
      title: 'Server \nDeveloper',
      subtitle: 'Backend·Infra·Git',
      isActive: true,
      backgroundImage: !isMobileSize ? '/images/17th/sliced/i4.png' : '/images/17th/sliced/f4.png',
      hoverDescription:
        '서버 개발자로서 프로젝트 초기 설계부터 인프라 구축까지 주도적으로 참여하며, 웹 서버 프레임워크를 활용해 프로덕트를 만듭니다. 프로덕트의 문제를 정의하고, 팀과의 협업을 통해 요구사항을 정리한 뒤, 이를 바탕으로 데이터 구조를 설계하고 구현합니다.',
      applyUrl: 'https://01owexg4.ninehire.site/job_posting/1CM3XyoW',
    },
    {
      id: 'web-developer',
      title: 'Web \nDeveloper',
      subtitle: 'Frontend·React·Git',
      isActive: true,
      backgroundImage: !isMobileSize ? '/images/17th/sliced/i5.png' : '/images/17th/sliced/f5.png',
      hoverDescription:
        '웹 개발자로서 Git과 협업 도구에 익숙하며, HTTP 통신에 대한 기본적인 이해를 갖추고 있습니다. REST API 기반의 프론트엔드 개발 경험을 바탕으로 React, Vue, Angular 등 모던 자바스크립트 프레임워크를 활용해 사용자와 맞닿는 서비스를 구현합니다.',
      applyUrl: 'https://01owexg4.ninehire.site/job_posting/ZcClQ2hr',
    },
  ];

  return (
    <>
      {isTabletSize || isMobileSize ? (
        <>
          <section css={sectionStyles}>
            <div css={mobileContainerStyles}>
              <PositionCard {...positions[0]} />
              <PositionCard {...positions[1]} />
              <PositionCard {...positions[2]} />
              <PositionCard {...positions[3]} />
              <PositionCard {...positions[4]} />

              {isMobileSize && (
                <div css={recruitmentMobileMessageStyles}>
                  디프만은 다섯개의 직군으로 구성되어 있어요.
                </div>
              )}
            </div>
            {!isMobileSize && isTabletSize && (
              <div css={recruitmentMobileMessageStyles}>
                디프만은 다섯개의 직군으로 구성되어 있어요.
              </div>
            )}
            <BlogRulerDecoration />
          </section>
        </>
      ) : (
        <>
          <section css={sectionStyles}>
            <div css={containerStyles}>
              <div css={gridStyles}>
                {/* 첫 번째 행: o o o x */}
                <PositionCard {...positions[0]} />
                <PositionCard {...positions[1]} />
                <PositionCard {...positions[2]} />
                <div css={emptySlotStyles}></div>

                {/* 두 번째 행: x x o o */}
                <div css={recruitmentMessageStyles}>
                  디프만은 다섯개의 직군으로 구성되어 있어요.
                </div>
                <div css={emptySlotStyles}></div>
                <PositionCard {...positions[3]} />
                <PositionCard {...positions[4]} />
              </div>
            </div>
            <BlogRulerDecoration />
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
  min-height: 100vh;
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
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, auto);

  align-items: center;

  justify-items: center;
  justify-content: center;

  padding: 24px 40px 0 40px;
  gap: 20px;

  ${mediaQuery('mobile')} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 24px;
    gap: 20px;
  }
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
  align-items: flex-end;
  font-size: 18px;
  color: ${theme.colors.primary.darknavy};
  line-height: 1.5;
  font-weight: 500;
  background: transparent;
`;

const recruitmentMobileMessageStyles = css`
  font-size: 18px;
  color: ${theme.colors.primary.darknavy};

  ${mediaQuery('tablet')} {
    ${theme.typosV3.pretendard.sub1Medium};
    width: 100%;
    height: 100px;
    display: flex;
    padding-left: 62px;
    margin-top: 40px;
  }

  ${mediaQuery('mobile')} {
    width: 100%;
    height: 100px;
    display: flex;
    padding-left: 24px;
    line-height: 140%;
    margin-top: 40px;
    font-size: 16px;
  }
`;
