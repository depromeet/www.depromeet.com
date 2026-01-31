import { useState } from 'react';
import { css } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';

import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';

type FAQCategory = '지원자격' | '면접관련' | '활동관련';

interface FAQItem {
  question: string;
  answer: string;
  category: FAQCategory;
}

const FAQ_DATA: FAQItem[] = [
  {
    category: '지원자격',
    question: '지원 가능한 나이가 어떻게 되나요?',
    answer: '나이 제한은 없습니다. 열정과 의지만 있다면 누구나 지원 가능합니다.',
  },
  {
    category: '지원자격',
    question: '관련 경험이 없어도 지원 가능한가요?',
    answer:
      '관련 직무 경험이 없어도 지원 가능하지만, Product Designer 직군은 지원 시 포트폴리오 제출이 필수입니다.',
  },
  {
    category: '지원자격',
    question: '실력이 뛰어나야만 참여할 수 있나요?',
    answer:
      '실력보다는 성장하고자 하는 의지와 팀원들과 협업할 수 있는 자세가 더 중요합니다. 함께 성장할 준비가 되어있다면 지원해주세요.',
  },
  {
    category: '지원자격',
    question: '외국 거주자도 지원할 수 있나요?',
    answer:
      '오프라인 세션 참여가 필수이기 때문에 서울 근교에 거주하시는 분들만 지원 가능합니다.',
  },
  {
    category: '지원자격',
    question: '직군간 중복지원이 가능한가요?',
    answer: '중복지원은 불가능합니다. 하나의 직군만 선택하여 지원해주세요.',
  },
  {
    category: '지원자격',
    question: '지원 결과는 언제, 어디서 확인 가능한가요?',
    answer: '지원 결과는 서류 마감 후 1-2주 내에 지원서에 작성해주신 이메일로 안내드립니다.',
  },
  {
    category: '면접관련',
    question: '면접은 어떻게 진행되나요?',
    answer:
      '면접은 온라인으로 약 30분간 진행됩니다. 지원서를 바탕으로 한 질문과 간단한 직무 관련 질문이 있습니다.',
  },
  {
    category: '면접관련',
    question: '면접 일정은 어떻게 정해지나요?',
    answer: '서류 합격자에 한해 개별적으로 면접 가능 일정을 조율합니다.',
  },
  {
    category: '활동관련',
    question: '활동 기간은 얼마나 되나요?',
    answer: '약 17주간 진행되며, 매주 토요일 오후에 정기 세션이 있습니다.',
  },
  {
    category: '활동관련',
    question: '활동비가 있나요?',
    answer: '소정의 활동비(보증금)가 있으며, 활동을 성실히 마치면 전액 환급됩니다.',
  },
];

const CATEGORIES: FAQCategory[] = ['지원자격', '면접관련', '활동관련'];

export const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>('지원자격');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFAQs = FAQ_DATA.filter(faq => faq.category === activeCategory);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section css={sectionCss}>
      <div css={contentCss}>
        <h2 css={titleCss}>자주 묻는 질문</h2>
        <div css={tabsCss}>
          {CATEGORIES.map(category => (
            <button
              key={category}
              css={tabCss(activeCategory === category)}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null);
              }}
            >
              {category}
            </button>
          ))}
        </div>
        <div css={faqListCss}>
          {filteredFAQs.map((faq, index) => (
            <div key={faq.question} css={faqItemCss}>
              <button css={faqQuestionCss} onClick={() => handleToggle(index)}>
                <span>{faq.question}</span>
                <motion.span
                  css={arrowCss}
                  animate={{ rotate: openIndex === index ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowIcon />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
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
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1" />
    <path d="M10 8L14 12L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

const titleCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: ${colors.grey18['900']};
  text-align: center;
  margin-bottom: 48px;

  ${mediaQuery('tablet')} {
    font-size: 28px;
  }

  ${mediaQuery('mobile')} {
    font-size: 20px;
    margin-bottom: 32px;
  }
`;

const tabsCss = css`
  display: flex;
  gap: 0;
  margin-bottom: 24px;
  border-bottom: 1px solid ${colors.grey18['200']};
`;

const tabCss = (isActive: boolean) => css`
  padding: 16px 24px;
  border: none;
  background: transparent;
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-weight: ${isActive ? 600 : 400};
  color: ${isActive ? colors.grey18['900'] : colors.grey18['500']};
  cursor: pointer;
  position: relative;
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 24px;
    right: 24px;
    height: 2px;
    background: ${isActive ? colors.grey18['900'] : 'transparent'};
    transition: background 0.2s ease;
  }

  &:hover {
    color: ${colors.grey18['900']};
  }

  ${mediaQuery('mobile')} {
    flex: 1;
    padding: 12px 16px;
    font-size: 14px;

    &::after {
      left: 16px;
      right: 16px;
    }
  }
`;

const faqListCss = css`
  display: flex;
  flex-direction: column;
`;

const faqItemCss = css`
  border-bottom: 1px solid ${colors.grey18['100']};
`;

const faqQuestionCss = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 20px;
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: ${colors.grey18['900']};
  transition: background 0.2s ease;

  &:hover {
    background: ${colors.grey18['100']};
  }

  ${mediaQuery('mobile')} {
    padding: 16px 0;
    font-size: 14px;
  }
`;

const arrowCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.grey18['500']};
  flex-shrink: 0;
`;

const faqAnswerCss = css`
  overflow: hidden;

  p {
    padding: 0 20px 24px;
    font-family: Pretendard, sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: ${colors.grey18['600']};
    line-height: 1.6;

    ${mediaQuery('mobile')} {
      padding: 0 0 16px;
      font-size: 13px;
    }
  }
`;
