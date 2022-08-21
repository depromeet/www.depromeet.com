import { useState } from 'react';
import { css } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';

import Button from '~/components/common/Button';
import { NAV_HEIGHT } from '~/components/common/NavigationBar/NavigationBar';
import { defaultFadeInScaleVariants, staggerHalf } from '~/constants/motions';
import {
  defaultFadeInSlideToRightVariants,
  defaultFadeInUpVariants,
} from '~/constants/motions/motions';
import { colors, mediaQuery } from '~/styles/constants';

import { INTERVIEW_SOURCES, TEAMS, TeamType } from './source';

export default function InterviewSection() {
  const [currentTeam, setCurrentTeam] = useState<TeamType>('UIUX DESIGN');

  function onClickTeamButton(team: TeamType) {
    setCurrentTeam(team);
  }

  return (
    <section>
      <motion.div
        css={buttonWrapperCss}
        variants={staggerHalf}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {TEAMS.map(team => (
          <motion.div key={team} variants={defaultFadeInScaleVariants}>
            <Button isActive={currentTeam === team} onClick={() => onClickTeamButton(team)}>
              {team}
            </Button>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={currentTeam}
          variants={staggerHalf}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.h2 css={interviewerNameCss} variants={defaultFadeInSlideToRightVariants}>
            {INTERVIEW_SOURCES[currentTeam].name}
          </motion.h2>
          {INTERVIEW_SOURCES[currentTeam].source.map((source, index) => (
            <motion.article
              key={`${currentTeam}${index}`}
              css={questionWrapperCss}
              variants={defaultFadeInUpVariants}
            >
              <p css={questionCss}>Q. {source.question}</p>
              <p css={answerCss} dangerouslySetInnerHTML={{ __html: source.answer }}></p>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

const buttonWrapperCss = css`
  margin-top: 80px;

  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.875rem;

  margin-bottom: 100px;

  ${mediaQuery('xs')} {
    margin-top: 18px;

    background-color: ${colors.black};
    justify-content: flex-start;
    overflow-y: scroll;
    padding: 12px 0;
    gap: 14px;

    margin-bottom: 40px;

    position: sticky;
    top: ${NAV_HEIGHT}px;
    z-index: 1000;
  }
`;

const interviewerNameCss = css`
  font-size: 2.375rem;
  font-weight: 600;

  margin-bottom: 60px;

  ${mediaQuery('xs')} {
    font-size: 24px;
    margin-bottom: 30px;
  }
`;

const questionWrapperCss = css`
  margin-bottom: 60px;

  ${mediaQuery('xs')} {
    margin-bottom: 30px;
  }
`;

const questionCss = css`
  font-size: 1.625rem;
  line-height: 120%;
  font-weight: 600;

  &::first-letter {
    color: ${colors.secondaryBlue};
  }

  margin-bottom: 16px;

  ${mediaQuery('xs')} {
    font-size: 16px;
    line-height: 150%;

    margin-bottom: 8px;
  }
`;

const answerCss = css`
  color: ${colors.gray4};
  font-size: 1.25rem;
  line-height: 150%;

  ${mediaQuery('xs')} {
    font-size: 14px;
  }
`;
