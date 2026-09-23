import { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { motion, useInView } from 'framer-motion';

import { RECRUIT } from '~/constant/recruit';
import { colors } from '~/styles/colors';
import { theme } from '~/styles/theme';

interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

const STATS: StatItem[] = RECRUIT.stats;

const isKoreanSuffix = (suffix: string) => /[가-힣]/.test(suffix);

const useCountUp = (end: number, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    setCount(0);
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
};

const formatValue = (value: number) => (value >= 1000 ? value.toLocaleString() : value);

const StatCard = ({
  stat,
  index,
  shouldAnimate,
}: {
  stat: StatItem;
  index: number;
  shouldAnimate: boolean;
}) => {
  const count = useCountUp(stat.value, 2000, shouldAnimate);
  const finalFormatted = formatValue(stat.value);

  return (
    <motion.div
      css={cardCss}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <span css={labelCss}>{stat.label}</span>
      <div css={valueCss}>
        <span css={numberWrapperCss}>
          <span css={numberHiddenCss}>{finalFormatted}</span>
          <span css={numberCss}>{formatValue(count)}</span>
        </span>
        <span css={isKoreanSuffix(stat.suffix) ? suffixKoCss : suffixEnCss}>{stat.suffix}</span>
      </div>
    </motion.div>
  );
};

export const StatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });
  const isOutOfView = useInView(sectionRef, { amount: 0 });
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setShouldAnimate(true);
      setHasAnimated(true);
    }
    if (!isOutOfView && hasAnimated) {
      setShouldAnimate(false);
      setHasAnimated(false);
    }
  }, [isInView, isOutOfView, hasAnimated]);

  return (
    <section css={sectionCss} ref={sectionRef} data-gnb-theme="light">
      <div css={contentCss}>
        <motion.p
          css={descriptionCss}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          디프만은 디자이너와 개발자가 <br css={mobileOnlyBrCss} />
          서비스 기획부터 <br css={tabletUpBrCss} />
          런칭까지 <br css={mobileOnlyBrCss} />
          함께 경험하는 성장추구형 커뮤니티입니다.
        </motion.p>
        <div css={gridCss}>
          {STATS.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} shouldAnimate={shouldAnimate} />
          ))}
        </div>
      </div>
    </section>
  );
};

const sectionCss = css`
  width: 100%;
  background: ${colors.v19.coolGray100};
`;

const contentCss = css`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  gap: 32px;

  @media (min-width: 768px) {
    padding: 240px 40px;
    gap: 80px;
  }
`;

const descriptionCss = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  color: ${colors.v19.coolGray900};
  text-align: center;

  @media (min-width: 768px) {
    ${theme.typosV4.pretendard.head2};
  }

  @media (min-width: 1280px) {
    ${theme.typosV4.pretendard.head1};
  }
`;

/**
 * 줄바꿈 위치가 폭마다 달라서 <br>을 구간별로 켜고 끈다.
 * - 모바일(~767): 디프만은 디자이너와 개발자가 / 서비스 기획부터 런칭까지 / 함께 경험하는 ~
 * - 768 이상: 디프만은 디자이너와 개발자가 서비스 기획부터 / 런칭까지 함께 경험하는 ~
 * 숨긴 <br> 자리의 공백은 바로 앞 텍스트의 끝 공백이 대신한다.
 */
const mobileOnlyBrCss = css`
  @media (min-width: 768px) {
    display: none;
  }
`;

const tabletUpBrCss = css`
  display: none;

  @media (min-width: 768px) {
    display: inline;
  }
`;

const gridCss = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  width: 100%;

  @media (min-width: 768px) {
    gap: 16px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
  }
`;

const cardCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  gap: 10px;
  border-radius: 12px;
  background: ${colors.v19.white100};
  box-shadow: 0 8px 16px 0 rgba(218, 224, 231, 0.5);
  text-align: center;

  @media (min-width: 768px) {
    padding: 40px 24px;
    gap: 20px;
  }
`;

const labelCss = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  color: ${colors.v19.coolGray800};

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const valueCss = css`
  display: flex;
  align-items: baseline;
  gap: 2px;
`;

const numberWrapperCss = css`
  position: relative;
  display: inline-flex;
  justify-content: center;
`;

const numberBaseCss = css`
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 1;
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;

  @media (min-width: 768px) {
    ${theme.typosV4.spaceGrotesk.display1};
  }
`;

const numberHiddenCss = css`
  ${numberBaseCss};
  visibility: hidden;
`;

const numberCss = css`
  ${numberBaseCss};
  position: absolute;
  top: 0;
  left: 0;
  color: ${colors.v19.coolGray900};
`;

const suffixEnCss = css`
  font-family: 'Instrument Sans', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.4;
  color: ${colors.v19.coolGray900};

  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 1280px) {
    ${theme.typosV4.instrumentSans.head4};
    color: ${colors.v19.coolGray900};
  }
`;

const suffixKoCss = css`
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0.01em;
  color: ${colors.v19.coolGray900};

  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 1280px) {
    font-size: 36px;
  }
`;
