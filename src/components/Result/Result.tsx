import Image from 'next/image';
import { css } from '@emotion/react';

import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { theme } from '~/styles/theme';

import { ResultCardList } from './ResultCardList';

export const Result = () => {
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');
  return (
    <div css={layoutCss}>
      <div css={title.wrapper}>
        <h1>
          디프만은 디자이너와 개발자가
          {isMobileSize && <br />}
          기획, 릴리즈, 이후 개선까지
        </h1>
        <h1>
          <span css={emphasis.leftText}>모든 과정을 경험하는</span>
          {isMobileSize && <br />}
          <span css={emphasis.text}>
            <div css={emphasis.imageWrapper}>
              <Image
                src="/images/16th/about/emphasis.png"
                alt="성장추구형 강조"
                width={124}
                height={40}
              />
            </div>
          </span>
          <span css={emphasis.text}>성장추구형</span>
          <span css={emphasis.rightText}>커뮤니티입니다.</span>
        </h1>
      </div>

      <ResultCardList />
    </div>
  );
};

const layoutCss = () => css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 84px;
  color: black;
`;

const title = {
  wrapper: css`
    h1 {
      ${theme.typosV2.pretendard.semibold24};
      line-height: 150%;
      text-align: center;
      height: fit-content;
    }
  `,
};

const emphasis = {
  leftText: css`
    margin-right: 13px;
  `,
  rightText: css`
    margin-left: 14px;
  `,
  text: css`
    position: relative;
  `,
  imageWrapper: css`
    position: absolute;
    left: -11px;
    top: -3px;
  `,
};
