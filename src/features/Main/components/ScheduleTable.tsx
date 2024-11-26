import { css, Theme } from '@emotion/react';

import { LandingSchedule } from '~/constant/schedule';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

export function ScheduleTable({ title, schedule }: LandingSchedule & { title: string }) {
  const mobileSchedule = [...schedule];
  return (
    <div css={layoutCss}>
      <div
        css={css`
          ${theme.typosV2.pretendard.semibold16};
          width: 100%;
          background-color: black;
          height: 48px;
          border-radius: 12px 12px 0 0;
          color: white;

          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        {title}
      </div>
      <div css={tableCss({ length: schedule.length })}>
        {schedule.map(({ content, highlighting }, idx) => (
          <div key={idx} css={tableItemCss}>
            <div id="content">
              <div>
                <span>{content}</span>
                {highlighting && <span id="new">NEW</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div css={mobileScheduleCss}>
        {[mobileSchedule.splice(0, mobileSchedule.length / 2), mobileSchedule].map((data, idx1) => (
          <div key={idx1} css={mobileTableCss({ length: data.length })}>
            {data.map(({ content, highlighting }, idx2) => (
              <div key={idx2} css={tableItemCss}>
                <div id="content">
                  <div>
                    <span>{content}</span>
                    {highlighting && <span id="new">NEW</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const layoutCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 960px;
  padding: 0 16px;
`;

const tableCss = ({ length }: { length: number }) => css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${length}, 1fr);
  gap: 0;
  overflow: hidden;
  box-sizing: border-box;

  ${mediaQuery('mobile')} {
    display: none;
  }
`;

const mobileScheduleCss = css`
  display: none;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  ${mediaQuery('mobile')} {
    display: flex;
  }
`;

const mobileTableCss = ({ length }: { length: number }) => css`
  ${mediaQuery('mobile')} {
    display: grid;
    grid-template-columns: repeat(${length}, 1fr);
  }
`;

const tableItemCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  // radius 처리를 위한 CSS 처리
  &:first-child {
    border-radius: 0 0 0 12px;
    overflow: hidden;
  }

  &:last-child {
    border-radius: 0 0 12px 0;
    overflow: hidden;
  }

  ${theme.typosV2.pretendard.semibold16}

  h1 {
    width: 100%;
    height: 48px;
    color: white;
    background-color: ${theme.colors.black};
    justify-content: center;
    align-items: center;
    display: flex;
  }

  #content {
    width: 100%;
    height: 80px;
    color: black;
    background-color: ${theme.colors.grey['100']};
    justify-content: center;
    align-items: center;
    display: flex;
    column-gap: 4px;
    position: relative;

    div:nth-of-type(1) {
      display: flex;
      align-items: flex-start;
      column-gap: 3px;
    }

    #new {
      margin-bottom: auto;
      ${theme.typosV2.pretendard.bold10};
      color: ${theme.colors.pink};

      ${mediaQuery('mobile')} {
        position: absolute;
        right: 5px;
      }
    }
  }
`;
