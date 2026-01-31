import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { mediaQuery } from '~/styles/media';

const KAKAO_CHANNEL_URL = 'https://pf.kakao.com/_xoxmcxjs';
const EMAIL_ADDRESS = 'depromeet@gmail.com';

export const ContactSection = () => {
  const handleKakaoClick = () => {
    window.open(KAKAO_CHANNEL_URL, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${EMAIL_ADDRESS}`;
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
          더 궁금한 점이 있으신가요?
        </motion.h2>
        <div css={buttonsCss}>
          <motion.button
            css={contactButtonCss}
            onClick={handleKakaoClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <KakaoIcon />
            <span>카카오톡 문의하기</span>
            <ArrowIcon />
          </motion.button>
          <motion.button
            css={contactButtonCss}
            onClick={handleEmailClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <EmailIcon />
            <span>이메일로 문의하기</span>
            <ArrowIcon />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

const KakaoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FEE500" />
    <path
      d="M12 6C8.13 6 5 8.52 5 11.6C5 13.54 6.3 15.24 8.24 16.22L7.5 19.1C7.46 19.26 7.64 19.4 7.78 19.3L11.14 17.04C11.42 17.08 11.7 17.1 12 17.1C15.87 17.1 19 14.58 19 11.5C19 8.52 15.87 6 12 6Z"
      fill="#3C1E1E"
    />
  </svg>
);

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="#666666" strokeWidth="1.5" />
    <path d="M3 7L12 13L21 7" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" stroke="#2196F3" strokeWidth="1.5" />
    <path d="M10 8L14 12L10 16" stroke="#2196F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const sectionCss = css`
  width: 100%;
  padding: 80px 40px;
  background: #ffffff;

  ${mediaQuery('mobile')} {
    padding: 60px 20px;
  }
`;

const contentCss = css`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const titleCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 40px;

  ${mediaQuery('tablet')} {
    font-size: 28px;
  }

  ${mediaQuery('mobile')} {
    font-size: 20px;
    margin-bottom: 32px;
  }
`;

const buttonsCss = css`
  display: flex;
  justify-content: center;
  gap: 24px;

  ${mediaQuery('mobile')} {
    flex-direction: column;
    gap: 16px;
  }
`;

const contactButtonCss = css`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 32px;
  border: 1px solid #e0e0e0;
  border-radius: 100px;
  background: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #1a1a1a;

  &:hover {
    background: #f5f5f5;
    border-color: #d0d0d0;
  }

  ${mediaQuery('mobile')} {
    width: 100%;
    justify-content: center;
    padding: 16px 24px;
    font-size: 14px;
  }
`;
