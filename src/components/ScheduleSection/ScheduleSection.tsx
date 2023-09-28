import { css, Theme } from '@emotion/react';

import { commonLayoutCss } from '~/styles/layout';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

interface ScheduleSectionProps {
  label: string;
  title: string;
  schedule: Array<{
    date: string;
    content: string;
  }>;

  titleBgColor: keyof typeof theme.colors;
}

export function ScheduleSection({ label, title, schedule, titleBgColor }: ScheduleSectionProps) {
  return (
    <section css={[commonLayoutCss, layoutCss]}>
      <div css={topLabelContainerCss}>
        {label.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </div>
      <div css={theme => titleContainerCss(theme, titleBgColor)}>
        <h2>{title}</h2>
      </div>
      <div css={theme => scheduleContainerCss(theme, schedule.length)}>
        {schedule.map(item => (
          <div key={item.content} css={scheduleItemCss}>
            <p>{item.date}</p>
            <span>{item.content}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const layoutCss = (theme: Theme) => css`
  color: ${theme.colors.white};
  margin: 0 auto;

  background-color: ${theme.colors.black800};

  & + & {
    margin-top: 32px;
  }
`;

const topLabelContainerCss = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: center;

  gap: 2px;
  & > span {
    ${theme.typos.decimal.body1};
    background-color: ${theme.colors.black400};
    flex: 1;
    padding: 6px 0;
    color: ${theme.colors.gray200};
    text-transform: uppercase;
  }

  ${mediaQuery('mobile')} {
    & > span {
      font-size: 12px;
      padding: 2px 0px;
    }
  }
`;

const titleContainerCss = (theme: Theme, titleBgColor: keyof typeof theme.colors) => css`
  ${theme.typos.pretendard.subTitle1};
  background-color: ${theme.colors[titleBgColor]};
  color: ${theme.colors.black800};
  text-align: center;
  padding: 40px 0;

  ${mediaQuery('mobile')} {
    padding: 16px 0;
    font-size: 16px;
  }
`;

const scheduleItemCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;

  p {
    ${theme.typos.decimal.body1};
  }
  span {
    ${theme.typos.pretendard.body1};
    color: ${theme.colors.gray20};
  }
  flex: 1;

  ${mediaQuery('mobile')} {
    gap: 8px;

    span {
      font-weight: 400;
    }
  }
`;

const scheduleContainerCss = (theme: Theme, scheduleCount: number) => css`
  display: flex;
  padding: 50px 90px;
  background-color: ${theme.colors.black400};
  flex-wrap: wrap;

  ${mediaQuery('tablet')} {
    padding: 50px 48px;
  }

  ${mediaQuery('mobile')} {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(${scheduleCount / 2}, 1fr);
    padding: 16px 8px;
    row-gap: 32px;
    column-gap: 0;
    text-align: center;
  }
`;
