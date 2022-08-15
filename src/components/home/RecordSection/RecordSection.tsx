import { css } from '@emotion/react';

import { colors, radius } from '~/styles/constants';

const RECORDS: CardProps[] = [
  { title: '탄생한지', value: '6년' },
  { title: '누적 멤버 수', value: '800명+' },
  { title: '론칭 성공률', value: '100%', description: '10, 11기 기준' },
  { title: '론칭 서비스', value: '34개+', description: '5~11기 기준' },
];

export default function RecordSection() {
  return (
    <section css={sectionCss}>
      <h2 css={headingCss}>
        디프만은 서비스 기획부터 론칭, 그리고 개선까지 경험하며 성장하는 모임이에요.
      </h2>

      <div css={cardWrapperCss}>
        {RECORDS.map(record => (
          <Card
            key={record.title}
            title={record.title}
            value={record.value}
            description={record.description}
          />
        ))}
      </div>
    </section>
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
`;

const cardWrapperCss = css`
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

interface CardProps {
  title: string;
  value: string;
  description?: string;
}

function Card({ title, value, description }: CardProps) {
  return (
    <div css={cardCss}>
      <span css={titleCss}>{title}</span>
      <span css={valueCss}>{value}</span>
      {description && <small css={descriptionCss}>{description}</small>}
    </div>
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
`;

const titleCss = css`
  color: ${colors.gray3};
  font-size: 1.5rem;
  line-height: 112.5%;
  margin-bottom: 12px;
`;

const valueCss = css`
  font-size: 3.125rem;
  line-height: 112.5%;
  font-weight: 700;
`;

const descriptionCss = css`
  position: absolute;
  bottom: 20px;
  color: ${colors.gray6};
  font-size: 1.125rem;
`;
