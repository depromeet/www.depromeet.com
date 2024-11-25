import Link from 'next/link';
import { css, Theme } from '@emotion/react';

import { FIRST_ROW_FOOTER_INFOS, SECOND_ROW_FOOTER_INFOS } from '~/constant/contactInfo';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

export function Footer() {
  return (
    <footer css={footerCss}>
      <div css={footerInfoWrapper}>
        <ul css={rowCss}>
          {FIRST_ROW_FOOTER_INFOS.map(footer => (
            <li key={footer.name}>
              <Link css={[strongLinkCss]} href={footer.href} target="_blank">
                {footer.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul css={[secondRowCss]}>
          {SECOND_ROW_FOOTER_INFOS.map(footer => (
            <li key={footer.name}>
              <Link css={linkCss} href={footer.href} target="_blank">
                <span id="footer-name">{footer.name}</span>
                <span id="footer-detail">{footer.detail}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p css={copyrightCss}>© 2024 DEPROMEET. ALL RIGHTS RESERVED.</p>
    </footer>
  );
}

const footerCss = css`
  background-color: black;
  padding: 60px 30px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;

  ${mediaQuery('mobile')} {
    padding: 40px 30px;
    gap: 20px;
  }
`;

const footerInfoWrapper = css`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  gap: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${mediaQuery('mobile')} {
    height: 130px;
    width: 100%;
  }
`;

const rowCss = css`
  display: flex;
  gap: 24px;
  margin: 0 auto;

  ${mediaQuery('mobile')} {
    width: 100%;
    gap: 0;
    column-gap: 24px;
    row-gap: 4px;
    flex-wrap: wrap-reverse;
    justify-content: center;
  }
`;

const secondRowCss = css`
  display: flex;
  gap: 24px;

  span + span {
    margin-left: 12px;
  }

  #footer-name {
    // TODO: 디자인 컬러셋 PR 반영 확인 후 수정
    color: ${theme.colors.grey['00']};
    opacity: 0.6;
  }

  ${mediaQuery('mobile')} {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;
    margin-top: 8px;

    span + span {
      margin-left: 16px;
    }
  }
`;

const strongLinkCss = (theme: Theme) => css`
  ${theme.typosV2.pretendard.semibold20};
  color: white;

  ${mediaQuery('mobile')} {
    font-size: 18px;
  }
`;

const linkCss = (theme: Theme) => css`
  ${theme.typosV2.pretendard.regular14};
  letter-spacing: inherit;
  color: white;

  ${mediaQuery('mobile')} {
    font-size: 11px;
  }
`;

const copyrightCss = (theme: Theme) => css`
  ${theme.typosV2.pretendard.regular9};
  opacity: 0.8;
  color: white;

  ${mediaQuery('mobile')} {
    font-size: 10px;
  }
`;
