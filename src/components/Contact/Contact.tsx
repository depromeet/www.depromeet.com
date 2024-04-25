import Link from 'next/link';
import { css, Theme } from '@emotion/react';

import { CONTACT_INFO } from '~/constant/contactInfo';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

import { SectionTitleV2 } from '../SectionTitleV2';

export function Contact() {
  return (
    <div css={[layoutCss]}>
      <SectionTitleV2 style={titleCss}>CONTACT</SectionTitleV2>
      <ul css={infoListCss}>
        {CONTACT_INFO.map(footer => (
          <li key={footer.name}>
            <Link css={InfoCss} href={footer.href} target="_blank">
              <span css={infoNameCss}>{footer.name}</span>
              <span>{footer.detail}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const layoutCss = css`
  padding: 120px 0;
  background-color: ${theme.colors.lightGray};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const infoListCss = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 960px;

  ${mediaQuery('tablet')} {
    padding: 0 32px;
  }

  ${mediaQuery('mobile')} {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 16px;
  }
`;

const InfoCss = (theme: Theme) => css`
  ${theme.typosV2.pretendard.regular18};
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
`;

const infoNameCss = (theme: Theme) => css`
  ${theme.typosV2.bebas.regular32};
  color: black;
`;

const titleCss = (theme: Theme) => css`
  ${theme.typosV2.bebas.regular24}
`;
