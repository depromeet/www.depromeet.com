import { useEffect, useState } from 'react';
import { css, Theme } from '@emotion/react';

type KeyType = 'day' | 'hour' | 'min' | 'sec';

const keys: KeyType[] = ['day', 'hour', 'min', 'sec'];

const labels = ['DAYS', 'HRS', 'MINS', 'SEC'];

interface TimerProps {
  deadlineDay: string;
}

export function Timer({ deadlineDay }: TimerProps) {
  const [date, setDate] = useState(diffDay(`${deadlineDay} 00:00:00`));

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(diffDay(`${deadlineDay} 00:00:00`));
    }, 1000);
    return () => clearInterval(timer);
  }, [deadlineDay]);

  return (
    <div css={layoutCss}>
      {keys.map((key, index) => (
        <>
          <div key={key} css={timeTextCss}>
            <div>
              {date[key].split('').map((text, jdx) => (
                <span key={'time-text' + key + jdx}>{text}</span>
              ))}
            </div>

            <p>{labels[index]}</p>
          </div>
          <span css={timeSplitCss}>:</span>
        </>
      ))}
    </div>
  );
}

const layoutCss = (theme: Theme) => css`
  width: 726px;
  height: 195px;
  margin: auto;
  display: flex;
  background-color: ${theme.colors.black800};
  color: ${theme.colors.yellow500};

  gap: 18px;
  padding: 26px 24px;
`;

const timeSplitCss = (theme: Theme) => css`
  ${theme.typos.decimal.title1}
  color: ${theme.colors.yellow500};
  line-height: 101px;
`;

const timeTextCss = (theme: Theme) => css`
  & > div {
    ${theme.typos.decimal.title1}
    color: ${theme.colors.yellow500};
    display: flex;
    gap: 11px;

    span {
      background-color: ${theme.colors.black400};
      width: 61px;
      padding: 14px 10px 6px; // NOTE : 숫자 위아래 맞춤
      text-align: center;
    }
  }

  & > p {
    ${theme.typos.decimal.body1}
    color: ${theme.colors.white};
    text-align: center;
    margin-top: 16px;
  }
`;

function diffDay(deadLine: string) {
  const masTime = new Date(deadLine);
  const todayTime = new Date();

  const diff = new Date(masTime.getTime() - todayTime.getTime()).getTime();

  const day = String(Math.floor(diff / (1000 * 3600 * 24))).padStart(2, '0');
  const hour = String(Math.floor((diff / (1000 * 3600)) % 24)).padStart(2, '0');
  const minute = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
  const second = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
  return { day, hour, min: minute, sec: second };
}
