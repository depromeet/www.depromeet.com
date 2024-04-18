import { css, Theme } from '@emotion/react';

import { Schedule } from '~/constant/schedule';
import { mediaQuery } from '~/styles/media';

export function ScheduleTable({ title, description, schedule }: Schedule) {
  const mobileSchedule = [...schedule];
  return (
    <div css={layoutCss}>
      <div css={titleCss}>
        <div>
          <span>15TH</span>
          <h1>{title}</h1>
        </div>
        {description && <h3>{description}</h3>}
      </div>
      <div css={tableCss({ length: schedule.length })}>
        {schedule.map(({ content, date }, idx) => (
          <div key={idx} css={tableItemCss}>
            <h1>{content}</h1>
            <span>{date}</span>
          </div>
        ))}
      </div>
      <div css={mobileScheduleCss}>
        {[mobileSchedule.splice(0, mobileSchedule.length / 2), mobileSchedule].map((data, idx1) => (
          <div key={idx1} css={mobileTableCss({ length: data.length })}>
            {data.map(({ date, content }, idx2) => (
              <div key={idx2} css={tableItemCss}>
                <h1>{content}</h1>
                <span>{date}</span>
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
  gap: 24px;
  align-items: center;
  justify-content: center;
`;

const titleCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  span {
    ${theme.typos.bebas.regular24};
  }

  h1 {
    ${theme.typos.notosans.semibold20};
  }

  h3 {
    ${theme.typos.notosans.semibold16};
    color: #555555;
    text-align: center;
  }
`;

const tableCss = ({ length }: { length: number }) => css`
  padding: 0 16px;
  width: 100%;
  max-width: 960px;
  display: grid;
  grid-template-columns: repeat(${length}, 1fr);
  gap: 0;

  ${mediaQuery('mobile')} {
    display: none;
  }
`;

const mobileScheduleCss = css`
  display: none;
  padding: 0 16px;
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

  ${theme.typos.notosans.semibold16}

  h1 {
    width: 100%;
    height: 48px;
    color: black;
    background-color: ${theme.colors.pink};
    justify-content: center;
    align-items: center;
    display: flex;
  }

  span {
    width: 100%;
    height: 88px;
    color: white;
    background-color: black;
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;