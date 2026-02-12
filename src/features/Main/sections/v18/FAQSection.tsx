import { useState } from 'react';
import { css } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';

import { DEPROMEET_EMAIL, DEPROMEET_KAKAO_PLUS_FRIEND } from '~/constant/depromeet';
import { CONTENT_WIDTH } from '~/constant/layout';
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
      '관련 직무 경험이 없어도 지원 가능하지만, Product Designer와 Server Developer 직군은 지원 시 포트폴리오 제출이 필수입니다.',
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
    answer: '오프라인 세션 참여가 필수이기 때문에 서울 근교에 거주하시는 분들만 지원 가능합니다.',
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

  const handleKakaoClick = () => {
    window.open(DEPROMEET_KAKAO_PLUS_FRIEND, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = DEPROMEET_EMAIL;
  };

  return (
    <section css={sectionCss}>
      <div css={contentCss}>
        <h2 css={titleCss}>자주 묻는 질문</h2>

        <div css={tabsCss}>
          {CATEGORIES.map(category => (
            <button
              key={category}
              css={tabCss()}
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
          {filteredFAQs.map((faq, index) => (
            <div
              key={faq.question}
              css={faqItemCss}
              data-expanded={openIndex === index || undefined}
            >
              <button css={faqQuestionCss} onClick={() => handleToggle(index)}>
                <span>{faq.question}</span>
                <span css={arrowCss}>
                  <span css={arrowIconDesktopCss}>
                    {openIndex === index ? <ExpandedArrowIcon /> : <ArrowIcon />}
                  </span>
                  <span css={arrowIconMobileCss}>
                    {openIndex === index ? <ExpandedArrowIconMobile /> : <ArrowIconMobile />}
                  </span>
                </span>
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

        <div css={contactCss}>
          <h3 css={contactTitleCss}>더 궁금한 점이 있으신가요?</h3>
          <div css={buttonsCss}>
            <button css={kakaoButtonCss} onClick={handleKakaoClick}>
              <KakaoIcon />
              <span>카카오톡 문의하기</span>
              <ArrowRightIconDesktop />
              <ArrowRightIconDesktopHover />
              <ArrowRightIconMobile />
              <ArrowRightIconMobileHover />
            </button>
            <button css={emailButtonCss} onClick={handleEmailClick}>
              <EmailIcon />
              <span>이메일로 문의하기</span>
              <ArrowRightIconDesktop />
              <ArrowRightIconDesktopHover />
              <ArrowRightIconMobile />
              <ArrowRightIconMobileHover />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      fill="#C9CBCF"
    />
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

const ExpandedArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      fill="#2F3337"
    />
    <path
      d="M8 12L12 16L16 12"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 8L12 16"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIconMobile = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
      fill="#C9CBCF"
    />
    <path
      d="M9 12L12 9L9 6"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M6 9H12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ExpandedArrowIconMobile = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      fill="#2F3337"
    />
    <path
      d="M8 12L12 16L16 12"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 8L12 16"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const KakaoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#faq-kakao-clip)">
      <path
        d="M32 29.5C32 30.8808 30.8808 32 29.5 32H2.5C1.11925 32 0 30.8808 0 29.5V2.5C0 1.11925 1.11925 0 2.5 0H29.5C30.8808 0 32 1.11925 32 2.5V29.5Z"
        fill="#FFE812"
      />
      <path
        d="M16.0001 7.85938C10.8307 7.85938 6.64014 11.1635 6.64014 15.2394C6.64014 17.8745 8.39208 20.1867 11.0275 21.4923C10.8841 21.9868 10.1061 24.6733 10.0752 24.8843C10.0752 24.8843 10.0565 25.0429 10.1592 25.1034C10.2619 25.1639 10.3827 25.1169 10.3827 25.1169C10.6772 25.0757 13.7976 22.8839 14.3377 22.5033C14.8772 22.5797 15.4328 22.6194 16.0001 22.6194C21.1696 22.6194 25.3601 19.3153 25.3601 15.2394C25.3601 11.1635 21.1696 7.85938 16.0001 7.85938Z"
        fill="#3F2121"
      />
      <path
        d="M10.8251 17.8154C10.5273 17.8154 10.2851 17.5841 10.2851 17.2997V14.0917H9.44252C9.15029 14.0917 8.9126 13.8544 8.9126 13.5629C8.9126 13.2714 9.15038 13.0342 9.44252 13.0342H12.2077C12.4999 13.0342 12.7376 13.2714 12.7376 13.5629C12.7376 13.8544 12.4998 14.0917 12.2077 14.0917H11.3651V17.2997C11.3651 17.5841 11.1229 17.8154 10.8251 17.8154ZM15.5602 17.8084C15.335 17.8084 15.1627 17.717 15.1108 17.5699L14.8434 16.8699L13.1968 16.8698L12.9292 17.5703C12.8775 17.7171 12.7053 17.8084 12.4801 17.8084C12.3617 17.8085 12.2446 17.7831 12.1368 17.7339C11.988 17.6652 11.8449 17.4764 12.0089 16.9671L13.3005 13.5672C13.3915 13.3087 13.6679 13.0423 14.0196 13.0343C14.3724 13.0422 14.6487 13.3087 14.7399 13.5678L16.0311 16.9661C16.1954 17.4766 16.0523 17.6655 15.9034 17.734C15.7957 17.7831 15.6786 17.8085 15.5602 17.8084ZM14.5595 15.9134L14.0201 14.3811L13.4807 15.9134H14.5595ZM16.9001 17.7367C16.6147 17.7367 16.3826 17.5146 16.3826 17.2417V13.5742C16.3826 13.2764 16.6299 13.0342 16.9338 13.0342C17.2378 13.0342 17.4851 13.2764 17.4851 13.5742V16.7467H18.6326C18.918 16.7467 19.1501 16.9688 19.1501 17.2417C19.1501 17.5146 18.918 17.7367 18.6326 17.7367H16.9001ZM19.9002 17.8084C19.6023 17.8084 19.3602 17.5662 19.3602 17.2684V13.5742C19.3602 13.2764 19.6023 13.0342 19.9002 13.0342C20.198 13.0342 20.4402 13.2764 20.4402 13.5742V14.7348L21.9468 13.2282C22.0242 13.1507 22.1307 13.1081 22.2463 13.1081C22.3811 13.1081 22.5165 13.1662 22.6179 13.2675C22.7125 13.362 22.7689 13.4836 22.7766 13.6099C22.7845 13.7373 22.7421 13.854 22.6575 13.9387L21.4269 15.1691L22.7561 16.93C22.799 16.9865 22.8303 17.051 22.8481 17.1196C22.8659 17.1883 22.8699 17.2598 22.8598 17.3301C22.8502 17.4003 22.8267 17.468 22.7907 17.5291C22.7548 17.5903 22.707 17.6436 22.6503 17.6862C22.5569 17.7572 22.4428 17.7955 22.3255 17.7952C22.2418 17.7956 22.1592 17.7764 22.0843 17.7391C22.0094 17.7018 21.9443 17.6475 21.8941 17.5805L20.6277 15.9026L20.4403 16.09V17.2681C20.4402 17.4114 20.3832 17.5487 20.2819 17.65C20.1807 17.7512 20.0434 17.8082 19.9002 17.8084Z"
        fill="#FFE812"
      />
    </g>
    <defs>
      <clipPath id="faq-kakao-clip">
        <rect width="32" height="32" rx="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const EmailIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M29.3337 9.33301L17.3457 16.969C16.9388 17.2053 16.4768 17.3297 16.0063 17.3297C15.5359 17.3297 15.0738 17.2053 14.667 16.969L2.66699 9.33301"
      stroke="#2F3337"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.667 5.33301H5.33366C3.8609 5.33301 2.66699 6.52692 2.66699 7.99967V23.9997C2.66699 25.4724 3.8609 26.6663 5.33366 26.6663H26.667C28.1397 26.6663 29.3337 25.4724 29.3337 23.9997V7.99967C29.3337 6.52692 28.1397 5.33301 26.667 5.33301Z"
      stroke="#2F3337"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIconDesktop = () => (
  <span css={arrowDesktopIconCss} data-icon="desktop-default">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M16.0003 29.3337C23.3641 29.3337 29.3337 23.3641 29.3337 16.0003C29.3337 8.63653 23.3641 2.66699 16.0003 2.66699C8.63653 2.66699 2.66699 8.63653 2.66699 16.0003C2.66699 23.3641 8.63653 29.3337 16.0003 29.3337Z"
        fill="#0078E7"
      />
      <path
        d="M16 21.3337L21.3333 16.0003L16 10.667"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.667 16H21.3337"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const ArrowRightIconDesktopHover = () => (
  <span css={arrowDesktopIconHoverCss} data-icon="desktop-hover">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M16.0003 29.3337C23.3641 29.3337 29.3337 23.3641 29.3337 16.0003C29.3337 8.63653 23.3641 2.66699 16.0003 2.66699C8.63653 2.66699 2.66699 8.63653 2.66699 16.0003C2.66699 23.3641 8.63653 29.3337 16.0003 29.3337Z"
        fill="white"
      />
      <path
        d="M16 21.3337L21.3333 16.0003L16 10.667"
        stroke="#0078E7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.667 16H21.3337"
        stroke="#0078E7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const ArrowRightIconMobile = () => (
  <span css={arrowMobileIconCss} data-icon="mobile-default">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="#0078E7"
      />
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
  </span>
);

const ArrowRightIconMobileHover = () => (
  <span css={arrowMobileIconHoverCss} data-icon="mobile-hover">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="white"
      />
      <path
        d="M12 16L16 12L12 8"
        stroke="#0078E7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12H16"
        stroke="#0078E7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const sectionCss = css`
  width: 100%;
  padding: 120px 30px;
  background: ${colors.grey18['00']};

  ${mediaQuery('mobile')} {
    padding: 120px 20px;
  }
`;

const contentCss = css`
  width: 100%;
  max-width: ${CONTENT_WIDTH.desktop}px;
  margin: 0 auto;
`;

const titleCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.4;
  color: ${colors.grey18['900']};
  text-align: center;
  margin: 0 0 48px 0;

  ${mediaQuery('mobile')} {
    font-size: 1.25rem;
    margin-bottom: 32px;
  }
`;

const tabsCss = css`
  display: flex;
  justify-content: flex-start;
  gap: 0;
  margin-bottom: 28px;

  ${mediaQuery('mobile')} {
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const tabCss = () => css`
  padding: 16px 24px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const tabTextCss = (isActive: boolean) => css`
  display: inline-block;
  position: relative;
  font-family: Pretendard, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: ${isActive ? '#000' : '#999'};

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${isActive ? '#000' : 'transparent'};
  }

  ${mediaQuery('mobile')} {
    font-size: 0.875rem;
  }
`;

const faqListCss = css`
  display: flex;
  flex-direction: column;
`;

const faqItemCss = css`
  border-bottom: 1px solid ${colors.grey18['200']};

  &:first-of-type {
    border-top: none;
  }

  &[data-expanded] {
    background: #f1f2f3;
  }

  ${mediaQuery('mobile')} {
    padding: 0 20px;
  }
`;

const faqQuestionCss = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 24px 20px;
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;
  font-family: Pretendard, sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  color: #464c52;

  ${mediaQuery('mobile')} {
    padding: 16px 0;
    font-size: 0.8125rem;
  }
`;

const arrowCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const arrowIconDesktopCss = css`
  display: flex;

  ${mediaQuery('mobile')} {
    display: none;
  }
`;

const arrowIconMobileCss = css`
  display: none;

  ${mediaQuery('mobile')} {
    display: flex;
  }
`;

const faqAnswerCss = css`
  overflow: hidden;

  p {
    padding: 20px;
    font-family: Pretendard, sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #464c52;
    line-height: 1.6;
    margin: 0;

    ${mediaQuery('mobile')} {
      padding: 16px 0;
      font-size: 0.75rem;
    }
  }
`;

const contactCss = css`
  margin-top: 120px;
  text-align: center;
`;

const contactTitleCss = css`
  font-family: Pretendard, sans-serif;
  font-size: 2.25rem;
  font-weight: 700;
  color: ${colors.grey18['900']};
  margin: 0 0 60px 0;

  ${mediaQuery('mobile')} {
    font-size: 1.25rem;
  }
`;

const buttonsCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: nowrap;

  ${mediaQuery('mobile')} {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

const baseButtonCss = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px 28px;
  border-radius: 100px;
  cursor: pointer;
  font-family: Pretendard, sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.4;
  transition: all 0.2s ease;

  ${mediaQuery('mobile')} {
    width: 100%;
    max-width: 320px;
    height: 56px;
    padding: 0 30px;
    justify-content: space-between;
    font-size: 1.125rem;
    box-sizing: border-box;
  }
`;

const arrowDesktopIconCss = css`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const arrowDesktopIconHoverCss = css`
  display: none;
`;

const arrowMobileIconCss = css`
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
`;

const arrowMobileIconHoverCss = css`
  display: none;
`;

/* Figma 82-4630: 흰색 배경, 회색 테두리 */
const kakaoButtonCss = css`
  ${baseButtonCss};
  background: #fff;
  border: 2px solid #e3e5e7;
  color: ${colors.grey18['900']};

  &:hover {
    background: #0078e7;
    color: #fff;
  }

  @media (min-width: 768px) {
    &:hover [data-icon='desktop-default'] {
      display: none;
    }
    &:hover [data-icon='desktop-hover'] {
      display: flex;
    }
  }

  @media (max-width: 767px) {
    border-width: 1px;

    &:hover [data-icon='mobile-default'] {
      display: none;
    }
    &:hover [data-icon='mobile-hover'] {
      display: flex;
    }
  }
`;

const emailButtonCss = css`
  ${baseButtonCss};
  background: #fff;
  border: 2px solid #e3e5e7;
  color: ${colors.grey18['900']};

  &:hover {
    background: #0078e7;
    color: #fff;

    & > svg:first-of-type {
      filter: brightness(0) invert(1);
    }
  }

  @media (min-width: 768px) {
    &:hover [data-icon='desktop-default'] {
      display: none;
    }
    &:hover [data-icon='desktop-hover'] {
      display: flex;
    }
  }

  @media (max-width: 767px) {
    border-width: 1px;

    &:hover [data-icon='mobile-default'] {
      display: none;
    }
    &:hover [data-icon='mobile-hover'] {
      display: flex;
    }
  }
`;
