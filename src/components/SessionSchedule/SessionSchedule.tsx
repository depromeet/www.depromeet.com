import { useEffect, useState } from 'react';
import { css, Theme } from '@emotion/react';

import { colors } from '~/styles/colors';

interface SessionItem {
  date: string;
  week: string;
  title: string;
  isOnline?: boolean;
}

const sessionScheduleData: SessionItem[] = [
  { date: '03.14', week: '1주차', title: 'OT' },
  { date: '03.21', week: '2주차', title: '아이디어 공유/피드백', isOnline: true },
  { date: '03.28', week: '3주차', title: '현직자와의 만남' },
  { date: '04.04', week: '4주차', title: '포커스 위크', isOnline: true },
  { date: '04.11', week: '5주차', title: '중간 발표', isOnline: true },
  { date: '04.18', week: '6주차', title: '캐주얼 네트워킹 세션' },
  { date: '04.25', week: '7주차', title: '딮커톤' },
  { date: '05.02', week: '8주차', title: '방학 🏄' },
  { date: '05.09', week: '9주차', title: '프리 런칭 데이' },
  { date: '05.16', week: '10주차', title: '딮크샵' },
  { date: '05.23', week: '11주차', title: '포커스 위크', isOnline: true },
  { date: '05.30', week: '12주차', title: '커리어 성장 세션' },
  { date: '06.06', week: '13주차', title: '동문회' },
  { date: '06.13', week: '14주차', title: '딮케이션' },
  { date: '06.20', week: '15주차', title: '포커스 위크', isOnline: true },
  { date: '06.27', week: '16주차', title: '런칭 데이' },
  { date: '07.04', week: '17주차', title: '최종 발표' },
];

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
    <div css={containerCss}>
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
                      <p css={titleTextCss}>{session.title}</p>
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
                      <p css={titleTextCss}>{session.title}</p>
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
                    <p css={titleTextCss}>{session.title}</p>
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
  padding: 120px 20px;
  background-color: ${colors.grey18[900]};

  @media (max-width: 767px) {
    padding: 80px 20px;
  }
`;

const contentStyles = css`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;

  @media (min-width: 1920px) {
    max-width: 1200px;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    max-width: 600px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    max-width: 600px;
  }

  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

const headerCss = css`
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`;

const titleCss = css`
  color: ${colors.white};
  margin-bottom: 16px;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.01em;

  @media (max-width: 767px) {
    font-size: 26px;
    line-height: 1.25;
    letter-spacing: -0.05em;
  }
`;

const descriptionCss = css`
  color: ${colors.white};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const legendWrapperCss = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;

  @media (max-width: 767px) {
    margin-bottom: 12px;
  }
`;

const onlineLegendCss = css`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const legendBadgeCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${colors.primary18.strong};
  flex-shrink: 0;

  @media (max-width: 767px) {
    width: 18px;
    height: 18px;
  }
`;

const legendBadgeTextCss = css`
  font-size: 10.909px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.01em;
  color: ${colors.white};
  text-align: center;

  @media (max-width: 767px) {
    font-size: 8.1px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -0.02em;
  }
`;

const legendTextCss = css`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  color: ${colors.white};

  @media (max-width: 767px) {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -0.01em;
  }
`;

const sessionCardCss = css`
  background: ${colors.white};
  border-radius: 48px;
  padding: 56px 72px;
  width: 100%;

  @media (min-width: 768px) and (max-width: 1279px) {
    border-radius: 40px;
    padding: 56px 72px;
  }

  @media (max-width: 767px) {
    padding: 16px 20px;
    border-radius: 20px;
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
  gap: 40px;
  padding: 24px 40px 20px 0;
  border-bottom: ${isLast ? 'none' : `1px solid ${colors.grey18[300]}`};

  @media (min-width: 360px) and (max-width: 767px) {
    gap: 24px;
    padding: 12px 0;
  }
`;

const dateWeekContainerCss = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 105px;
  flex-shrink: 0;

  @media (max-width: 767px) {
    width: 48px;
  }
`;

const dateTextCss = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  color: ${colors.grey18[900]};
  text-align: left;
  margin: 0;

  @media (min-width: 360px) and (max-width: 767px) {
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.12px;
  }
`;

const weekTextCss = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.64px;
  color: ${colors.grey18[700]};
  margin: 0;

  @media (min-width: 360px) and (max-width: 767px) {
    font-size: 15px;
    line-height: 1.4;
    letter-spacing: 0;
  }
`;

const programContainerCss = css`
  display: flex;
  align-items: flex-end;
  gap: 16px;
  flex: 1;

  @media (max-width: 767px) {
    gap: 8px;
    align-items: center;
  }
`;

const titleTextCss = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.64px;
  color: ${colors.grey18[900]};
  margin: 0;

  @media (min-width: 360px) and (max-width: 767px) {
    font-size: 15px;
    line-height: 1.4;
    letter-spacing: 0;
  }
`;

const onlineBadgeCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${colors.primary18.strong};
  flex-shrink: 0;

  @media (max-width: 767px) {
    width: 18px;
    height: 18px;
  }
`;

const badgeTextCss = css`
  font-size: 18.182px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.01em;
  color: ${colors.white};
  text-align: center;

  @media (max-width: 767px) {
    font-size: 8.1px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -0.02em;
  }
`;
