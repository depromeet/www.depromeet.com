import { useRef, useState } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';

import { RECRUIT } from '~/constant/recruit';
import { colors } from '~/styles/colors';
import { theme } from '~/styles/theme';

// Figma `203:1346`(1920/1280 공용 컴포넌트) · `203:1988`(360)
interface SessionItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const SESSIONS: SessionItem[] = RECRUIT.sessionPreview;

type ChipId = 'challenge' | 'fellowship' | 'focus';

const CHIPS: Array<{ id: ChipId; label: string }> = [
  { id: 'challenge', label: 'Challenge' },
  { id: 'fellowship', label: 'Fellowship' },
  { id: 'focus', label: 'Focus' },
];

/**
 * 칩 3개는 클릭만 가능하고 목록 필터링은 하지 않는다(카테고리 매핑 미정,
 * migration-plan §15.2 "Session Preview 칩" 참고).
 *
 * 그래서 **탭 의미론(role="tab"/tablist)을 쓰지 않는다.** 탭은 선택하면 연결된 패널이
 * 바뀐다는 약속인데 여기서는 목록이 그대로다. 스크린 리더가 "탭, Focus, 선택됨"이라고
 * 읽어 주면 사용자는 갱신을 기다리다 고장으로 판단한다(WCAG 4.1.2 역할-동작 불일치).
 * 토글 버튼 묶음(`role="group"` + `aria-pressed`)으로 표현한다 — 누를 수 있고 눌린 상태가
 * 있다는 것만 알린다. 분류 매핑이 확정되면 그때 탭으로 승격하면 된다.
 */
const ChipTablist = () => {
  const [activeChip, setActiveChip] = useState<ChipId>('challenge');
  const chipRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const focusChip = (index: number) => {
    const target = chipRefs.current[index];
    target?.focus();
  };

  /**
   * 방향키는 **포커스만** 옮긴다. 누르는 것은 Space/Enter다.
   *
   * 탭 묶음이라면 이동과 동시에 선택되는 자동 활성화가 표준이지만, 이건 토글 버튼이다.
   * 이동만 해도 눌린 상태가 바뀌면 키보드 사용자가 칩을 훑어볼 수 없다 — 지금은 목록이
   * 안 바뀌어 티가 안 나지만, 분류 매핑이 확정돼 필터가 붙는 순간 실제 결함이 된다.
   */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      focusChip((index + 1) % CHIPS.length);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      focusChip((index - 1 + CHIPS.length) % CHIPS.length);
    } else if (event.key === 'Home') {
      event.preventDefault();
      focusChip(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      focusChip(CHIPS.length - 1);
    }
  };

  return (
    <div css={chipRowCss} role="group" aria-label="세션 카테고리">
      {CHIPS.map((chip, index) => {
        const isActive = chip.id === activeChip;
        return (
          <button
            key={chip.id}
            ref={el => {
              chipRefs.current[index] = el;
            }}
            type="button"
            aria-pressed={isActive}
            css={[chipCss, isActive && chipActiveCss]}
            onClick={() => setActiveChip(chip.id)}
            onKeyDown={event => handleKeyDown(event, index)}
          >
            <ChipIcon chip={chip.id} />
            <span css={chipLabelCss}>{chip.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export const SessionPreviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? SESSIONS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === SESSIONS.length - 1 ? 0 : prev + 1));
  };

  const currentSession = SESSIONS[currentIndex];

  return (
    <section css={sectionCss} data-gnb-theme="dark">
      <div css={contentCss}>
        {/* 1280px 이상: 리스트 + 카드 패널 (칩은 클릭만 가능, 필터링 없음) */}
        <div css={desktopLayoutCss}>
          {/* 시안 `203:1346`·`203:1485`: 제목과 칩은 본문 위 한 줄을 좌우로 나눠 쓴다. */}
          <div css={headerRowCss}>
            <div css={titleContainerCss}>
              <span css={titleEnCss}>{RECRUIT.generation}th</span>
              <span css={titleMainCss}>Session Preview</span>
            </div>
            <ChipTablist />
          </div>
          <div css={bodyRowCss}>
            <nav css={menuListCss}>
              {SESSIONS.map((session, index) => (
                <button
                  key={session.id}
                  type="button"
                  css={[menuItemCss, index === currentIndex && menuItemActiveCss]}
                  onClick={() => setCurrentIndex(index)}
                >
                  <span css={menuTextCss}>{session.title}</span>
                  <ChevronRight />
                </button>
              ))}
            </nav>
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
        </div>

        {/* 1280px 미만: 스테퍼 + 단일 카드 (768 시안도 이쪽이다) */}
        <div css={mobileLayoutCss}>
          <div css={mobileTitleContainerCss}>
            <span css={titleEnCss}>{RECRUIT.generation}th</span>
            <span css={titleMainCss}>Session Preview</span>
          </div>

          <ChipTablist />

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
                    sizes="320px"
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
            <button type="button" css={stepperButtonCss} onClick={handlePrev} aria-label="이전">
              <ChevronLeft />
            </button>
            <span css={stepperTextCss}>
              <span css={currentNumberCss}>{String(currentIndex + 1).padStart(2, '0')}</span>
              <span css={dividerCss}>/</span>
              <span>{String(SESSIONS.length).padStart(2, '0')}</span>
            </span>
            <button type="button" css={stepperButtonCss} onClick={handleNext} aria-label="다음">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/** 목록의 우측 화살표. 첫 항목도 다른 항목과 동일하게 fill 없이 그린다(디자이너 실수 정정). */
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

/** 칩 아이콘 3종 — Figma 벡터를 근사 재현(장식용 아이콘, currentColor로 칩 상태를 따라간다). */
const ChipIcon = ({ chip }: { chip: ChipId }) => {
  if (chip === 'challenge') {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 17V12M8 17V7M13 17V9M17 17V4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (chip === 'fellowship') {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 6L17 14M17 6L3 14"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 3V7M10 13V17M3 10H7M13 10H17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

/**
 * 좌우 여백은 **섹션**이 갖는다. `contentCss`의 1200px는 시안의 콘텐츠 폭 자체라서
 * (1920에서 x 360~1560), 그 안쪽에 또 여백을 주면 1280에서 리스트+카드가 들어갈 자리가
 * 80px 모자라 카드가 화면 밖으로 밀려났다.
 */
const sectionCss = css`
  width: 100%;
  background: ${colors.v19.blue900};
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0 24px;
  }

  @media (min-width: 1280px) {
    padding: 0 40px;
  }
`;

const contentCss = css`
  max-width: 1200px;
  margin: 0 auto;
`;

const chipRowCss = css`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (min-width: 768px) {
    gap: 12px;
  }
`;

/*
 * 360 시안(`203:1988`)의 칩 3개는 x 19~323, 즉 **304px 안에** 다 들어간다
 * (Challenge 100 · Fellowship 103 · Focus 81, 간격 10). 여백 16 + 아이콘 20으로는
 * 370px가 되어 Focus가 화면 밖으로 밀려났다.
 */
const chipCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 40px;
  padding: 10px 12px;

  svg {
    width: 16px;
    height: 16px;
  }
  border: 1px solid ${colors.v19.white030};
  border-radius: 200px;
  background: transparent;
  color: ${colors.v19.white100};
  opacity: 0.5;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:focus-visible {
    outline: 2px solid ${colors.v19.white100};
    outline-offset: 2px;
  }

  /* 768 시안의 칩도 1280과 같은 80px 높이다. */
  @media (min-width: 768px) {
    height: 80px;
    padding: 20px 30px;
    gap: 8px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const chipActiveCss = css`
  opacity: 1;
  border-color: ${colors.v19.white100};
`;

const chipLabelCss = css`
  ${theme.typosV4.instrumentSans.caption1};
  font-size: 13px;
  color: ${colors.v19.white100};
  white-space: nowrap;

  @media (min-width: 768px) {
    ${theme.typosV4.instrumentSans.sub3};
    color: ${colors.v19.white100};
  }
`;

/*
 * 리스트 + 카드 레이아웃은 **1280부터**다. 768 시안(`203:1695`)은 360과 같은
 * 스테퍼 레이아웃을 쓴다 — 제목, 칩, 큰 이미지 카드 한 장, 하단 `01 / 07`.
 * 768을 데스크톱으로 잡아 두어 좁은 화면에 리스트+카드가 밀어넣어져 있었다.
 */
const desktopLayoutCss = css`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding: 160px 0;
  }

  @media (min-width: 1920px) {
    padding: 240px 0;
  }
`;

/** 제목은 왼쪽, 칩 묶음은 콘텐츠 오른쪽 끝(= 카드 오른쪽 끝)에 붙는다. */
const headerRowCss = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

const bodyRowCss = css`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
  }
`;

const titleContainerCss = css`
  display: flex;
  flex-direction: column;
`;

const titleEnCss = css`
  ${theme.typosV4.instrumentSans.sub4};
  color: ${colors.v19.blue500};

  @media (min-width: 1280px) {
    ${theme.typosV4.instrumentSans.head3};
    color: ${colors.v19.blue500};
  }
`;

const titleMainCss = css`
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.4;
  letter-spacing: -0.01em;
  color: ${colors.v19.white100};

  @media (min-width: 1280px) {
    ${theme.typosV4.spaceGrotesk.head1};
    color: ${colors.v19.white100};
  }
`;

const menuListCss = css`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 1280px) {
    gap: 20px;
  }
`;

const menuItemCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  padding-bottom: 12px;
  border: none;
  /*
   * 밑줄은 **선택된 항목에만** 있다(시안 203:1346). 투명 테두리로 자리를 잡아 두는 것은
   * 선택이 옮겨갈 때 1px씩 높이가 달라져 목록이 들썩이는 것을 막기 위해서다.
   */
  border-bottom: 1px solid transparent;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;

  svg {
    flex-shrink: 0;
    color: ${colors.v19.coolGray400};
    width: 24px;
    height: 24px;
  }

  @media (min-width: 1280px) {
    padding-bottom: 16px;
    width: 287px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

const menuItemActiveCss = css`
  border-bottom: 1px solid ${colors.v19.white100};

  span {
    font-weight: 700;
    color: ${colors.v19.white100};
  }

  svg {
    color: ${colors.v19.white100};
  }
`;

const menuTextCss = css`
  flex: 1;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  color: ${colors.v19.coolGray400};
  text-align: left;

  @media (min-width: 1280px) {
    font-size: 24px;
  }
`;

const rightPanelCss = css`
  flex-shrink: 0;
`;

const cardCss = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background: ${colors.v19.white004};
  border-radius: 20px;
  width: 100%;

  @media (min-width: 1280px) {
    gap: 28px;
    padding: 32px 28px 28px;
    width: 556px;
  }
`;

const cardImageContainerCss = css`
  position: relative;
  width: 100%;
  aspect-ratio: 500 / 375;
  border-radius: 12px;
  overflow: hidden;
`;

const cardImageCss = css`
  object-fit: cover;
`;

const cardDescriptionCss = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  color: ${colors.v19.white100};

  @media (min-width: 1280px) {
    font-size: 20px;
  }
`;

// 1280 미만 레이아웃
/* 1280 미만은 모두 스테퍼 레이아웃. 768 시안 실측: 위 여백 130, 칩 줄 높이 80. */
const mobileLayoutCss = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 60px 0;

  @media (min-width: 768px) {
    gap: 34px;
    padding: 130px 0;
  }

  @media (min-width: 1280px) {
    display: none;
  }
`;

const mobileTitleContainerCss = css`
  display: flex;
  flex-direction: column;
`;

const mobileContentCss = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const mobileImageContainerCss = css`
  position: relative;
  width: 100%;
  aspect-ratio: 320 / 180;
  border-radius: 12px;
  overflow: hidden;
`;

const mobileImageWrapperCss = css`
  position: absolute;
  inset: 0;
`;

const mobileInfoCss = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const mobileSessionTitleCss = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  color: ${colors.v19.white100};
`;

const mobileSessionDescriptionCss = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  min-height: 60px;
  color: ${colors.v19.white100};
`;

const stepperCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  align-self: center;
`;

const stepperButtonCss = css`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: none;
  background: transparent;
  color: ${colors.v19.white100};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const stepperTextCss = css`
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
  color: ${colors.v19.coolGray400};
  min-width: 60px;
  justify-content: center;
`;

const currentNumberCss = css`
  color: ${colors.v19.white100};
`;

const dividerCss = css`
  margin: 0 4px;
`;
