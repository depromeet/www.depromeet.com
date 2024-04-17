import Link from 'next/link';
import { css, Theme } from '@emotion/react';

import { FIRST_ROW_FOOTER_INFOS, SECOND_ROW_FOOTER_INFOS } from '~/constant/contactInfo';
import { mediaQuery } from '~/styles/media';

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
                <span>{footer.name}</span>
                <span>{footer.detail}</span>
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
    justify-content: space-between;
  }
`;

const secondRowCss = css`
  display: flex;
  gap: 24px;

  span + span {
    margin-left: 12px;
  }
  ${mediaQuery('mobile')} {
    width: 100%;
    gap: 40px;
    justify-content: center;
    margin-top: 8px;

    span + span {
      margin-left: 16px;
    }
  }
`;

const strongLinkCss = (theme: Theme) => css`
  ${theme.typos.bebas.regular24};
  color: white;

  ${mediaQuery('mobile')} {
    font-size: 18px;
  }
`;

const linkCss = (theme: Theme) => css`
  ${theme.typos.bebas.regular14};
  color: white;

  ${mediaQuery('mobile')} {
    font-size: 11px;
  }
`;

const copyrightCss = (theme: Theme) => css`
  ${theme.typos.notosans.regular8};
  color: white;

  ${mediaQuery('mobile')} {
    font-size: 10px;
  }
`;
