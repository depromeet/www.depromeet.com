import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { defaultFadeInUpVariants, defaultFadeInVariants, staggerOne } from '~/constants/motions';
import { colors, mediaQuery, radius } from '~/styles/constants';

const RECORDS: CardProps[] = [
  { title: '탄생한 지', value: '6년' },
  { title: '누적 멤버 수', value: '800명+' },
  { title: '론칭 성공률', value: '100%', description: '10, 11기 기준' },
  { title: '론칭 서비스', value: '34개+', description: '5~11기 기준' },
];

export default function RecordSection() {
  return (
    <motion.section
      css={sectionCss}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ amount: 0.6, once: true }}
    >
      <motion.h2 css={headingCss} variants={defaultFadeInVariants}>
        디프만은 서비스 기획부터 론칭, 그리고 개선까지<br></br> 경험하며 성장하는 모임이에요.
      </motion.h2>

      <motion.div css={cardWrapperCss} variants={staggerOne}>
        {RECORDS.map(record => (
          <Card
            key={record.title}
            title={record.title}
            value={record.value}
            description={record.description}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}

const sectionCss = css`
  margin-top: 210px;
  width: 100%;
`;

const headingCss = css`
  text-align: center;
  font-size: 2.75rem;
  line-height: 150%;

  ${mediaQuery('xs')} {
    font-size: 24px;
    font-weight: 500;
  }
`;

const cardWrapperCss = css`
  margin-top: 60px;

  width: 100%;
  display: flex;
  justify-content: space-evenly;

  ${mediaQuery('xs')} {
    margin-top: 40px;
    gap: 15px;
    flex-wrap: wrap;
  }
`;

interface CardProps {
  title: string;
  value: string;
  description?: string;
}

function Card({ title, value, description }: CardProps) {
  return (
    <motion.div css={cardCss} variants={defaultFadeInUpVariants}>
      <span css={titleCss}>{title}</span>
      <span css={valueCss}>{value}</span>
      {description && <small css={descriptionCss}>{description}</small>}
    </motion.div>
  );
}

const cardCss = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${radius.md};
  background-color: ${colors.gray9};

  width: 23%;
  height: 255px;

  ${mediaQuery('xs')} {
    width: calc(50% - 7.5px);
    aspect-ratio: 1 / 1;
    height: auto;
  }
`;

const titleCss = css`
  color: ${colors.gray3};
  font-size: 1.5rem;
  line-height: 112.5%;
  margin-bottom: 12px;

  ${mediaQuery('xs')} {
    font-size: 14px;
  }
`;

const valueCss = css`
  font-size: 3.125rem;
  line-height: 112.5%;
  font-weight: 700;

  ${mediaQuery('xs')} {
    font-size: 30px;
  }
`;

const descriptionCss = css`
  position: absolute;
  bottom: 20px;
  color: ${colors.gray6};
  font-size: 1.125rem;

  ${mediaQuery('xs')} {
    font-size: 12px;
  }
`;
