import { useState } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';

import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';

interface SessionItem {
  image: string;
  title: string;
  description: string;
}

const SESSIONS: SessionItem[] = [
  {
    image: '/images/18th/home/session.png',
    title: 'Part Networking',
    description: '같은 파트 디퍼들과 모여 네트워킹을 진행해요\n파트별로 할 수 있는 이야기를 나누는 시간을 가져요',
  },
  {
    image: '/images/18th/session-2.png',
    title: 'Pre-Launching Day',
    description: '빠르게 MVP를 출시하고 다양한 피드백을 받을 수 있어요',
  },
  {
    image: '/images/18th/session-3.png',
    title: 'Final Launching Day',
    description: '최종 프로덕트를 선보이고 유저들의 생생한 반응을 확인해요',
  },
  {
    image: '/images/18th/session-4.png',
    title: 'Hackathon',
    description: '짧은 시간 동안 집중적으로 아이디어를 구현하고 발표하는 시간이에요',
  },
  {
    image: '/images/18th/session-5.png',
    title: 'Workshop',
    description: '다양한 주제로 함께 배우고 성장하는 워크샵을 진행해요',
  },
  {
    image: '/images/18th/session-6.png',
    title: 'Networking Day',
    description: '디프만 전체가 모여 네트워킹하고 친해지는 시간이에요',
  },
  {
    image: '/images/18th/session-7.png',
    title: 'MT',
    description: '함께 떠나는 MT에서 팀워크를 다지고 추억을 만들어요',
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

  const currentSession = SESSIONS[currentIndex];

  return (
    <section css={sectionCss}>
      <div css={contentCss}>
        <h2 css={titleCss}>18기 세션</h2>
        <div css={sliderContainerCss}>
          <div css={imageContainerCss}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                css={imageWrapperCss}
              >
                <Image
                  src={currentSession.image}
                  alt={currentSession.title}
                  fill
                  css={imageCss}
                  sizes="(max-width: 767px) 100vw, 664px"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div css={infoContainerCss}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 css={sessionTitleCss}>{currentSession.title}</h3>
                <p css={sessionDescriptionCss}>{currentSession.description}</p>
              </motion.div>
            </AnimatePresence>
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
      </div>
    </section>
  );
};

const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const sectionCss = css`
  width: 100%;
  padding: 120px 40px;
  background: ${colors.grey18['00']};

  ${mediaQuery('mobile')} {
    padding: 60px 20px;
  }
`;

const contentCss = css`
  max-width: 1200px;
  margin: 0 auto;
`;

const titleCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: ${colors.grey18['900']};
  margin-bottom: 48px;

  ${mediaQuery('tablet')} {
    font-size: 28px;
  }

  ${mediaQuery('mobile')} {
    font-size: 20px;
    margin-bottom: 32px;
  }
`;

const sliderContainerCss = css`
  display: flex;
  gap: 32px;
  align-items: flex-start;

  ${mediaQuery('mobile')} {
    flex-direction: column;
    gap: 24px;
  }
`;

const imageContainerCss = css`
  position: relative;
  width: 664px;
  aspect-ratio: 664 / 374;
  border-radius: 16px;
  overflow: hidden;
  flex-shrink: 0;

  ${mediaQuery('tablet')} {
    width: 50%;
  }

  ${mediaQuery('mobile')} {
    width: 100%;
    border-radius: 12px;
  }
`;

const imageWrapperCss = css`
  position: absolute;
  inset: 0;
`;

const imageCss = css`
  object-fit: cover;
`;

const infoContainerCss = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;

  ${mediaQuery('mobile')} {
    min-height: auto;
    gap: 24px;
  }
`;

const sessionTitleCss = css`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 48px;
  font-weight: 500;
  color: ${colors.grey18['900']};
  margin-bottom: 24px;

  ${mediaQuery('tablet')} {
    font-size: 36px;
  }

  ${mediaQuery('mobile')} {
    font-size: 28px;
    margin-bottom: 16px;
  }
`;

const sessionDescriptionCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: ${colors.grey18['600']};
  line-height: 1.6;
  white-space: pre-line;

  ${mediaQuery('mobile')} {
    font-size: 14px;
  }
`;

const stepperCss = css`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const stepperButtonCss = css`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.grey18['200']};
  border-radius: 50%;
  background: transparent;
  color: ${colors.grey18['900']};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.grey18['100']};
  }
`;

const stepperTextCss = css`
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: ${colors.grey18['500']};
  min-width: 60px;
  justify-content: center;
`;

const currentNumberCss = css`
  color: ${colors.grey18['900']};
`;

const dividerCss = css`
  margin: 0 4px;
`;
