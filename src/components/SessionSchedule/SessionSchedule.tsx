import { css, Theme } from '@emotion/react';

import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { sectionBg } from '~/styles/background';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';

interface SessionData {
  ot: string;
  mini: string;
  workshop: string;
  currentMeeting: string;
  teamBuilding: string;
}

interface OfflineSessionData {
  utSharing: string;
  hackathon: string;
  teamBuilding: string;
  presentationDay: string;
  feedback: string;
  networking: string;
}

interface FinalSessionData {
  teamBuilding: string;
  workOn: string;
  teamBuilding2: string;
  presentationDay: string;
  finalPresentation: string;
}

const onlineSessionData: SessionData = {
  ot: '08.02',
  mini: '08.09',
  currentMeeting: '08.16',
  workshop: '08.23-24',
  teamBuilding: '08.30',
};

const offlineSessionData: OfflineSessionData = {
  utSharing: '09.06',
  hackathon: '09.13',
  teamBuilding: '09.20',
  presentationDay: '09.27',
  feedback: '10.11',
  networking: '10.18',
};

const finalSessionData: FinalSessionData = {
  teamBuilding: '10.25',
  workOn: '11.01',
  teamBuilding2: '11.08',
  presentationDay: '11.15',
  finalPresentation: '11.22',
};

export const SessionSchedule = () => {
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');
  const { isTargetSize: isTabletSize } = useCheckWindowSize('tablet');

  return (
    <>
      {!isTabletSize && !isMobileSize && (
        <div css={containerCss}>
          <div css={contentStyles}>
            <div css={headerCss}>
              <h2 css={titleCss}>온/오프라인 세션</h2>
              <p css={descriptionCss}>
                세션은 매주 토요일 진행되며, 오프라인 세션은 서울에서 열립니다
              </p>
            </div>

            {/* 온라인 세션 테이블 */}
            <div css={tableContainerCss}>
              <table css={tableCss}>
                <thead>
                  <tr>
                    <th css={[headerCellCss, darkHeaderCss]}>OT</th>
                    <th css={headerCellCss}>미니 디프콘</th>
                    <th css={[headerCellCss, darkHeaderCss]}>현직자와의 만남</th>
                    <th css={[headerCellCss, darkHeaderCss]}>디프만 워크샵</th>
                    <th css={headerCellCss}>팀별 작업</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td css={cellCss}>{onlineSessionData.ot}</td>
                    <td css={cellCss}>{onlineSessionData.mini}</td>
                    <td css={cellCss}>{onlineSessionData.currentMeeting}</td>
                    <td css={cellCss}>{onlineSessionData.workshop}</td>
                    <td css={cellCss}>{onlineSessionData.teamBuilding}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 오프라인 세션 테이블 */}
            <div css={tableContainerCss}>
              <table css={tableCss}>
                <thead>
                  <tr>
                    <th css={[headerCellCss, darkHeaderCss]}>UT 공유</th>
                    <th css={[headerCellCss, darkHeaderCss]}>해커톤</th>
                    <th css={headerCellCss}>팀별 작업</th>
                    <th css={[headerCellCss, darkHeaderCss]}>프리런칭데이</th>
                    <th css={headerCellCss}>피드백 공유</th>
                    <th css={[headerCellCss, darkHeaderCss]}>반상회</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td css={cellCss}>{offlineSessionData.utSharing}</td>
                    <td css={cellCss}>{offlineSessionData.hackathon}</td>
                    <td css={cellCss}>{offlineSessionData.teamBuilding}</td>
                    <td css={cellCss}>{offlineSessionData.presentationDay}</td>
                    <td css={cellCss}>{offlineSessionData.feedback}</td>
                    <td css={cellCss}>{offlineSessionData.networking}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 최종 세션 테이블 */}
            <div css={tableContainerCss}>
              <table css={tableCss}>
                <thead>
                  <tr>
                    <th css={headerCellCss}>팀별 작업</th>
                    <th css={[headerCellCss, darkHeaderCss]}>워케이션</th>
                    <th css={headerCellCss}>팀별 작업</th>
                    <th css={[headerCellCss, darkHeaderCss]}>런칭데이</th>
                    <th css={[headerCellCss, darkHeaderCss]}>최종 발표</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td css={cellCss}>{finalSessionData.teamBuilding}</td>
                    <td css={cellCss}>{finalSessionData.workOn}</td>
                    <td css={cellCss}>{finalSessionData.teamBuilding2}</td>
                    <td css={cellCss}>{finalSessionData.presentationDay}</td>
                    <td css={cellCss}>{finalSessionData.finalPresentation}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 세션 타입 표시 */}
            <div css={sessionTypeCss}>
              <div css={sessionItemCss}>
                <div css={filledCircleCss} />
                <span css={sessionTextCss}>오프라인 세션</span>
              </div>
              <div css={sessionItemCss}>
                <div css={emptyCircleCss} />
                <span css={sessionTextCss}>온라인 세션</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {(isTabletSize || isMobileSize) && (
        <div css={containerCss}>
          <div css={contentStyles}>
            <div css={headerCss}>
              <h2 css={titleCss}>온/오프라인 세션</h2>
              <p css={descriptionCss}>
                세션은 매주 토요일 진행되며, 오프라인 세션은 서울에서 열립니다
              </p>
            </div>

            {/* 첫 번째 테이블: OT, 아이디어 공유, 워크샵 */}
            <div css={tableContainerCss}>
              <table css={tableCss}>
                <thead>
                  <tr>
                    <th css={[headerCellCss, darkHeaderCss]}>OT</th>
                    <th css={headerCellCss}>미니 디프콘</th>
                    <th css={[headerCellCss, darkHeaderCss]}>현직자와의 만남</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td css={cellCss}>{onlineSessionData.ot}</td>
                    <td css={cellCss}>{onlineSessionData.mini}</td>
                    <td css={cellCss}>{onlineSessionData.currentMeeting}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 두 번째 테이블: 현직자와의 만남, 팀별 작업, UT 공유 */}
            <div css={tableContainerCss}>
              <table css={tableCss}>
                <thead>
                  <tr>
                    <th css={[headerCellCss, darkHeaderCss]}>디프만 워크샵</th>
                    <th css={headerCellCss}>팀별 작업</th>
                    <th css={[headerCellCss, darkHeaderCss]}>UT 공유</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td css={cellCss}>{onlineSessionData.workshop}</td>
                    <td css={cellCss}>{onlineSessionData.teamBuilding}</td>
                    <td css={cellCss}>{offlineSessionData.utSharing}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 세 번째 테이블: 해커톤, 팀별 작업, 프리런칭데이 */}
            <div css={tableContainerCss}>
              <table css={tableCss}>
                <thead>
                  <tr>
                    <th css={[headerCellCss, darkHeaderCss]}>해커톤</th>
                    <th css={headerCellCss}>팀별 작업</th>
                    <th css={[headerCellCss, darkHeaderCss]}>프리런칭데이</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td css={cellCss}>{offlineSessionData.hackathon}</td>
                    <td css={cellCss}>{offlineSessionData.teamBuilding}</td>
                    <td css={cellCss}>{offlineSessionData.presentationDay}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 네 번째 테이블: 피드백 공유, 반상회, 팀별 작업 */}
            <div css={tableContainerCss}>
              <table css={tableCss}>
                <thead>
                  <tr>
                    <th css={headerCellCss}>피드백 공유</th>
                    <th css={[headerCellCss, darkHeaderCss]}>반상회</th>
                    <th css={headerCellCss}>팀별 작업</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td css={cellCss}>{offlineSessionData.feedback}</td>
                    <td css={cellCss}>{offlineSessionData.networking}</td>
                    <td css={cellCss}>{finalSessionData.teamBuilding}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 다섯 번째 테이블: 워케이션, 팀별 작업, 런칭데이, 최종 발표 */}
            <div css={tableContainerCss}>
              <table css={finalTableCss}>
                <thead>
                  <tr>
                    <th css={[headerCellCss, darkHeaderCss]}>워케이션</th>
                    <th css={headerCellCss}>팀별 작업</th>
                    <th css={[headerCellCss, darkHeaderCss]}>런칭데이</th>
                    <th css={[headerCellCss, darkHeaderCss]}>최종 발표</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td css={cellCss}>{finalSessionData.workOn}</td>
                    <td css={cellCss}>{finalSessionData.teamBuilding2}</td>
                    <td css={cellCss}>{finalSessionData.presentationDay}</td>
                    <td css={cellCss}>{finalSessionData.finalPresentation}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 세션 타입 표시 */}
            <div css={sessionTypeCss}>
              <div css={sessionItemCss}>
                <div css={filledCircleCss} />
                <span css={sessionTextCss}>오프라인 세션</span>
              </div>
              <div css={sessionItemCss}>
                <div css={emptyCircleCss} />
                <span css={sessionTextCss}>온라인 세션</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const containerCss = (theme: Theme) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 80px 20px;
  background-color: ${theme.colors.primary.gray};
  ${sectionBg};

  &::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: 0;
    width: 353px;
    height: 353px;
    background-image: url('/images/17th/3d-icon/web-icon.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom left;
    z-index: 0;
    opacity: 1;

    ${mediaQuery('mobile')} {
      width: 200px;
      height: 200px;
    }
    ${mediaQuery('tablet')} {
      width: 200px;
      height: 200px;
    }
  }
`;

const contentStyles = css`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
`;

const headerCss = css`
  text-align: center;
  margin-bottom: 60px;

  ${mediaQuery('mobile')} {
    margin-bottom: 40px;
  }
`;

const titleCss = (theme: Theme) => css`
  ${theme.typosV3.pretendard.head1};
  color: ${theme.colors.primary.darknavy};
  margin-bottom: 16px;
  font-size: 36px;
  font-weight: 600;

  ${mediaQuery('mobile')} {
    font-size: 1.5rem;
  }

  ${mediaQuery('tablet')} {
    font-size: 1.5rem;
  }
`;

const descriptionCss = (theme: Theme) => css`
  ${theme.typosV3.pretendard.sub1Semibold};
  color: ${theme.colors.primary.darknavy};
  font-size: 20px;
  font-weight: 500;
  ${mediaQuery('mobile')} {
    font-size: 0.875rem;
  }
  ${mediaQuery('tablet')} {
    font-size: 0.875rem;
  }
`;

const tableContainerCss = css`
  margin-bottom: 40px;
  overflow-x: auto;

  ${mediaQuery('mobile')} {
    margin-bottom: 30px;
  }

  ${mediaQuery('tablet')} {
    margin-bottom: 30px;
  }
`;

const tableCss = css`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border: 1px solid ${colors.primary.darknavy};

  ${mediaQuery('mobile')} {
    width: 328px;
  }
  ${mediaQuery('tablet')} {
    width: 328px;
  }
`;

const finalTableCss = css`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border: 1px solid ${colors.primary.darknavy};

  ${mediaQuery('mobile')} {
    width: 328px;
  }
  ${mediaQuery('tablet')} {
    width: 328px;
  }
`;

const headerCellCss = (theme: Theme) => css`
  ${theme.typosV3.pretendard.sub3Semibold};

  width: 134.86px;
  min-width: 134.86px;
  max-width: 134.86px;
  padding: 16px 12px;
  text-align: center;
  font-weight: 600;
  background-color: ${theme.colors.primary.gray};
  color: ${theme.colors.primary.darknavy};
  border: 1px solid ${colors.primary.darknavy};

  ${mediaQuery('mobile')} {
    width: 110px;
    min-width: 110px;
    max-width: 110px;
    padding: 12px 8px;
    font-size: 0.875rem;
  }

  ${mediaQuery('tablet')} {
    width: 82px;
    min-width: 82px;
    max-width: 82px;
    padding: 12px 8px;
    font-size: 0.875rem;
  }
`;

const darkHeaderCss = css`
  background-color: ${colors.primary.darknavy};
  color: white;
  border: 1px solid ${colors.primary.darknavy};
`;

const cellCss = (theme: Theme) => css`
  ${theme.typosV3.pretendard.body3Medium};

  width: 134.86px;
  min-width: 134.86px;
  max-width: 134.86px;
  padding: 16px 12px;
  text-align: center;
  background: ${colors.primary.gray};
  color: ${theme.colors.primary.darknavy};

  ${mediaQuery('mobile')} {
    padding: 12px 8px;
    font-size: 0.875rem;
    width: 110px;
    min-width: 82px;
    max-width: 110px;
  }
  ${mediaQuery('tablet')} {
    padding: 12px 8px;
    font-size: 0.875rem;
    width: 110px;
    min-width: 82px;
    max-width: 110px;
  }
`;

const sessionTypeCss = css`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;

  ${mediaQuery('mobile')} {
    gap: 20px;
    margin-top: 30px;
  }
  ${mediaQuery('tablet')} {
    gap: 20px;
    margin-top: 30px;
  }
`;

const sessionItemCss = css`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const filledCircleCss = css`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${colors.primary.darknavy};
`;

const emptyCircleCss = css`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${colors.primary.darknavy};
  background-color: ${colors.primary.gray};
`;

const sessionTextCss = (theme: Theme) => css`
  ${theme.typosV2.pretendard.regular14};
  color: ${theme.colors.grey['900']};
  font-weight: 500;

  ${mediaQuery('mobile')} {
    font-size: 0.875rem;
  }
  ${mediaQuery('tablet')} {
    font-size: 0.875rem;
  }
`;
