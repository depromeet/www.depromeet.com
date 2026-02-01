import { useState } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';

import { colors } from '~/styles/colors';

interface SessionItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const SESSIONS: SessionItem[] = [
  {
    id: 'idea',
    title: '아이디어 공유 / 피드백',
    description:
      '4개월간 좋은 서비스를 만드는 방법,\n디프만이 모신 두 연사의 특별 세션에서 힌트를 얻어보세요.',
    image: '/images/18th/sessions/session-idea.jpg',
  },
  {
    id: 'networking',
    title: '현직자와의 만남',
    description:
      '취업·이직·실무·협업·커리어 방향성까지!\n현실적인 질문과 경험을 직접 나누는 자리를 가져요.',
    image: '/images/18th/sessions/session-networking.jpg',
  },
  {
    id: 'focus',
    title: '포커스 위크',
    description:
      '팀별 작업에 집중하는 주차예요.\n오프라인 모각작, 온라인 모임 등을 통해 열심히 작업해요.',
    image: '/images/18th/sessions/session-focus.jpg',
  },
  {
    id: 'deepkerthon',
    title: '딮커톤',
    description:
      '1박 2일 간의 밀착 작업을 통해, 프로젝트 완성도를 끌어올려요.\n물론, 작업만 하진 않아요! 중간중간 재미있는 이벤트도 함께 즐겨요.',
    image: '/images/18th/sessions/session-deepkerthon.jpg',
  },
  {
    id: 'alumni',
    title: '동문회',
    description:
      '디프만 동문들이 한자리에 모여 커리어와 경험을 나눠요.\n가볍게 교류하면서도 새로운 기회와 영감을 얻을 수 있는, 디프만 이후를 잇는 커뮤니티 모임이에요.',
    image: '/images/18th/sessions/session-alumni.jpg',
  },
  {
    id: 'deepcation',
    title: '딮케이션',
    description:
      '팀별로 하루를 함께 보내며 작업과 휴식을 함께 가져가요.\n프로젝트에 잠깐 집중하고, 중간중간 쉬면서 팀원들과 자연스럽게 교류하는 시간을 보내요.',
    image: '/images/18th/sessions/session-deepcation.jpg',
  },
  {
    id: 'launching',
    title: '런칭데이',
    description:
      '4개월간 열심히 준비해온 서비스가 세상에 공개되는 날이에요.\n외부인과 디퍼들에게 멋진 서비스를 선보여요.',
    image: '/images/18th/sessions/session-launching.jpg',
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
        {/* Desktop Layout */}
        <div css={desktopLayoutCss}>
          <div css={leftPanelCss}>
            <div css={titleContainerCss}>
              <span css={titleBlueCss}>18th</span>
              <span css={titleBlackCss}>Session Preview</span>
            </div>
            <nav css={menuListCss}>
              {SESSIONS.map((session, index) => (
                <button
                  key={session.id}
                  css={[menuItemCss, index === currentIndex && menuItemActiveCss]}
                  onClick={() => setCurrentIndex(index)}
                >
                  <span css={menuTextCss}>{session.title}</span>
                  <ChevronRight />
                </button>
              ))}
            </nav>
          </div>
          <div css={rightPanelCss}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                css={cardCss}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div css={cardImageContainerCss}>
                  <Image
                    src={currentSession.image}
                    alt={currentSession.title}
                    fill
                    css={cardImageCss}
                    sizes="500px"
                  />
                </div>
                <p css={cardDescriptionCss}>
                  {currentSession.description.split('\n').map((line, i, arr) => (
                    <span key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Tablet/Mobile Layout */}
        <div css={mobileLayoutCss}>
          <div css={mobileTitleContainerCss}>
            <span css={mobileTitleBlueCss}>18th</span>
            <span css={mobileTitleBlackCss}>Session Preview</span>
          </div>

          <div css={mobileContentCss}>
            <div css={mobileImageContainerCss}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  css={mobileImageWrapperCss}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={currentSession.image}
                    alt={currentSession.title}
                    fill
                    css={cardImageCss}
                    sizes="(max-width: 767px) 320px, 688px"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                css={mobileInfoCss}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 css={mobileSessionTitleCss}>{currentSession.title}</h3>
                <p css={mobileSessionDescriptionCss}>
                  {currentSession.description.split('\n').map((line, i, arr) => (
                    <span key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </motion.div>
            </AnimatePresence>
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
              <ChevronRightStepper />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChevronRight = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 8L20 16L12 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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

const ChevronRightStepper = () => (
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
  background: linear-gradient(180deg, #fff 0%, #f9fbff 100%);
`;

const contentCss = css`
  max-width: 1280px;
  margin: 0 auto;

  @media (min-width: 1920px) {
    max-width: 1920px;
  }
`;

// Desktop Layout
const desktopLayoutCss = css`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 124px 80px;
    gap: 80px;
  }

  @media (min-width: 1920px) {
    max-width: 1280px;
    margin: 0 auto;
    padding: 124px 0;
  }
`;

const leftPanelCss = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 669px;
  padding-left: 24px;
  padding-right: 40px;
`;

const titleContainerCss = css`
  display: flex;
  flex-direction: column;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.4px;
`;

const titleBlueCss = css`
  color: ${colors.primary18.strong};
`;

const titleBlackCss = css`
  color: ${colors.grey18['900']};
`;

const menuListCss = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const menuItemCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  padding-bottom: 16px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 287px;

  svg {
    flex-shrink: 0;
    color: ${colors.grey18['400']};
    width: 28px;
    height: 28px;
  }
`;

const menuItemActiveCss = css`
  border-bottom: 1px solid ${colors.grey18['900']};
  padding-bottom: 15px;

  span {
    font-weight: 700;
    font-size: 26px;
    letter-spacing: -0.26px;
    color: ${colors.grey18['900']};
  }

  svg {
    color: ${colors.grey18['900']};
  }
`;

const menuTextCss = css`
  flex: 1;
  font-family: Pretendard, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;
  color: ${colors.grey18['400']};
  text-align: left;
`;

const rightPanelCss = css`
  flex-shrink: 0;
`;

const cardCss = css`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 32px 28px 28px;
  background: #fff;
  border-radius: 20px;
  border: 1px solid ${colors.grey18['200']};
  width: 556px;
`;

const cardImageContainerCss = css`
  position: relative;
  width: 500px;
  height: 375px;
  border-radius: 12px;
  overflow: hidden;
`;

const cardImageCss = css`
  object-fit: cover;
`;

const cardDescriptionCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  color: ${colors.grey18['900']};
`;

// Mobile/Tablet Layout
const mobileLayoutCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 40px 24px;

  @media (min-width: 768px) {
    gap: 40px;
    padding: 120px 40px;
  }

  @media (min-width: 1280px) {
    display: none;
  }
`;

const mobileTitleContainerCss = css`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  font-family: Pretendard, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.2px;

  @media (min-width: 768px) {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 40px;
    letter-spacing: -0.4px;
  }
`;

const mobileTitleBlueCss = css`
  color: ${colors.primary18.strong};
`;

const mobileTitleBlackCss = css`
  color: ${colors.grey18['900']};
`;

const mobileContentCss = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (min-width: 768px) {
    gap: 40px;
  }
`;

const mobileImageContainerCss = css`
  position: relative;
  width: 100%;
  aspect-ratio: 320 / 180;
  border-radius: 12px;
  overflow: hidden;

  @media (min-width: 768px) {
    aspect-ratio: 688 / 387;
  }
`;

const mobileImageWrapperCss = css`
  position: absolute;
  inset: 0;
`;

const mobileInfoCss = css`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

const mobileSessionTitleCss = css`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.8px;
  color: ${colors.grey18['900']};

  @media (min-width: 768px) {
    font-family: Pretendard, sans-serif;
    font-size: 32px;
    line-height: 1.4;
    letter-spacing: -0.64px;
  }
`;

const mobileSessionDescriptionCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  color: ${colors.grey18['900']};

  @media (min-width: 768px) {
    font-size: 20px;
  }
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
