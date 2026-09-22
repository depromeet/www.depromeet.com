import { useState } from 'react';
import { css } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';

import { CircleArrowRightIcon } from '~/components/Icons/CircleArrowRightIcon';
import { DEPROMEET_EMAIL, DEPROMEET_KAKAO_PLUS_FRIEND } from '~/constant/depromeet';
import { FaqCategory, RECRUIT } from '~/constant/recruit';
import { colors } from '~/styles/colors';
import { theme } from '~/styles/theme';

const FAQ_DATA = RECRUIT.faq;

const CATEGORIES: FaqCategory[] = ['지원자격', '면접관련', '활동관련'];

export const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>('지원자격');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFAQs = FAQ_DATA.filter(faq => faq.category === activeCategory);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKakaoClick = () => {
    window.open(DEPROMEET_KAKAO_PLUS_FRIEND, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = DEPROMEET_EMAIL;
  };

  return (
    <section css={sectionCss} data-gnb-theme="light">
      <div css={contentCss}>
        <h2 css={titleCss}>자주 묻는 질문</h2>

        <div css={tabsCss}>
          {CATEGORIES.map(category => (
            <button
              key={category}
              type="button"
              css={tabCss}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null);
              }}
            >
              <span css={tabTextCss(activeCategory === category)}>{category}</span>
            </button>
          ))}
        </div>

        <div css={faqListCss}>
          {filteredFAQs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${activeCategory}-${index}`;
            const triggerId = `faq-trigger-${activeCategory}-${index}`;

            return (
              <div key={faq.question} css={faqItemCss} data-expanded={isOpen || undefined}>
                <button
                  type="button"
                  id={triggerId}
                  css={faqQuestionCss}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => handleToggle(index)}
                >
                  <span>{faq.question}</span>
                  <span css={[arrowCss, isOpen && arrowOpenCss]}>
                    <CircleArrowRight />
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      css={faqAnswerCss}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div css={contactCss}>
          <h3 css={contactTitleCss}>더 궁금한 점이 있으신가요?</h3>
          <div css={buttonsCss}>
            <button type="button" css={kakaoButtonCss} onClick={handleKakaoClick}>
              <KakaoIcon />
              <span css={buttonLabelCss}>카카오톡 문의하기</span>
              <CircleArrowRightIcon size={26.667} />
            </button>
            <button type="button" css={emailButtonCss} onClick={handleEmailClick}>
              <EmailIcon />
              <span css={buttonLabelCss}>이메일로 문의하기</span>
              <CircleArrowRightIcon size={26.667} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/** 아코디언 트리거 아이콘. 열림 상태는 CSS로 90deg 회전시켜 표현한다(별도 파일 없음). */
const CircleArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="currentColor" />
    <path
      d="M12 16L16 12L12 8"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 12H16"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const KakaoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#v19-faq-kakao-clip)">
      <path
        d="M32 29.5C32 30.8808 30.8808 32 29.5 32H2.5C1.11925 32 0 30.8808 0 29.5V2.5C0 1.11925 1.11925 0 2.5 0H29.5C30.8808 0 32 1.11925 32 2.5V29.5Z"
        fill="#FFE812"
      />
      <path
        d="M16.0001 7.85938C10.8307 7.85938 6.64014 11.1635 6.64014 15.2394C6.64014 17.8745 8.39208 20.1867 11.0275 21.4923C10.8841 21.9868 10.1061 24.6733 10.0752 24.8843C10.0752 24.8843 10.0565 25.0429 10.1592 25.1034C10.2619 25.1639 10.3827 25.1169 10.3827 25.1169C10.6772 25.0757 13.7976 22.8839 14.3377 22.5033C14.8772 22.5797 15.4328 22.6194 16.0001 22.6194C21.1696 22.6194 25.3601 19.3153 25.3601 15.2394C25.3601 11.1635 21.1696 7.85938 16.0001 7.85938Z"
        fill="#3F2121"
      />
    </g>
    <defs>
      <clipPath id="v19-faq-kakao-clip">
        <rect width="32" height="32" rx="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const EmailIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M29.3337 9.33301L17.3457 16.969C16.9388 17.2053 16.4768 17.3297 16.0063 17.3297C15.5359 17.3297 15.0738 17.2053 14.667 16.969L2.66699 9.33301"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.667 5.33301H5.33366C3.8609 5.33301 2.66699 6.52692 2.66699 7.99967V23.9997C2.66699 25.4724 3.8609 26.6663 5.33366 26.6663H26.667C28.1397 26.6663 29.3337 25.4724 29.3337 23.9997V7.99967C29.3337 6.52692 28.1397 5.33301 26.667 5.33301Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const sectionCss = css`
  width: 100%;
  background: ${colors.v19.coolGray100};
  padding: 60px 20px;

  @media (min-width: 768px) {
    padding: 120px 40px;
  }
`;

const contentCss = css`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const titleCss = css`
  ${theme.typosV4.pretendard.sub2B};
  color: ${colors.v19.coolGray900};
  text-align: center;
  margin: 0 0 32px 0;

  @media (min-width: 768px) {
    ${theme.typosV4.pretendard.head1};
    margin-bottom: 40px;
  }
`;

const tabsCss = css`
  display: flex;
  justify-content: space-between;
  gap: 0;
  margin-bottom: 20px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
    margin-bottom: 28px;
  }
`;

const tabCss = css`
  padding: 16px;
  border: none;
  background: transparent;
  cursor: pointer;
  flex: 1;

  @media (min-width: 768px) {
    flex: 0 0 auto;
    padding: 16px 24px;
  }
`;

const tabTextCss = (isActive: boolean) => css`
  display: inline-block;
  position: relative;
  ${theme.typosV4.pretendard.sub6M};
  white-space: nowrap;
  color: ${isActive ? colors.v19.coolGray900 : colors.v19.coolGray400};

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${isActive ? colors.v19.coolGray900 : 'transparent'};
  }

  @media (min-width: 768px) {
    ${theme.typosV4.pretendard.sub2M};
  }
`;

const faqListCss = css`
  display: flex;
  flex-direction: column;
`;

const faqItemCss = css`
  border-bottom: 1px solid ${colors.v19.coolGray200};

  &[data-expanded] {
    background: ${colors.v19.white100};
  }
`;

const faqQuestionCss = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;
  ${theme.typosV4.pretendard.body5M};
  color: ${colors.v19.coolGray800};

  @media (min-width: 768px) {
    padding: 24px 20px;
    ${theme.typosV4.pretendard.sub2M};
  }
`;

const arrowCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${colors.v19.coolGray300};
  transition: transform 0.2s ease, color 0.2s ease;
  width: 18px;
  height: 18px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const arrowOpenCss = css`
  color: ${colors.v19.coolGray900};
  transform: rotate(90deg);
`;

const faqAnswerCss = css`
  overflow: hidden;

  p {
    padding: 0 20px 16px;
    font-family: 'Pretendard', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: ${colors.v19.coolGray600};
    line-height: 1.6;
    margin: 0;

    @media (min-width: 768px) {
      padding: 0 20px 20px;
      font-size: 16px;
    }
  }
`;

const contactCss = css`
  margin-top: 60px;
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 40px;
  }

  @media (min-width: 1280px) {
    margin-top: 120px;
  }
`;

const contactTitleCss = css`
  ${theme.typosV4.pretendard.sub2B};
  color: ${colors.v19.coolGray900};
  margin: 0 0 32px 0;

  @media (min-width: 768px) {
    ${theme.typosV4.pretendard.head1};
    margin-bottom: 60px;
  }
`;

const buttonsCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }

  @media (min-width: 1280px) {
    gap: 40px;
  }
`;

const baseButtonCss = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  max-width: 320px;
  height: 56px;
  padding: 0 24px;
  border-radius: 200px;
  cursor: pointer;
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
  transition: all 0.2s ease;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: auto;
    max-width: none;
    flex-shrink: 0;
    white-space: nowrap;
    height: 80px;
    padding: 0 17px;
    gap: 12px;
    ${theme.typosV4.pretendard.sub1M};
  }

  @media (min-width: 1280px) {
    padding: 0 52px;
  }
`;

const buttonLabelCss = css`
  width: 172px;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const kakaoButtonCss = css`
  ${baseButtonCss};
  background: ${colors.v19.white100};
  border: 2px solid ${colors.v19.coolGray200};
  color: ${colors.v19.coolGray900};

  &:hover {
    background: ${colors.v19.blue500};
    color: ${colors.v19.white100};

    [data-icon='default'] {
      display: none;
    }
    [data-icon='hover'] {
      display: flex;
    }
  }
`;

const emailButtonCss = css`
  ${baseButtonCss};
  background: ${colors.v19.white100};
  border: 2px solid ${colors.v19.coolGray200};
  color: ${colors.v19.coolGray900};

  &:hover {
    background: ${colors.v19.blue500};
    color: ${colors.v19.white100};

    [data-icon='default'] {
      display: none;
    }
    [data-icon='hover'] {
      display: flex;
    }
  }
`;
