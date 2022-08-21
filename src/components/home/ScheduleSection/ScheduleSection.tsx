import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { defaultFadeInVariants, staggerHalf } from '~/constants/motions';
import { defaultFadeInSlideToRightVariants, staggerOne } from '~/constants/motions/motions';
import { colors, mediaQuery, radius } from '~/styles/constants';

interface Scehdule {
  week: string;
  title: string;
  // TODO: 그래픽 링크 추가
}

const SCHEDULES: Scehdule[] = [
  {
    week: '1~3주차',
    title:
      '12기를 함께할 멤버들을 만날 수 있는 OT와 멋진 서비스를 위한 아이디에이션, MVP 설정을 진행해요.',
  },
  {
    week: '4~8주차',
    title:
      '연사들의 강연을 들으며 서비스 기획을 구체화하고, UT와 중간 공유로 유의미한 피드백을 받아요.',
  },
  {
    week: '9~13주차',
    title: '론칭을 위해 열심히 팀 활동을 수행해요.',
  },
  {
    week: '14~17주차',
    title: '드디어 최종 발표! 함께 모여 열심히 만든 서비스를 공유하고 우승팀을 선정해요.',
  },
];

export default function ScheduleSection() {
  return (
    <motion.section
      css={sectionCss}
      variants={staggerHalf}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ amount: 0.4, once: true }}
    >
      <motion.h2 css={headingCss} variants={defaultFadeInVariants}>
        디프만 12기는 다음과 같이 진행될 예정이에요!
      </motion.h2>
      <motion.p css={descriptionCss} variants={defaultFadeInVariants}>
        디프만 12기는 매주 토요일, 총 17주간 진행됩니다.
      </motion.p>

      <motion.div css={articleWrapperCss} variants={staggerOne}>
        {SCHEDULES.map(schedule => (
          <motion.article
            key={schedule.week}
            css={articleCss}
            variants={defaultFadeInSlideToRightVariants}
          >
            <span css={articleWeekCss}>{schedule.week}</span>
            <h3 css={articleTitleCss}>{schedule.title}</h3>

            <div css={articleImageWrapperCss}>그래픽 공간</div>
          </motion.article>
        ))}
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

  margin-bottom: 10px;

  ${mediaQuery('xs')} {
    font-size: 24px;
    font-weight: 500;

    margin-bottom: 8px;
  }
`;

const descriptionCss = css`
  text-align: center;
  color: ${colors.gray4};
  font-size: 1.625rem;
  line-height: 140%;

  margin-bottom: 50px;

  ${mediaQuery('xs')} {
    font-size: 14px;

    margin-bottom: 30px;
  }
`;

const articleWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: 30px;

  ${mediaQuery('xs')} {
    gap: 14px;
  }
`;

const articleCss = css`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: ${radius.md};
  background-color: ${colors.gray9};
  padding: 40px;

  overflow: hidden;

  ${mediaQuery('xs')} {
    padding: 20px;
  }
`;

const articleWeekCss = css`
  display: inline-block;
  color: ${colors.gray4};
  font-size: 1.25rem;

  margin-bottom: 12px;

  ${mediaQuery('xs')} {
    font-size: 14px;

    margin-bottom: 6px;
  }
`;

const articleTitleCss = css`
  color: ${colors.gray1};
  font-size: 1.5rem;
  line-height: 150%;
  width: 50%;

  ${mediaQuery('xs')} {
    font-size: 16px;
    font-weight: 500;
    width: 100%;
  }
`;

const articleImageWrapperCss = css`
  position: absolute;
  top: 0;
  right: 0;

  width: 378px;
  height: 100%;
  background-color: ${colors.gray8};

  ${mediaQuery('xs')} {
    top: unset;
    bottom: 20px;
    right: 20px;

    width: 70px;
    height: 70px;
  }
`;
