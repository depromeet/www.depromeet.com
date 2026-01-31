import Image from 'next/image';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';

interface Sponsor {
  name: string;
  logo: string;
  width: number;
  height: number;
}

const SPONSORS: Sponsor[] = [
  { name: 'elice', logo: '/images/17th/support/sponsor-elice.png', width: 198, height: 59 },
  { name: 'Gather', logo: '/images/17th/support/sponsor-gather.png', width: 180, height: 50 },
  { name: 'Naver Cloud Platform', logo: '/images/17th/support/sponsor-naver-cloud.png', width: 180, height: 50 },
  { name: 'Adelab', logo: '/images/17th/support/sponsor-adelab.png', width: 160, height: 50 },
  { name: '직행', logo: '/images/17th/support/sponsor-zighang.png', width: 120, height: 50 },
  { name: 'NineHire', logo: '/images/17th/support/sponsor-ninehire.png', width: 160, height: 40 },
  { name: 'FastFive', logo: '/images/17th/support/sponsor-fastfive.png', width: 160, height: 40 },
  { name: 'F-Lab', logo: '/images/17th/support/sponsor-f-lab.png', width: 140, height: 40 },
];

const EMAIL_ADDRESS = 'depromeet@gmail.com';

export const SponsorsSection = () => {
  const handleInquiry = () => {
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=디프만 후원 문의`;
  };

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
          후원사
        </motion.h2>
        <motion.p
          css={subtitleCss}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          디프만은 IT비영리단체로 후원을 통해 더 많은 교육 기회에 도움을 받고 있습니다
        </motion.p>
        <motion.div
          css={logoGridCss}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {SPONSORS.map(sponsor => (
            <div key={sponsor.name} css={logoItemCss}>
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={sponsor.width}
                height={sponsor.height}
                css={logoImageCss}
              />
            </div>
          ))}
        </motion.div>
        <motion.button
          css={inquiryButtonCss}
          onClick={handleInquiry}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          후원 문의하기
          <ArrowIcon />
        </motion.button>
      </div>
    </section>
  );
};

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" stroke={colors.primary18.strong} strokeWidth="1.5" />
    <path d="M10 8L14 12L10 16" stroke={colors.primary18.strong} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const titleCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: ${colors.grey18['900']};
  margin-bottom: 16px;

  ${mediaQuery('tablet')} {
    font-size: 28px;
  }

  ${mediaQuery('mobile')} {
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

const subtitleCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: ${colors.grey18['600']};
  margin-bottom: 60px;

  ${mediaQuery('mobile')} {
    font-size: 14px;
    margin-bottom: 40px;
  }
`;

const logoGridCss = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px 60px;
  margin-bottom: 48px;

  ${mediaQuery('tablet')} {
    gap: 32px 48px;
  }

  ${mediaQuery('mobile')} {
    gap: 24px 32px;
    margin-bottom: 32px;
  }
`;

const logoItemCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 140px;
  height: 60px;

  ${mediaQuery('mobile')} {
    min-width: 100px;
    height: 50px;
  }
`;

const logoImageCss = css`
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.2s ease;

  &:hover {
    filter: grayscale(0%);
    opacity: 1;
  }

  ${mediaQuery('mobile')} {
    max-width: 100px;
    height: auto;
  }
`;

const inquiryButtonCss = css`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  border: 1px solid ${colors.grey18['200']};
  border-radius: 100px;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: ${colors.grey18['900']};

  &:hover {
    background: ${colors.grey18['100']};
  }

  ${mediaQuery('mobile')} {
    padding: 12px 24px;
    font-size: 14px;
  }
`;
