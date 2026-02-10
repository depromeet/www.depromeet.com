import { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { motion, useInView } from 'framer-motion';

import { colors } from '~/styles/colors';

interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

const STATS: StatItem[] = [
  { label: '디프만이 탄생한지', value: 10, suffix: '년' },
  { label: '10~17기 런칭 성공률', value: 100, suffix: '%' },
  { label: '5~17기 런칭 서비스', value: 76, suffix: '+' },
  { label: '누적 멤버 수', value: 1000, suffix: '+' },
];

const useCountUp = (end: number, duration: number = 2000, shouldStart: boolean = false) => {
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

  const formatValue = (value: number) => {
    if (value >= 1000) {
      return value.toLocaleString();
    }
    return value;
  };

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
        <span css={suffixCss}>{stat.suffix}</span>
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
    <section css={sectionCss} ref={sectionRef}>
      <div css={contentCss}>
        <motion.p
          css={descriptionCss}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          디프만은 디자이너와 개발자가 서비스 기획부터
          <br />
          런칭까지 함께 경험하는 성장추구형 커뮤니티입니다.
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
  background: #fff;
`;

const contentCss = css`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 40px;
  gap: 40px;

  @media (min-width: 768px) {
    padding: 120px 46px;
  }

  @media (min-width: 1280px) {
    padding: 120px 0;
  }

  @media (max-width: 767px) {
    padding: 40px 24px;
  }
`;

const descriptionCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.36px;
  color: #040c23;
  text-align: center;

  @media (max-width: 1279px) {
    font-size: 32px;
    letter-spacing: -0.64px;
    color: ${colors.grey18['900']};
  }

  @media (max-width: 767px) {
    font-size: 16px;
    letter-spacing: normal;

    br {
      display: none;
    }
  }
`;

const gridCss = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  width: 100%;

  @media (max-width: 1279px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    gap: 16px;
  }
`;

const cardCss = css`
  display: flex;
  width: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 28px 0;
  gap: 10px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 8px 32px 0 rgba(47, 51, 55, 0.1);
  text-align: center;

  @media (min-width: 768px) {
    width: auto;
    height: 230px;
    padding: 40px 24px;
    gap: 20px;
  }

  @media (min-width: 1280px) {
    width: auto;
    height: auto;
    padding: 40px 24px;
    gap: 20px;
    flex: 1 0 0;
  }
`;

const labelCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.12px;
  color: ${colors.grey18['800']};

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 140%;
    letter-spacing: normal;
  }
`;

const valueCss = css`
  display: flex;
  align-items: baseline;
  gap: 4px;
`;

const numberWrapperCss = css`
  position: relative;
  display: inline-flex;
  justify-content: center;
`;

const numberHiddenCss = css`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
  font-variant-numeric: tabular-nums;
  visibility: hidden;

  @media (min-width: 768px) {
    font-size: 88px;
    line-height: 100%;
    letter-spacing: -3.52px;
  }
`;

const numberCss = css`
  position: absolute;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
  color: ${colors.grey18['900']};
  font-variant-numeric: tabular-nums;

  @media (min-width: 768px) {
    font-size: 88px;
    line-height: 100%;
    letter-spacing: -3.52px;
  }
`;

const suffixCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
  color: ${colors.grey18['900']};

  @media (min-width: 768px) {
    font-size: 36px;
    letter-spacing: -0.36px;
  }
`;
