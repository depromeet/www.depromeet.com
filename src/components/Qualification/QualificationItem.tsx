import { css, Theme } from '@emotion/react';

import { formatSingleDigit } from '~/utils/format';

interface QualificationItemProps {
  index: number;
  description: string;
}

export function QualificationItem({ index, description }: QualificationItemProps) {
  return (
    <div css={layoutCss}>
      <h3 css={indexCss}>{formatSingleDigit(index)}</h3>
      <p css={descriptionCss}>{description}</p>
    </div>
  );
}

const layoutCss = (theme: Theme) => css`
  background-color: ${theme.colors.black400};
  padding: 48px 30px;
  width: 312px;
  height: 197px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const indexCss = (theme: Theme) => css`
  ${theme.typos.decimal.subTitle1};
  color: ${theme.colors.blue300};
`;

const descriptionCss = (theme: Theme) => css`
  ${theme.typos.pretendard.body1};
  color: ${theme.colors.gray20};
`;
