import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';

interface ProjectItem {
  image: string;
  name: string;
  description: string;
  link?: string;
}

const PROJECTS: ProjectItem[] = [
  {
    image: '/images/project/17기/Globber.png',
    name: 'Globber',
    description: '다녀온 여행지를 지구본 위에 기록하고, 지인에게 나의 여행을 자랑할 수 있는 서비스',
  },
  {
    image: '/images/project/17기/밥토리.png',
    name: '밥토리',
    description: '식당 찾기 스트레스 없이 혼밥을 더 자유롭고 편하게',
  },
  {
    image: '/images/project/17기/모무찌.png',
    name: '모무찌',
    description: '모두의 취향을 모아 바로 추천받는 모임 식당',
  },
  {
    image: '/images/project/17기/Kkruk (꾸룩).png',
    name: 'Kkruk',
    description: '씹읍수록 건강해지는 기록 꾸룩과 함께 장 건강을 관리해보세요!',
  },
  {
    image: '/images/project/17기/Hedge.png',
    name: 'Hedge',
    description: '실수를 성장 자산으로! 돈 버는 투자 습관을 위한, 투자 회고 서비스',
  },
  {
    image: '/images/project/17기/두런두런.png',
    name: '두런두런',
    description: '함께하면 즐거움이 두 배! 친구와 찾아가는 러닝 인증 서비스',
  },
];

export const ProjectsSection = () => {
  return (
    <section css={sectionCss}>
      <div css={contentCss}>
        <div css={headerCss}>
          <motion.h2
            css={titleCss}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            프로젝트
          </motion.h2>
          <motion.p
            css={subtitleCss}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            디프만 멤버 &apos;디퍼(DEEPER)&apos;들의 다양한 프로젝트를 확인해보세요
          </motion.p>
        </div>
        <div css={gridCss}>
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.name}
              css={cardCss}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div css={imageContainerCss}>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  css={imageCss}
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                />
              </div>
              <h3 css={projectNameCss}>{project.name}</h3>
              <p css={projectDescriptionCss}>{project.description}</p>
            </motion.article>
          ))}
        </div>
        <div css={buttonContainerCss}>
          <Link href="/project" css={viewAllButtonCss}>
            프로젝트 전체 보기
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ArrowRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
    <path
      d="M10 8L14 12L10 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
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

const headerCss = css`
  margin-bottom: 48px;

  ${mediaQuery('mobile')} {
    margin-bottom: 32px;
  }
`;

const titleCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: ${colors.grey18['900']};
  margin-bottom: 12px;

  ${mediaQuery('tablet')} {
    font-size: 28px;
  }

  ${mediaQuery('mobile')} {
    font-size: 20px;
    margin-bottom: 8px;
  }
`;

const subtitleCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: ${colors.grey18['600']};

  ${mediaQuery('mobile')} {
    font-size: 14px;
  }
`;

const gridCss = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  ${mediaQuery('tablet')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQuery('mobile')} {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const cardCss = css`
  display: flex;
  flex-direction: column;
`;

const imageContainerCss = css`
  position: relative;
  width: 100%;
  aspect-ratio: 389 / 280;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 16px;

  ${mediaQuery('mobile')} {
    border-radius: 12px;
  }
`;

const imageCss = css`
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const projectNameCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: ${colors.grey18['900']};
  margin-bottom: 8px;

  ${mediaQuery('mobile')} {
    font-size: 18px;
  }
`;

const projectDescriptionCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: ${colors.grey18['600']};
  line-height: 1.6;
`;

const buttonContainerCss = css`
  display: flex;
  justify-content: center;
  margin-top: 48px;

  ${mediaQuery('mobile')} {
    margin-top: 32px;
  }
`;

const viewAllButtonCss = css`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  border: 1px solid ${colors.grey18['200']};
  border-radius: 100px;
  background: transparent;
  color: ${colors.grey18['900']};
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.grey18['100']};
  }

  ${mediaQuery('mobile')} {
    font-size: 14px;
    padding: 12px 24px;
  }
`;
