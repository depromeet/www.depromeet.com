import { useState } from 'react';
import Image from 'next/image';
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
import useMediaQuery from '~/hooks/use-media-query';
import { colors, mediaQuery, radius } from '~/styles/constants';

import {
  CONTENTS_PER_TEAM,
  POSITION_ICON_IMAGES,
  POSITION_ICON_MOBILE,
  TEAMS,
  TeamType,
} from './source';

export default function TeamSection() {
  const isMobile = useMediaQuery('xs');

  const [currentTeam, setCurrentTeam] = useState<TeamType>('UIUX Design');

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
            <div css={contentImageWrapperCss}>
              <Image
                src={
                  isMobile ? POSITION_ICON_MOBILE[currentTeam] : POSITION_ICON_IMAGES[currentTeam]
                }
                alt={currentTeam}
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                blurDataURL={
                  isMobile ? POSITION_ICON_MOBILE[currentTeam] : POSITION_ICON_IMAGES[currentTeam]
                }
                unoptimized
              />
            </div>

            <div css={contentTextWrapperCss}>
              <h3
                css={contentHeadingCss}
                dangerouslySetInnerHTML={{ __html: CONTENTS_PER_TEAM[currentTeam].heading }}
              ></h3>
              <p
                css={contentParagraphCss}
                dangerouslySetInnerHTML={{ __html: CONTENTS_PER_TEAM[currentTeam].paragraph }}
              ></p>
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

  ${mediaQuery('xs')} {
    font-size: 24px;
    font-weight: 500;

    margin-bottom: 30px;
  }
`;

const buttonWrapperCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.875rem;

  margin-bottom: 40px;

  ${mediaQuery('xs')} {
    overflow-x: scroll;
    justify-content: flex-start;
    gap: 14px;

    margin-bottom: 24px;
  }
`;

const contentWrapperCss = css`
  width: 100%;
  height: 330px;
  background-color: ${colors.gray9};
  border-radius: ${radius.lg};

  display: flex;
  gap: 5rem;

  ${mediaQuery('xs')} {
    flex-direction: column;
    height: auto;
    min-height: 330px;
    gap: 30px;

    padding: 30px 20px;
  }
`;

const contentImageWrapperCss = css`
  position: relative;
  width: 23.125rem;
  height: 100%;
  flex-shrink: 0;

  ${mediaQuery('xs')} {
    flex-direction: column;
    align-self: center;
    width: 120px;
    height: 120px;
  }
`;

const contentTextWrapperCss = css`
  width: 100%;
  height: 100%;
  padding-right: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${mediaQuery('xs')} {
    padding-right: 0;
  }
`;

const contentHeadingCss = css`
  color: ${colors.gray1};
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 150%;
  margin-bottom: 10px;

  ${mediaQuery('xs')} {
    font-size: 18px;
    text-align: center;
  }
`;

const contentParagraphCss = css`
  color: ${colors.gray4};
  font-size: 1.375rem;
  line-height: 150%;

  ${mediaQuery('xs')} {
    font-size: 14px;
    text-align: center;
  }
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
