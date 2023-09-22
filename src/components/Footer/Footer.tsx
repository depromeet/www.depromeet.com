import Link from 'next/link';
import { css, Theme } from '@emotion/react';

import { FIRST_ROW_FOOTER_INFOS, SECOND_ROW_FOOTER_INFOS } from '~/constant/footer';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';

export function Footer() {
  return (
    <footer css={footerCss}>
      <div css={footerInfoWrapper}>
        <ul css={rowCss}>
          {FIRST_ROW_FOOTER_INFOS.map(footer => (
            <li key={footer.name}>
              <Link css={[linkCss, strongLinkCss]} href={footer.href}>
                {footer.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul css={[secondRowCss]}>
          {SECOND_ROW_FOOTER_INFOS.map(footer => (
            <li key={footer.name}>
              <Link css={linkCss} href={footer.href}>
                <span>{footer.name}</span>
                <span>{footer.detail}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p css={copyrightCss}>© 2023 DEPROMEET. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}

const footerCss = css`
  background-color: ${colors.black800};
  padding: 0 20px;
  width: 100vw;
`;

const footerInfoWrapper = css`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 218px;
  justify-content: center;
  align-items: center;

  ${mediaQuery('mobile')} {
    height: 167px;
    width: 100%;
  }
`;

const rowCss = css`
  display: flex;
  gap: 40px;

  ${mediaQuery('mobile')} {
    width: 100%;
    gap: 0;
    justify-content: space-between;
  }
`;

const secondRowCss = css`
  display: flex;
  gap: 40px;
  margin-top: 16px;

  span + span {
    margin-left: 12px;
  }
  ${mediaQuery('mobile')} {
    width: 100%;
    gap: 0;
    justify-content: space-between;
    margin-top: 8px;

    span + span {
      margin-left: 16px;
    }
  }
`;

const linkCss = (theme: Theme) => css`
  ${theme.typos.pretendard.body1};
  color: ${theme.colors.gray100};

  ${mediaQuery('mobile')} {
    font-size: 11px;
  }
`;

const strongLinkCss = (theme: Theme) => css`
  ${theme.typos.pretendard.subTitle2};
`;

const copyrightCss = (theme: Theme) => css`
  ${theme.typos.pretendard.body1};
  color: ${theme.colors.gray200};
  margin-top: 40px;

  ${mediaQuery('mobile')} {
    font-size: 11px;
    margin-top: 24px;
  }
`;
