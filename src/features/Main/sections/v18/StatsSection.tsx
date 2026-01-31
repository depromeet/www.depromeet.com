import { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { motion, useInView } from 'framer-motion';

import { mediaQuery } from '~/styles/media';

interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

const STATS: StatItem[] = [
  { label: '디프만이 탄생한지', value: 9, suffix: '년' },
  { label: '10~17기 런칭 성공률', value: 100, suffix: '%' },
  { label: '5~17기 런칭 서비스', value: 76, suffix: '+' },
  { label: '누적 멤버 수', value: 1000, suffix: '+' },
];

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

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
  }, [end, duration, start]);

  return count;
};

const StatCard = ({ stat, index }: { stat: StatItem; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useCountUp(stat.value, 2000, isInView);

  const formatValue = (value: number) => {
    if (value >= 1000) {
      return value.toLocaleString();
    }
    return value;
  };

  return (
    <motion.div
      ref={ref}
      css={cardCss}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <span css={labelCss}>{stat.label}</span>
      <div css={valueCss}>
        <span css={numberCss}>{formatValue(count)}</span>
        <span css={suffixCss}>{stat.suffix}</span>
      </div>
    </motion.div>
  );
};

export const StatsSection = () => {
  return (
    <section css={sectionCss}>
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
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const sectionCss = css`
  width: 100%;
  padding: 120px 40px;
  background: #f5f5f5;

  ${mediaQuery('mobile')} {
    padding: 60px 20px;
  }
`;

const contentCss = css`
  max-width: 1200px;
  margin: 0 auto;
`;

const descriptionCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.5;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 60px;

  ${mediaQuery('tablet')} {
    font-size: 24px;
  }

  ${mediaQuery('mobile')} {
    font-size: 18px;
    margin-bottom: 40px;

    br {
      display: none;
    }
  }
`;

const gridCss = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  ${mediaQuery('tablet')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQuery('mobile')} {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;

const cardCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
  background: #ffffff;
  border-radius: 16px;
  text-align: center;

  ${mediaQuery('mobile')} {
    padding: 24px 16px;
  }
`;

const labelCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #666666;
  margin-bottom: 12px;

  ${mediaQuery('mobile')} {
    font-size: 12px;
    margin-bottom: 8px;
  }
`;

const valueCss = css`
  display: flex;
  align-items: baseline;
  gap: 4px;
`;

const numberCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1;

  ${mediaQuery('mobile')} {
    font-size: 32px;
  }
`;

const suffixCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;

  ${mediaQuery('mobile')} {
    font-size: 18px;
  }
`;
