import Image from 'next/image';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';

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

export const FeaturesSection = () => {
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
          디프만에서 할 수 있는 경험들
        </motion.h2>
        <div css={gridCss}>
          {FEATURES.map((feature, index) => (
            <motion.article
              key={feature.title}
              css={cardCss}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div css={imageContainerCss}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  css={imageCss}
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
                />
              </div>
              <h3 css={cardTitleCss}>{feature.title}</h3>
              <p css={cardDescriptionCss}>{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

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

const gridCss = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  ${mediaQuery('tablet')} {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  ${mediaQuery('mobile')} {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;

const cardCss = css`
  display: flex;
  flex-direction: column;

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

const imageContainerCss = css`
  position: relative;
  width: 100%;
  aspect-ratio: 288 / 360;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 24px;

  ${mediaQuery('mobile')} {
    aspect-ratio: 152 / 190;
    border-radius: 8px;
    margin-bottom: 16px;
  }
`;

const imageCss = css`
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const cardTitleCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: ${colors.grey18['900']};
  line-height: 1.4;
  margin-bottom: 12px;

  ${mediaQuery('mobile')} {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

const cardDescriptionCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: ${colors.grey18['600']};
  line-height: 1.6;

  ${mediaQuery('mobile')} {
    font-size: 12px;
  }
`;
