import { css } from '@emotion/react';

import CTAButton from '~/components/common/CTAButton';
import { NOTION_RECRUIT_PATH } from '~/constants/common/common';
import useGaEvent from '~/hooks/use-ga-event';
import { colors, mediaQuery } from '~/styles/constants';
import {
  DAY_TO_SECONDS,
  getDayByTimeSeconds,
  getHourByTimeSeconds,
  getMinuteByTimeSeconds,
  getSecondsByTimeSeconds,
  getTimerString,
  getTimeStringFormater,
} from '~/utils/time';

export default function InProgress({ remainTime }: { remainTime: number }) {
  const { recordApplyEvent } = useGaEvent();
  const getRemainDayString = (): string => {
    const remainDay = getDayByTimeSeconds(remainTime);
    return getTimeStringFormater(remainDay);
  };

  const getRemainTimeString = (): string => {
    const hour = getHourByTimeSeconds(remainTime);
    const min = getMinuteByTimeSeconds(remainTime);
    const sec = getSecondsByTimeSeconds(remainTime);

    return getTimerString(hour, min, sec);
  };

  return (
    <>
      <div css={descriptionCss}>서류 접수 마감까지</div>
      <h1 css={headingCss}>
        {remainTime > DAY_TO_SECONDS ? `D-${getRemainDayString()}` : getRemainTimeString()}
      </h1>

      <CTAButton
        onClick={() => {
          recordApplyEvent();
          window.open(NOTION_RECRUIT_PATH);
        }}
      >
        지금 지원하러 가기 &gt;
      </CTAButton>
    </>
  );
}

const descriptionCss = css`
  font-weight: 700;
  font-size: 2rem;
  line-height: 140%;
  text-align: center;

  color: ${colors.white};

  margin-bottom: 30px;

  ${mediaQuery('xs')} {
    font-size: 1.429rem;

    margin-bottom: 8px;
  }
`;

const headingCss = css`
  font-weight: 600;
  font-size: 8rem;
  line-height: 120%;
  text-align: center;

  color: ${colors.white};

  margin-bottom: 87px;

  ${mediaQuery('xs')} {
    font-size: 4.286rem;
    line-height: 150%;

    margin-bottom: 30px;
  }
`;
