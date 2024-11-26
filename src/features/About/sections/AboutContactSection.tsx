import Link from 'next/link';
import { css, Theme } from '@emotion/react';

import { CONTACT_INFO } from '~/constant/contactInfo';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

export const AboutContactSection = () => {
  return (
    <div css={layoutCss}>
      <h1 css={titleCss}>궁금한 점이 있으신가요?</h1>

      <ul css={infoListCss}>
        {CONTACT_INFO.map(footer => (
          <li key={footer.name}>
            <Link css={infoCss.wrapper} href={footer.href} target="_blank">
              <span css={infoCss.name}>{footer.name}</span>
              <span>{footer.detail}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const layoutCss = css`
  padding: 120px 0;
  background-color: ${theme.colors.grey[100]};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;

  ${mediaQuery('tablet')} {
    padding: 120px 20px;
  }
`;

const titleCss = (theme: Theme) => css`
  ${theme.typosV2.pretendard.bold32}
  margin-bottom: 12px;

  ${mediaQuery('mobile')} {
    ${theme.typosV2.pretendard.bold28}
    line-height: 150%;
  }
`;

const infoListCss = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 960px;
  margin-top: 36px;

  ${mediaQuery('mobile')} {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
`;

const infoCss = {
  wrapper: css`
    ${theme.typosV2.pretendard.medium18};
    background-color: ${theme.colors.white};
    color: black;
    width: 100%;
    height: 172px;
    padding: 48px 36px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    border-radius: 12px;
  `,
  name: css`
    ${theme.typosV2.pretendard.bold20};
    color: black;
  `,
};
