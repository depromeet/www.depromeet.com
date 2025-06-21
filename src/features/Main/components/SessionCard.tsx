import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';

import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { pxToRem } from '~/styles/style.utils';
import { theme } from '~/styles/theme';

type SessionCardProps = {
  src: string;
  title: string;
  description: string;
  ps?: string;
  index: number;
};

const SessionCard = ({ src, title, description, ps, index }: SessionCardProps) => {
  return (
    <div css={containerCss}>
      {/* NOTE : 현재 목데이터 사진 사용, 추후 세션 사진으로 수정하기 */}
      <div css={numberCss}>0{index + 1}</div>
      <Image css={imgCss} src={src} alt={title} width={438} height={278} />
      <div css={text.wrapperCss}>
        <p css={text.titleCss}>{title}</p>
        <div css={text.descWrapperCss}>
          <p css={text.subCss}>{description}</p>
          {title === 'Launching Day' && <p css={text.psCss}>{ps}</p>}
        </div>
      </div>
    </div>
  );
};

export default SessionCard;

const containerCss = css`
  position: relative;
  width: 438px;
  height: 497px;

  display: flex;
  flex-direction: column;

  background: ${colors.primary.gray};
  box-shadow: 0 0 8px 4px ${colors.primary.blue}24;

  border: ${colors.primary.blue} 1.5px solid;

  ${mediaQuery('tablet')} {
    width: 400px;
    height: 468px;
  }
  ${mediaQuery('mobile')} {
    width: 280px;
    height: 385px;
    border: ${colors.primary.blue} 1px solid;
  }
`;

const imgCss = css`
  width: 100%;
  height: 266px;

  object-fit: cover;

  border-color: ${colors.primary.blue};
  border-style: solid;
  border-width: 0 0 1.5px 0;

  ${mediaQuery('mobile')} {
    max-height: 233px;
    border-width: 0 0 1px 0;
  }
`;

const numberCss = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 58px;
  height: 58px;

  position: absolute;
  top: 0;
  left: 0%;

  background-color: ${colors.primary.blue};
  color: ${colors.white};

  ${theme.typosV3.MartianMono.head3};
  font-size: ${pxToRem(18)};

  ${mediaQuery('tablet')} {
    width: 53px;
    height: 53px;
    font-size: ${pxToRem(15)};
  }
  ${mediaQuery('mobile')} {
    width: 46px;
    height: 46px;
    font-size: ${pxToRem(13)};
  }
`;

const text = {
  wrapperCss: css`
    display: flex;
    flex-direction: column;

    justify-content: space-between;

    width: 100%;
    height: 100%;

    padding: 33px;
    white-space: pre-wrap;

    ${mediaQuery('tablet')} {
      padding: 32px;
    }
    ${mediaQuery('mobile')} {
      padding: 20px;
      height: 152px;
    }
  `,
  titleCss: css`
    ${theme.typosV3.MartianMono.head3};
    font-size: ${pxToRem(24)};
    letter-spacing: -1px;

    ${mediaQuery('mobile')} {
      ${theme.typosV3.MartianMono.head3};
      font-size: ${pxToRem(18)};
      letter-spacing: -1px;
    }
  `,

  descWrapperCss: css`
    display: flex;
    flex-direction: column;
    gap: 6px;
  `,

  subCss: css`
    ${theme.typosV3.pretendard.body1Medium};
    font-weight: 400;

    ${mediaQuery('tablet')} {
      ${theme.typosV3.pretendard.body1Medium};
    }
    ${mediaQuery('mobile')} {
      ${theme.typosV3.pretendard.body6Medium};
    }
  `,

  psCss: css`
    ${theme.typosV3.pretendard.body3Medium}
    color: ${colors.grey[500]};

    ${mediaQuery('tablet')} {
      ${theme.typosV3.pretendard.body5Medium};
    }
    ${mediaQuery('mobile')} {
      ${theme.typosV3.pretendard.body6Medium};
    }
  `,
};
