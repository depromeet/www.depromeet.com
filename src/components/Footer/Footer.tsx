import Link from 'next/link';
import { css } from '@emotion/react';

import { FIRST_ROW_FOOTER_INFOS, SECOND_ROW_FOOTER_INFOS } from '~/constant/footer';
import { colors } from '~/styles/colors';

export function Footer() {
  return (
    <footer css={footerCss}>
      <div css={footerInfoWrapper}>
        <ul css={rowCss}>
          {FIRST_ROW_FOOTER_INFOS.map(footer => (
            <li key={footer.name}>
              <Link css={linkCss} href={footer.href}>
                {footer.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul css={[rowCss, rowGapCss]}>
          {SECOND_ROW_FOOTER_INFOS.map(footer => (
            <li key={footer.name}>
              <Link css={linkCss} href={footer.href}>
                {footer.name}
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
  display: flex;
  flex-direction: column;
  height: 218px;
  justify-content: center;
  align-items: center;
`;

const rowCss = css`
  display: flex;
  gap: 40px;
`;

const rowGapCss = css`
  margin-top: 16px;
`;

const linkCss = css`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 25.2px; /* 140% */
  letter-spacing: -0.18px;
  color: ${colors.gray100};
`;

const copyrightCss = css`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 25.2px; /* 140% */
  letter-spacing: -0.18px;
  color: ${colors.gray200};
  margin-top: 40px;
`;
