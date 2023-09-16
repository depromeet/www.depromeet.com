import { css, Theme } from '@emotion/react';

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
    <section css={layoutCss}>
      <div css={topLabelContainerCss}>
        {label.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </div>
      <div css={theme => titleContainerCss(theme, titleBgColor)}>
        <h2>{title}</h2>
      </div>
      <div css={scheduleContainerCss}>
        {schedule.map(item => (
          <div key={item.content}>
            <p>{item.date}</p>
            <span>{item.content}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const layoutCss = (theme: Theme) => css`
  max-width: 960px;
  color: #fff;
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
  }
`;

const titleContainerCss = (theme: Theme, titleBgColor: keyof typeof theme.colors) => css`
  ${theme.typos.pretendard.subTitle1};
  background-color: ${theme.colors[titleBgColor]};
  color: ${theme.colors.black800};
  text-align: center;
  padding: 40px 0;
`;

const scheduleContainerCss = (theme: Theme) => css`
  display: flex;
  padding: 50px 90px;
  background-color: ${theme.colors.black400};

  & > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    p {
      ${theme.typos.decimal.body1};
    }
    span {
      ${theme.typos.pretendard.body1};
    }
    &:not(:last-child) {
      flex: 1;
    }
  }
`;
