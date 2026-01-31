import { useState } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';

import { colors } from '~/styles/colors';

interface SessionItem {
  image: string;
  title: string;
  description: string[];
}

const SESSIONS: SessionItem[] = [
  {
    image: '/images/18th/home/session-idea.jpg',
    title: '아이디어 공유/피드백',
    description: [
      '어떻게 하면 4개월간 좋은 서비스를 만들어나갈 수 있을까요?',
      '디프만이 모신 두 연사 분들의 특별 세션을 통해 힌트를 얻어보아요.',
    ],
  },
  {
    image: '/images/18th/home/session-networking.jpg',
    title: '현직자와의 만남',
    description: [
      '취업·이직·실무·협업·커리어 방향성까지!',
      '현실적인 질문과 경험을 직접 나누는 자리를 가져요.',
    ],
  },
  {
    image: '/images/18th/home/session-focus.jpg',
    title: '포커스 위크',
    description: [
      '팀 별 작업에 집중하는 주차예요.',
      '오프라인 모각작, 온라인 모임 등을 통해 열심히 작업해요.',
    ],
  },
];

export const SessionsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? SESSIONS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === SESSIONS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section css={sectionCss}>
      <div css={contentCss}>
        <h2 css={titleCss}>18기 세션</h2>

        {/* Desktop: Show all items */}
        <div css={desktopListCss}>
          {SESSIONS.map((session, index) => (
            <div key={index} css={sessionItemCss}>
              <div css={imageContainerCss}>
                <Image
                  src={session.image}
                  alt={session.title}
                  fill
                  css={imageCss}
                  sizes="(max-width: 1279px) 100vw, 533px"
                />
              </div>
              <div css={infoContainerCss}>
                <h3 css={sessionTitleCss}>{session.title}</h3>
                <p css={sessionDescriptionCss}>
                  {session.description.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < session.description.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet/Mobile: Carousel with stepper */}
        <div css={mobileSliderCss}>
          <div css={mobileImageContainerCss}>
            {SESSIONS.map((session, index) => (
              <div
                key={index}
                css={css`
                  position: absolute;
                  inset: 0;
                  opacity: ${index === currentIndex ? 1 : 0};
                  transition: opacity 0.3s ease;
                `}
              >
                <Image
                  src={session.image}
                  alt={session.title}
                  fill
                  css={imageCss}
                  sizes="(max-width: 767px) 100vw, 688px"
                />
              </div>
            ))}
          </div>
          <div css={mobileInfoContainerCss}>
            {SESSIONS.map((session, index) => (
              <div
                key={index}
                css={css`
                  position: absolute;
                  inset: 0;
                  display: flex;
                  flex-direction: column;
                  gap: 16px;
                  opacity: ${index === currentIndex ? 1 : 0};
                  transition: opacity 0.3s ease;
                  pointer-events: ${index === currentIndex ? 'auto' : 'none'};
                `}
              >
                <h3 css={sessionTitleCss}>{session.title}</h3>
                <p css={sessionDescriptionCss}>
                  {session.description.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < session.description.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
          <div css={stepperCss}>
            <button css={stepperButtonCss} onClick={handlePrev} aria-label="이전">
              <ChevronLeft />
            </button>
            <span css={stepperTextCss}>
              <span css={currentNumberCss}>{String(currentIndex + 1).padStart(2, '0')}</span>
              <span css={dividerCss}>/</span>
              <span>{String(SESSIONS.length).padStart(2, '0')}</span>
            </span>
            <button css={stepperButtonCss} onClick={handleNext} aria-label="다음">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15 18L9 12L15 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 18L15 12L9 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const sectionCss = css`
  width: 100%;
  padding: 120px 40px;
  background: ${colors.grey18['00']};

  @media (min-width: 1920px) {
    padding: 240px 40px 280px;
  }
`;

const contentCss = css`
  max-width: 1200px;
  margin: 0 auto;
`;

const titleCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.36px;
  color: ${colors.grey18['900']};
  margin-bottom: 40px;
`;

const desktopListCss = css`
  display: none;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 1280px) {
    display: flex;
  }
`;

const sessionItemCss = css`
  display: flex;
  gap: 40px;
  align-items: flex-end;
`;

const imageContainerCss = css`
  position: relative;
  width: 533px;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
`;

const imageCss = css`
  object-fit: cover;
`;

const infoContainerCss = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-end;
  padding: 20px 0;
`;

const sessionTitleCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.64px;
  color: ${colors.grey18['900']};
`;

const sessionDescriptionCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  color: ${colors.grey18['900']};
`;

const mobileSliderCss = css`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 1280px) {
    display: none;
  }
`;

const mobileImageContainerCss = css`
  position: relative;
  width: 100%;
  aspect-ratio: 688 / 387;
  border-radius: 12px;
  overflow: hidden;
`;

const mobileInfoContainerCss = css`
  position: relative;
  min-height: 130px;
`;

const stepperCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const stepperButtonCss = css`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: none;
  background: transparent;
  color: ${colors.grey18['800']};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${colors.grey18['600']};
  }
`;

const stepperTextCss = css`
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: Pretendard, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
  color: ${colors.grey18['300']};
  min-width: 60px;
  justify-content: center;
`;

const currentNumberCss = css`
  color: ${colors.grey18['800']};
`;

const dividerCss = css`
  margin: 0 4px;
`;
