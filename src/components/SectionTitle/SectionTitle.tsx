import { css, Theme } from '@emotion/react';

import { mediaQuery } from '~/styles/media';

interface SectionTitleProps {
  /**
   * 최상단 label
   */
  label?: string;
  /**
   * 메인 타이틀
   */
  title?: string;
  description?: string;
}

export function SectionTitle({ label, title, description, ...layoutProps }: SectionTitleProps) {
  return (
    <div css={layoutCss} {...layoutProps}>
      {label && <h4 css={labelCss}>{label}</h4>}
      {title && <h2 css={titleCss}>{title}</h2>}
      {description && <p css={descriptionCss}>{description}</p>}
    </div>
  );
}

const layoutCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: inherit;
  padding-top: 96px;

  ${mediaQuery('tablet')} {
    padding-top: 88px;
  }
  ${mediaQuery('mobile')} {
    padding-top: 80px;
  }
`;

const labelCss = (theme: Theme) => css`
  ${theme.typos.decimal.body1};
  color: ${theme.colors.yellow500};
  text-align: center;
`;

const titleCss = (theme: Theme) => css`
  ${theme.typos.bebas.regular24}
  color: ${theme.colors.white};
  margin-top: 16px;
  text-align: center;
  text-align: center;
  white-space: pre-line;
`;

const descriptionCss = (theme: Theme) => css`
  ${theme.typos.pretendard.body1};
  color: ${theme.colors.gray100};
  margin-top: 32px;
  text-align: center;
`;
