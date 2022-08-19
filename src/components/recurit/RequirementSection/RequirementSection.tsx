import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { defaultFadeInVariants, staggerHalf } from '~/constants/motions';
import { defaultFadeInUpVariants } from '~/constants/motions/motions';

const REQUIREMNENT_LIST = [
  '매주 토요일, 오후 2~5시에 진행되는 정규 세션에 참여할 수 있는 분',
  '4개월간 맡은 역할을 충실히 이행할 수 있는 책임감 있는 분',
  '디프만 활동을 재밌게 할 수 있는 분',
  '새로운 것을 배울 의지가 있고, 성장을 위해 노력하는 분',
  '팀원들과 원활한 의사소통이 가능하신 분',
  '좋은 결과만 추구하는 것이 아닌, 모든 과정을 즐기는 태도를 가지신 분',
];

export default function RequirementSection() {
  return (
    <motion.section
      css={sectionCss}
      variants={staggerHalf}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ amount: 0.8, once: true }}
    >
      <motion.h2 css={headingCss} variants={defaultFadeInVariants}>
        공통 자격 요건
      </motion.h2>
      <motion.ul css={requirementListCss} variants={staggerHalf}>
        {REQUIREMNENT_LIST.map((requirement, index) => (
          <motion.li variants={defaultFadeInUpVariants} key={`common-requirement-${index}`}>
            {requirement}
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}

const sectionCss = css`
  width: 100%;
  margin-bottom: 180px;
`;

const headingCss = css`
  font-weight: 700;
  font-size: 2.625rem;
  line-height: 140%;
`;

const requirementListCss = css`
  margin-top: 30px;
  padding-left: 20px;

  list-style: disc;

  font-weight: 400;
  font-size: 1.375rem;
  line-height: 180%;
  color: #cbcad1;
`;
