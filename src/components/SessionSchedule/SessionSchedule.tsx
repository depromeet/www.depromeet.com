import { useEffect, useState } from 'react';
import { css, Theme } from '@emotion/react';

import { RECRUIT } from '~/constant/recruit';
import { colors } from '~/styles/colors';
import { theme } from '~/styles/theme';
import { formatKoreanDate } from '~/utils/date';

interface SessionItem {
  date: string;
  week: string;
  title: string;
  isOnline?: boolean;
}

/** 주차 = 배열 순서 + 1. 날짜·이름은 설정에서 온다. */
const sessionScheduleData: SessionItem[] = RECRUIT.sessions.map((session, index) => ({
  date: formatKoreanDate(session.date, 'dot'),
  week: `${index + 1}주차`,
  title: session.title,
  isOnline: session.online,
}));

/** 영문 세션명(OT·UT 등)은 Instrument Sans, 한글은 Pretendard로 표기한다. */
const isEnglishTitle = (title: string) => /^[A-Za-z0-9\s]+$/.test(title);

export const SessionSchedule = () => {
  const [isLargeDesktop, setIsLargeDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeDesktop(window.innerWidth >= 1920);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const shouldShowTwoColumns = isLargeDesktop;
  const midPoint = Math.ceil(sessionScheduleData.length / 2);
  const firstColumn = sessionScheduleData.slice(0, midPoint);
  const secondColumn = sessionScheduleData.slice(midPoint);

  return (
    <div css={containerCss} data-gnb-theme="dark">
      <div css={contentStyles}>
        <div css={headerCss}>
          <h2 css={titleCss}>온/오프라인 세션</h2>
          <p css={descriptionCss}>
            세션은 매주 토요일에 진행되며,
            <br />
            오프라인 세션은 수도권 내에서 진행됩니다.
          </p>
        </div>

        <div css={legendWrapperCss}>
          <div css={onlineLegendCss}>
            <div css={legendBadgeCss}>
              <span css={legendBadgeTextCss}>온</span>
            </div>
            <span css={legendTextCss}>: 온라인 세션</span>
          </div>
        </div>

        <div css={sessionCardCss}>
          {shouldShowTwoColumns ? (
            <div css={twoColumnGridCss}>
              <div css={columnCss}>
                {firstColumn.map((session, index) => (
                  <div key={index} css={sessionItemCss(index === firstColumn.length - 1)}>
                    <div css={dateWeekContainerCss}>
                      <p css={dateTextCss}>{session.date}</p>
                      <p css={weekTextCss}>{session.week}</p>
                    </div>
                    <div css={programContainerCss}>
                      <p css={isEnglishTitle(session.title) ? titleTextEnCss : titleTextCss}>
                        {session.title}
                      </p>
                      {session.isOnline && (
                        <div css={onlineBadgeCss}>
                          <span css={badgeTextCss}>온</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div css={columnCss}>
                {secondColumn.map((session, index) => (
                  <div key={index} css={sessionItemCss(false)}>
                    <div css={dateWeekContainerCss}>
                      <p css={dateTextCss}>{session.date}</p>
                      <p css={weekTextCss}>{session.week}</p>
                    </div>
                    <div css={programContainerCss}>
                      <p css={isEnglishTitle(session.title) ? titleTextEnCss : titleTextCss}>
                        {session.title}
                      </p>
                      {session.isOnline && (
                        <div css={onlineBadgeCss}>
                          <span css={badgeTextCss}>온</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div css={singleColumnCss}>
              {sessionScheduleData.map((session, index) => (
                <div key={index} css={sessionItemCss(index === sessionScheduleData.length - 1)}>
                  <div css={dateWeekContainerCss}>
                    <p css={dateTextCss}>{session.date}</p>
                    <p css={weekTextCss}>{session.week}</p>
                  </div>
                  <div css={programContainerCss}>
                    <p css={isEnglishTitle(session.title) ? titleTextEnCss : titleTextCss}>
                      {session.title}
                    </p>
                    {session.isOnline && (
                      <div css={onlineBadgeCss}>
                        <span css={badgeTextCss}>온</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const containerCss = (_theme: Theme) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background-color: ${colors.v19.blue900};
  padding: 60px 20px;

  @media (min-width: 768px) {
    padding: 160px 40px 80px;
  }

  @media (min-width: 1280px) {
    padding: 120px 40px;
  }

  @media (min-width: 1920px) {
    padding: 160px 40px;
  }
`;

const contentStyles = css`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1280px;

  @media (min-width: 1280px) {
    max-width: 880px;
  }

  @media (min-width: 1920px) {
    max-width: 1280px;
  }
`;

const headerCss = css`
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 80px;
  }
`;

const titleCss = css`
  color: ${colors.v19.white100};
  margin: 0 0 8px;
  ${theme.typosV4.pretendard.head6};

  @media (min-width: 768px) {
    ${theme.typosV4.pretendard.head0};
  }
`;

const descriptionCss = css`
  color: ${colors.v19.coolGray400};
  ${theme.typosV4.pretendard.sub6M};
  margin: 0;

  @media (min-width: 768px) {
    ${theme.typosV4.pretendard.sub1M};
  }
`;

const legendWrapperCss = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

const onlineLegendCss = css`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (min-width: 768px) {
    gap: 6px;
  }

  @media (min-width: 1280px) {
    gap: 10px;
  }

  @media (min-width: 1920px) {
    gap: 13px;
  }
`;

const legendBadgeCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${colors.v19.blue200};
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const legendBadgeTextCss = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 8px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.01em;
  color: ${colors.v19.coolGray900};
  text-align: center;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const legendTextCss = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${colors.v19.white100};

  @media (min-width: 768px) {
    font-size: 14px;
    font-weight: 700;
  }

  @media (min-width: 1280px) {
    font-size: 17px;
  }

  @media (min-width: 1920px) {
    font-size: 20px;
    letter-spacing: 0;
  }
`;

const sessionCardCss = css`
  background: ${colors.v19.white004};
  border-radius: 20px;
  padding: 16px 20px;
  width: 100%;

  @media (min-width: 768px) {
    border-radius: 28px;
    padding: 56px 48px;
  }

  @media (min-width: 1280px) {
    border-radius: 34px;
    padding: 56px 60px;
  }

  @media (min-width: 1920px) {
    border-radius: 40px;
    padding: 40px 72px;
  }
`;

const twoColumnGridCss = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  width: 100%;
`;

const columnCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const singleColumnCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const sessionItemCss = (isLast: boolean) => css`
  display: flex;
  align-items: flex-end;
  gap: 24px;
  padding: 12px 0;
  border-bottom: ${isLast ? 'none' : `1px solid ${colors.v19.white010}`};

  @media (min-width: 768px) {
    gap: 32px;
    padding: 22px 32px 19px 0;
  }

  @media (min-width: 1280px) {
    gap: 40px;
    padding: 22px 40px 19px 0;
  }

  @media (min-width: 1920px) {
    gap: 40px;
    padding: 24px 40px 20px 0;
  }
`;

const dateWeekContainerCss = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 48px;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 105px;
  }
`;

const dateTextCss = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${colors.v19.white100};
  text-align: left;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 20px;
    letter-spacing: 0;
  }
`;

const weekTextCss = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.4;
  color: ${colors.v19.coolGray400};
  margin: 0;

  @media (min-width: 768px) {
    font-size: 32px;
    letter-spacing: 0.01em;
  }
`;

const programContainerCss = css`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;

  @media (min-width: 768px) {
    gap: 12px;
  }

  @media (min-width: 1920px) {
    gap: 16px;
  }
`;

const titleTextCss = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.4;
  color: ${colors.v19.white100};
  margin: 0;

  @media (min-width: 768px) {
    font-size: 32px;
    letter-spacing: 0.01em;
  }
`;

const titleTextEnCss = css`
  ${theme.typosV4.instrumentSans.body3};
  color: ${colors.v19.white100};
  margin: 0;

  @media (min-width: 768px) {
    ${theme.typosV4.instrumentSans.sub1};
    color: ${colors.v19.white100};
  }
`;

const onlineBadgeCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${colors.v19.blue200};
  flex-shrink: 0;
  transform: translateY(-1px);

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const badgeTextCss = css`
  font-size: 8.1px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${colors.v19.coolGray900};
  text-align: center;

  @media (min-width: 768px) {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: 0.01em;
  }
`;
