import { css, Theme } from '@emotion/react';

import { MobilePositionItem } from '~/components/Positions/MobilePositionItem';
import { PositionsItem } from '~/components/Positions/PositionsItem';
import { POSITIONS } from '~/constant/position';
import { mediaQuery } from '~/styles/media';

export const RecuritPosition = () => {
  return (
    <section css={layoutCss}>
      <div css={containerCss}>
        <div css={headerCss}>
          <div css={titleCss}>
            <h1>모집 직군</h1>
            <p>디프만은 다섯개의 직군에서 신규 회원을 모집하고 있습니다.</p>
          </div>
        </div>
        <div css={mobileHeaderCss}>
          <div css={titleCss}>
            <h1>모집 직군</h1>
            <p>
              디프만은 다섯개의 직군에서 신규 회원을
              <br />
              모집하고 있습니다.
            </p>
          </div>
        </div>
        <div css={listCss}>
          {POSITIONS.map(({ ...info }) => (
            <PositionsItem key={info.type} {...info} />
          ))}
        </div>
        <div css={mobileListCss}>
          {POSITIONS.map(({ ...info }) => (
            <MobilePositionItem
              key={info.type}
              title={info.title}
              type={info.type}
              link={info.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const layoutCss = css`
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;

const containerCss = css`
  width: 100%;
  margin-top: 120px;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 56px;

  ${mediaQuery('mobile')} {
    margin-top: 80px;
  }
`;

const headerCss = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;

  ${mediaQuery('mobile')} {
    display: none;
  }
`;

const mobileHeaderCss = css`
  display: none;

  ${mediaQuery('mobile')} {
    display: flex;
    flex-direction: column;
    gap: 80px;
    align-items: center;
  }
`;

const titleCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;

  > h1 {
    ${theme.typosV2.pretendard.bold32}
  }

  > p {
    ${theme.typosV2.pretendard.medium18}
  }

  ${mediaQuery('mobile')} {
    gap: 24px;

    > h1 {
      ${theme.typosV2.pretendard.bold28}
    }
  }
`;

const listCss = css`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  width: 960px; // TODO 전체 너비 상수화

  ${mediaQuery('tablet')} {
    width: 100%;
    padding: 0 24px;
  }

  ${mediaQuery('mobile')} {
    /** NOTE: 16기에서는 모바일에 따른 적응형 UI를 사용하지 않습니다,
    추후 적응형 컴포넌트로 사용 시에 해당 주석을 해제해주세요 */
    // display: none;
  }
`;

const mobileListCss = css`
  display: none;

  ${mediaQuery('mobile')} {
    /** NOTE: 16기에서는 모바일에 따른 적응형 UI를 사용하지 않습니다,
    추후 적응형 컴포넌트로 사용 시에 해당 주석을 해제해주세요 */
    //display: flex;
    padding: 0 16px;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
  }
`;
