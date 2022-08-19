import { useState } from 'react';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import Button from '~/components/common/Button';
import { defaultFadeInVariants, staggerHalf } from '~/constants/motions';
import {
  defaultFadeInSlideToRightVariants,
  defaultFadeInUpVariants,
  staggerOne,
} from '~/constants/motions/motions';
import { colors } from '~/styles/constants';

import { FAQ, FAQ_TYPE } from './constants';

export default function FaqSection() {
  const [currentTab, setCurrentTab] = useState<string>(FAQ_TYPE.REQUIREMENT);

  return (
    <motion.section
      css={sectionCss}
      initial="initial"
      whileInView="animate"
      exit="exit"
      variants={staggerHalf}
      viewport={{ amount: 0.4, once: true }}
    >
      <motion.h2 css={headingCss} variants={defaultFadeInVariants}>
        자주 묻는 질문
      </motion.h2>
      <motion.p css={descriptionCss} variants={defaultFadeInVariants}>
        찾으시는 내용이 없다면 디프만 카카오톡 채널 (
        <a css={kakaoLinkCss} href="http://pf.kakao.com/_xoxmcxed/chat" target="__blank">
          @depromeet
        </a>
        )으로 궁금한 점을 전달해 주세요.
      </motion.p>
      <motion.div css={tabContainerCss} variants={defaultFadeInSlideToRightVariants}>
        <Button
          isActive={currentTab === FAQ_TYPE.REQUIREMENT}
          onClick={() => {
            setCurrentTab(FAQ_TYPE.REQUIREMENT);
          }}
        >
          지원 자격
        </Button>
        <Button
          isActive={currentTab === FAQ_TYPE.INTERVIEW}
          onClick={() => {
            setCurrentTab(FAQ_TYPE.INTERVIEW);
          }}
        >
          면접 관련
        </Button>
        <Button
          isActive={currentTab === FAQ_TYPE.ACTIVITY}
          onClick={() => {
            setCurrentTab(FAQ_TYPE.ACTIVITY);
          }}
        >
          활동 관련
        </Button>
      </motion.div>
      <motion.ul css={faqListCss} variants={staggerOne}>
        {FAQ[currentTab].map((faq, index) => (
          <motion.li css={faqCss} variants={defaultFadeInUpVariants} key={`faq_${index}`}>
            <dt>
              <em>Q. </em>
              {faq.title}
            </dt>
            <dd>{faq.description}</dd>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}

const sectionCss = css`
  width: 100%;
  margin-bottom: 120px;
`;

const headingCss = css`
  font-weight: 700;
  font-size: 2.625rem;
  line-height: 140%;
`;

const descriptionCss = css`
  margin-top: 12px;

  font-weight: 400;
  font-size: 1.25rem;
  line-height: 150%;
  color: ${colors.gray2};
`;

const tabContainerCss = css`
  display: flex;
  gap: 0 40px;

  margin-top: 60px;
`;

const faqListCss = css`
  margin-top: 60px;
`;

const faqCss = css`
  margin-bottom: 60px;

  em {
    font-style: normal;
    color: ${colors.secondaryBlue};
  }

  dt {
    font-weight: 600;
    font-size: 1.625rem;
    line-height: 150%;
  }

  dd {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 150%;
    color: ${colors.gray4};
  }
`;

const kakaoLinkCss = css`
  color: ${colors.secondaryBlue};
`;
