import { css, Theme } from '@emotion/react';

import { sectionBg } from '~/styles/background';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';

interface SessionData {
  ot: string;
  ideation: string;
  workshop: string;
  currentMeeting: string;
  teamBuilding: string;
}

interface OfflineSessionData {
  utSharing: string;
  hackathon: string;
  teamBuilding: string;
  presentationDay: string;
  pictureSharing: string;
  party: string;
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
  ideation: '08.16~17',
  workshop: '08.30',
  currentMeeting: '08.30',
  teamBuilding: '09.06',
};

const offlineSessionData: OfflineSessionData = {
  utSharing: '08.30',
  hackathon: '10.25',
  teamBuilding: '10.18',
  presentationDay: '11.08',
  pictureSharing: '11.15',
  party: '11.08',
};

const finalSessionData: FinalSessionData = {
  teamBuilding: '08.02',
  workOn: '08.09',
  teamBuilding2: '08.16~17',
  presentationDay: '08.30',
  finalPresentation: '08.30',
};

export const SessionSchedule = () => {
  return (
    <div css={containerCss}>
      <div css={contentStyles}>
        <div css={headerCss}>
          <h2 css={titleCss}>온/오프라인 세션</h2>
          <p css={descriptionCss}>
            세션은 매주 토요일 진행되며, 오프라인 세션은 오프라인에서 이뤄집니다
          </p>
        </div>

        {/* 온라인 세션 테이블 */}
        <div css={tableContainerCss}>
          <table css={tableCss}>
            <thead>
              <tr>
                <th css={[headerCellCss, darkHeaderCss]}>OT</th>
                <th css={headerCellCss}>아이디어 공유</th>
                <th css={[headerCellCss, darkHeaderCss]}>워크샵</th>
                <th css={[headerCellCss, darkHeaderCss]}>현직자와의 만남</th>
                <th css={headerCellCss}>팀별 작업</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td css={cellCss}>{onlineSessionData.ot}</td>
                <td css={cellCss}>{onlineSessionData.ideation}</td>
                <td css={cellCss}>{onlineSessionData.workshop}</td>
                <td css={cellCss}>{onlineSessionData.currentMeeting}</td>
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
                <td css={cellCss}>{offlineSessionData.pictureSharing}</td>
                <td css={cellCss}>{offlineSessionData.party}</td>
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
  );
};

const containerCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 80px 20px;
  background-color: ${theme.colors.primary.gray};
  ${sectionBg};
  ${mediaQuery('mobile')} {
    padding: 40px 16px;
  }
`;

const contentStyles = css`
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
  ${theme.typosV2.bebas.regular24};
  color: ${theme.colors.grey['900']};
  margin-bottom: 16px;
  font-size: 36px;
  font-weight: 600;

  ${mediaQuery('mobile')} {
    font-size: 1.5rem;
  }
`;

const descriptionCss = (theme: Theme) => css`
  ${theme.typosV2.pretendard.regular14};
  color: ${theme.colors.grey['700']};
  font-size: 20px;
  font-weight: 500;
  ${mediaQuery('mobile')} {
    font-size: 0.875rem;
  }
`;

const tableContainerCss = css`
  margin-bottom: 40px;
  overflow-x: auto;

  ${mediaQuery('mobile')} {
    margin-bottom: 30px;
  }
`;

const tableCss = css`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border: 1px solid ${colors.primary.darknavy};

  ${mediaQuery('mobile')} {
    min-width: 600px;
  }
`;

const headerCellCss = (theme: Theme) => css`
  width: 134.86px;
  min-width: 134.86px;
  max-width: 134.86px;
  padding: 16px 12px;
  text-align: center;
  font-weight: 600;
  background-color: ${theme.colors.grey['100']};
  color: ${theme.colors.grey['900']};
  border: 1px solid ${colors.primary.darknavy};

  ${mediaQuery('mobile')} {
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
  width: 134.86px;
  min-width: 134.86px;
  max-width: 134.86px;
  padding: 16px 12px;
  text-align: center;
  background: ${colors.primary.gray};
  color: ${theme.colors.grey['900']};

  ${mediaQuery('mobile')} {
    padding: 12px 8px;
    font-size: 0.875rem;
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
`;
