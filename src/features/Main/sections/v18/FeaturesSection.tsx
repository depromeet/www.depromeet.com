import { useState } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';

import { colors } from '~/styles/colors';

interface FeatureItem {
  image: string;
  title: string;
  description: string;
}

const FEATURES: FeatureItem[] = [
  {
    image: '/images/18th/home/experience1.png',
    title: '서로 다른 고리가 만나 열리는 새로운 가능성',
    description:
      '17주간 단순한 협업을 넘어 스스로의 한계를 여는 과정이에요. 이곳에서 함께 성장의 문을 열어갈 마스터키 같은 동료들을 만나보세요',
  },
  {
    image: '/images/18th/home/experience2.png',
    title: '연결의 가치를 성장으로, 함께하는 네트워킹',
    description:
      '현직자와의 만남, 디프만 워크샵, 파트 별 반상회 등 다양한 네트워킹 세션을 통해 소중한 동료들을 만날 수 있어요',
  },
  {
    image: '/images/18th/home/experience3.png',
    title: '유저의 목소리로 완성되는 우리만의 프로덕트',
    description:
      '두 번의 런칭 행사는 단순한 전시가 아닌 유저와의 진정한 연결입니다. 현업의 기준에서 내 프로덕트를 증명해 보세요',
  },
  {
    image: '/images/18th/home/experience4.png',
    title: '성장의 문을 여는 마지막 열쇠, 프로덕트 릴리즈 100%',
    description:
      '아이디어 선정부터 MVP 출시, 유저 피드백을 통한 개선까지. 모든 고리를 견고하게 연결하여 마침내 시장의 문을 열 프로덕트를 완성해요',
  },
];

// Calculate track offset to always center the active image
// Desktop: container ~1200px, active=600px, inactive=400px, gap=56px
const getTrackOffset = (index: number) => {
  const containerWidth = 1200;
  const activeWidth = 600;
  const inactiveWidth = 400;
  const gap = 56;

  // Target: center the active image in the container
  const targetX = (containerWidth - activeWidth) / 2; // 300px
  // Position of active image in track (all previous are inactive)
  const actualX = index * (inactiveWidth + gap);

  return targetX - actualX;
};

const getTrackOffsetTablet = (index: number) => {
  // Tablet: container ~676px (768 - 46*2 padding), active=600px
  const containerWidth = 676;
  const activeWidth = 600;
  const inactiveWidth = 400;
  const gap = 56;

  const targetX = (containerWidth - activeWidth) / 2; // 38px
  const actualX = index * (inactiveWidth + gap);

  return targetX - actualX;
};

const getTrackOffsetMobile = (index: number) => {
  // Mobile: container ~320px (360 - 20*2 padding), active=320px
  const containerWidth = 320;
  const activeWidth = 320;
  const inactiveWidth = 320;
  const gap = 56;

  const targetX = (containerWidth - activeWidth) / 2; // 0px (centered)
  const actualX = index * (inactiveWidth + gap);

  return targetX - actualX;
};

export const FeaturesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? FEATURES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === FEATURES.length - 1 ? 0 : prev + 1));
  };

  const currentFeature = FEATURES[currentIndex];

  return (
    <section css={sectionCss}>
      <div css={contentCss}>
        <motion.h2
          css={titleCss}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          연결하고, 시도하고,
          <br />
          함께 완성하는 경험
        </motion.h2>

        <div css={sliderContainerCss}>
          <div css={imagesContainerCss}>
            <motion.div
              css={imageTrackCss}
              animate={{
                x: getTrackOffset(currentIndex),
              }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              style={
                {
                  '--track-offset-tablet': `${getTrackOffsetTablet(currentIndex)}px`,
                  '--track-offset-mobile': `${getTrackOffsetMobile(currentIndex)}px`,
                } as React.CSSProperties
              }
            >
              {FEATURES.map((feature, index) => (
                <div
                  key={index}
                  css={[imageItemCss, index === currentIndex ? activeImageCss : inactiveImageCss]}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    css={imageCss}
                    sizes="(max-width: 767px) 320px, (max-width: 1279px) 600px, 600px"
                  />
                  {index !== currentIndex && <div css={imageOverlayCss} />}
                </div>
              ))}
            </motion.div>
          </div>

          <div css={infoContainerCss}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                css={textContentCss}
              >
                <h3 css={featureTitleCss}>{currentFeature.title}</h3>
                <p css={featureDescriptionCss}>{currentFeature.description}</p>
              </motion.div>
            </AnimatePresence>

            <div css={navigationCss}>
              <button css={navButtonCss} onClick={handlePrev} aria-label="이전">
                <ChevronLeft />
              </button>
              <button css={navButtonCss} onClick={handleNext} aria-label="다음">
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
  background: #59aefe;
  overflow: hidden;
`;

const contentCss = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 40px;

  @media (min-width: 768px) {
    padding: 100px 46px;
  }

  @media (min-width: 1280px) {
    padding: 100px 0;
  }
`;

const titleCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.2px;
  color: white;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 36px;
    letter-spacing: -0.36px;
    margin-bottom: 60px;
  }

  @media (min-width: 1280px) {
    letter-spacing: 0.36px;
  }
`;

const sliderContainerCss = css`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;

const imagesContainerCss = css`
  overflow: hidden;
  width: 100%;
`;

const imageTrackCss = css`
  display: flex;
  gap: 56px;
  align-items: center;

  @media (max-width: 1279px) {
    transform: translateX(var(--track-offset-tablet)) !important;
  }

  @media (max-width: 767px) {
    transform: translateX(var(--track-offset-mobile)) !important;
  }
`;

const imageItemCss = css`
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

const activeImageCss = css`
  width: 320px;
  height: 180px;
  border-radius: 6.4px;

  @media (min-width: 768px) {
    width: 600px;
    height: 339px;
    border-radius: 12px;
  }
`;

const inactiveImageCss = css`
  width: 320px;
  height: 180px;
  border-radius: 6.4px;

  @media (min-width: 768px) {
    width: 400px;
    height: 226px;
    border-radius: 8px;
  }
`;

const imageOverlayCss = css`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
`;

const imageCss = css`
  object-fit: cover;
`;

const infoContainerCss = css`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

const textContentCss = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 592px;
`;

const featureTitleCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 140%;
  color: white;

  @media (min-width: 768px) {
    font-size: 26px;
    letter-spacing: -0.26px;
  }

  @media (min-width: 1280px) {
    letter-spacing: -1.3px;
  }
`;

const featureDescriptionCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: -0.32px;
  color: ${colors.grey18['100']};

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 150%;
    letter-spacing: -0.18px;
  }
`;

const navigationCss = css`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const navButtonCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0;

  svg {
    width: 24px;
    height: 24px;
  }

  @media (min-width: 768px) {
    width: 36px;
    height: 36px;

    svg {
      width: 28px;
      height: 28px;
    }
  }

  @media (min-width: 1280px) {
    width: 28px;
    height: 28px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
