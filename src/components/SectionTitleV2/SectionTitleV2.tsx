import { ReactNode } from 'react';
import { css, SerializedStyles, Theme } from '@emotion/react';

interface SectionTitleV2Props {
  children: ReactNode;
  style?: SerializedStyles | ((theme: Theme) => SerializedStyles);
}

export function SectionTitleV2({ children, style }: SectionTitleV2Props) {
  return <div css={[sectionTitleCss, style]}>{children}</div>;
}

const sectionTitleCss = css`
  display: flex;
  width: 100%;
  height: 40px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
