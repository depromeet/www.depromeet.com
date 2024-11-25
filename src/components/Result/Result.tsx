import Image from 'next/image';
import { css } from '@emotion/react';

import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { mediaQuery } from '~/styles/media';
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
              {isMobileSize ? (
                <Image
                  src="/images/16th/about/emphasis.png"
                  alt="성장추구형 강조"
                  width={95}
                  height={33}
                />
              ) : (
                <Image
                  src="/images/16th/about/emphasis.png"
                  alt="성장추구형 강조"
                  width={132}
                  height={43}
                />
              )}
            </div>
          </span>
          <span css={emphasis.growText}>성장추구형</span>
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

      ${mediaQuery('mobile')} {
        ${theme.typosV2.pretendard.semibold18}
        line-height: 150%;
      }
    }
  `,
};

const emphasis = {
  leftText: css`
    margin-right: 13px;
  `,
  rightText: css`
    margin-left: 14px;

    ${mediaQuery('mobile')} {
      margin-left: 8px;
    }
  `,
  text: css`
    position: relative;
  `,
  growText: css`
    position: relative;
    ${theme.typosV2.pretendard.semibold26};

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.semibold20}
      line-height: 150%;
    }
  `,
  imageWrapper: css`
    position: absolute;
    left: -11px;
    top: -4px;

    ${mediaQuery('mobile')} {
      left: -6px;
      top: -4px;
    }
  `,
};
