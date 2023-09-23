import { css, Theme } from '@emotion/react';

import useMounted from '~/hooks/useMounted';
import { mediaQuery } from '~/styles/media';

type KeyType = 'day' | 'hour' | 'min' | 'sec';

const keys: KeyType[] = ['day', 'hour', 'min', 'sec'];

const labels = ['DAYS', 'HRS', 'MINS', 'SEC'];

interface TimerProps {
  time: Record<KeyType, string>;
}

export function Timer({ time }: TimerProps) {
  const mounted = useMounted();

  if (!mounted) return <></>;

  return (
    <div css={layoutCss}>
      {keys.map((key, index) => (
        <>
          {index !== 0 && <span css={timeSplitCss}>:</span>}
          <div key={key} css={timeTextCss}>
            <div>
              {time[key].split('').map((text, jdx) => (
                <span key={'time-text' + key + jdx}>{text}</span>
              ))}
            </div>

            <p>{labels[index]}</p>
          </div>
        </>
      ))}
    </div>
  );
}

const layoutCss = (theme: Theme) => css`
  width: 100%;
  margin: auto;
  display: flex;
  background-color: ${theme.colors.black800};
  color: ${theme.colors.yellow500};

  padding: 26px 24px;

  & > * {
    flex: 1;
  }

  ${mediaQuery('mobile')} {
    max-width: 375px;
    padding: 10px;
  }
`;

const timeSplitCss = (theme: Theme) => css`
  ${theme.typos.decimal.title1}
  color: ${theme.colors.yellow500};
  line-height: 101px;
  text-align: center;

  ${mediaQuery('mobile')} {
    font-size: 24px;
    line-height: 44px;
  }
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

  ${mediaQuery('mobile')} {
    & > div {
      font-size: 24px;
      gap: 2px;
      span {
        width: 29px;
        padding: 6px;
      }
    }

    & > p {
      font-size: 16px;
    }
  }
`;
