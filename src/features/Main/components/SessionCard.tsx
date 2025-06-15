import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';

import { colors } from '~/styles/colors';
import { theme } from '~/styles/theme';

type SessionCardProps = {
  src: string;
  title: string;
  description: string;
};

const SessionCard = ({ src, title, description }: SessionCardProps) => {
  return (
    <div css={containerCss}>
      {/* NOTE : 현재 목데이터 사진 사용, 추후 세션 사진으로 수정하기 */}
      <Image css={imgCss} src={src} alt={title} width={438} height={278} />
      <div css={text.wrapperCss}>
        <p css={text.titleCss}>{title}</p>
        <p css={text.subCss}>{description}</p>
      </div>
    </div>
  );
};

export default SessionCard;

const containerCss = css`
  width: 438px;
  height: 497px;

  display: flex;
  flex-direction: column;

  background: ${colors.primary.gray};
  box-shadow: 0 0 8px 4px ${colors.primary.blue}24;

  border: ${colors.primary.blue} 1px solid;
`;

const imgCss = css`
  width: 100%;
  height: 100%;
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
  `,
  titleCss: css`
    ${theme.typosV3.MartianMono.head3};
  `,

  subCss: css`
    ${theme.typosV3.pretendard.sub1Medium};
  `,
};
