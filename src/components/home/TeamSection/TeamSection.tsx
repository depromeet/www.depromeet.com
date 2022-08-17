import { useState } from 'react';
import { css } from '@emotion/react';
import { AnimatePresence, motion, Variants } from 'framer-motion';

import Button from '~/components/common/Button';
import {
  defaultEasing,
  defaultFadeInScaleVariants,
  defaultFadeInVariants,
  staggerHalf,
  staggerOne,
} from '~/constants/motions';
import { colors, radius } from '~/styles/constants';

const TEAMS = ['UIUX DESIGN', 'iOS', 'AOS', 'Frontend', 'Server'] as const;

type TeamType = typeof TEAMS[number];

type Contents = {
  [team in TeamType]: { heading: string; paragraph: string };
};

const CONTENTS_PER_TEAM: Contents = {
  'UIUX DESIGN': {
    heading: '서비스의 디자인의 모든것을 담당하는 UIUX 디자이너',
    paragraph:
      '개발자와의 협업을 통해 서비스를 만드는 경험을 할 수 있어요. 디자인을 디자인디자인 할 수 있고 디자인을 디자인디자인 할 수 있고 설명 설명 설명',
  },
  iOS: {
    heading: 'iOS는 어쩌구 저쩌구...',
    paragraph:
      '개발자와의 협업을 통해 서비스를 만드는 경험을 할 수 있어요. 디자인을 디자인디자인 할 수 있고 디자인을 디자인디자인 할 수 있고 설명 설명 설명',
  },
  AOS: {
    heading: 'AOS는 어쩌구 저쩌구 ...',
    paragraph:
      '개발자와의 협업을 통해 서비스를 만드는 경험을 할 수 있어요. 디자인을 디자인디자인 할 수 있고 디자인을 디자인디자인 할 수 있고 설명 설명 설명',
  },
  Frontend: {
    heading: '프론트엔드는 어쩌구 저쩌구',
    paragraph:
      '개발자와의 협업을 통해 서비스를 만드는 경험을 할 수 있어요. 디자인을 디자인디자인 할 수 있고 디자인을 디자인디자인 할 수 있고 설명 설명 설명',
  },
  Server: {
    heading: '서버는 어쩌구 저쩌구',
    paragraph:
      '개발자와의 협업을 통해 서비스를 만드는 경험을 할 수 있어요. 디자인을 디자인디자인 할 수 있고 디자인을 디자인디자인 할 수 있고 설명 설명 설명',
  },
};

export default function TeamSection() {
  const [currentTeam, setCurrentTeam] = useState<TeamType>('UIUX DESIGN');

  function onClickTeamButton(team: TeamType) {
    setCurrentTeam(team);
  }

  return (
    <motion.section
      css={sectionCss}
      variants={staggerOne}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ amount: 0.6, once: true }}
    >
      <motion.h2 css={headingCss} variants={defaultFadeInVariants}>
        디프만의 팀은 어떻게 구성되어 있을까요?
      </motion.h2>

      <motion.div css={buttonWrapperCss} variants={staggerHalf}>
        {TEAMS.map(team => (
          <motion.div key={team} variants={defaultFadeInScaleVariants}>
            <Button isActive={currentTeam === team} onClick={() => onClickTeamButton(team)}>
              {team}
            </Button>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={defaultFadeInVariants}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={currentTeam}
            css={contentWrapperCss}
            variants={cardSwitchVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div css={contentImageWrapperCss}>이미지영역</div>

            <div>
              <h3 css={contentHeadingCss}>{CONTENTS_PER_TEAM[currentTeam].heading}</h3>
              <p css={contentParagraphCss}>{CONTENTS_PER_TEAM[currentTeam].paragraph}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}

const sectionCss = css`
  margin-top: 220px;
`;

const headingCss = css`
  text-align: center;
  font-size: 2.75rem;
  line-height: 150%;

  margin-bottom: 60px;
`;

const buttonWrapperCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.875rem;

  margin-bottom: 40px;
`;

const contentWrapperCss = css`
  width: 100%;
  height: 330px;
  padding: 4rem 5rem;
  background-color: ${colors.gray9};
  border-radius: ${radius.lg};

  display: flex;
  gap: 5rem;
`;

const contentImageWrapperCss = css`
  width: 15rem;
  height: 100%;
  background-color: gray;
  flex-shrink: 0;
`;

const contentHeadingCss = css`
  color: ${colors.gray1};
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 150%;
  margin-bottom: 10px;
`;

const contentParagraphCss = css`
  color: ${colors.gray4};
  font-size: 1.375rem;
  line-height: 150%;
`;

const cardSwitchVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.5, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.4, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};
