import Image from 'next/image';
import Link from 'next/link';
import { css, Theme } from '@emotion/react';

import { FIRST_ROW_FOOTER_INFOS } from '~/constant/contactInfo';
import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');

  return (
    <footer css={footerCss}>
      <div css={wrapperCss}>
        <div css={footerInfoWrapper}>
          <Image
            src={'/images/17th/logo/depromeet-white.svg'}
            alt={'logo'}
            width={148}
            height={22}
          />
          <ul css={rowCss}>
            {FIRST_ROW_FOOTER_INFOS.map((footer, idx) => {
              const isLast = idx === FIRST_ROW_FOOTER_INFOS.length - 1;
              const shouldShowDivider = !isLast && (isMobileSize ? footer.name !== 'Github' : true);

              return (
                <li
                  key={footer.name}
                  css={css`
                    display: flex;
                    align-items: center;
                  `}
                >
                  <Link css={strongLinkCss} href={footer.href} target="_blank">
                    {footer.name}
                  </Link>
                  {shouldShowDivider && <span id="divide" aria-hidden="true" />}
                </li>
              );
            })}
          </ul>
        </div>
        <p css={copyrightCss}>© {currentYear} DEPROMEET. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}

const footerCss = css`
  background-color: ${colors.primary.darknavy};
  padding: 40px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  ${mediaQuery('mobile')} {
    padding: 32px 40px;
  }
`;

const wrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
  max-width: 1100px;
  width: 100%;

  ${mediaQuery('mobile')} {
    gap: 0;
  }
`;

const footerInfoWrapper = css`
  max-width: 1240px;
  display: flex;
  gap: 18px;
  flex-direction: column;

  ${mediaQuery('mobile')} {
    height: 130px;
    width: 100%;
  }
`;

const rowCss = css`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;

  ${mediaQuery('mobile')} {
    max-width: 300px;
    gap: 0;
    row-gap: 8px;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0;
  }

  #divide {
    display: inline-block;
    width: 1px;
    height: 8px;
    background: ${theme.colors.grey[700]};
    margin: 0 16px;
    vertical-align: middle;

    ${mediaQuery('tablet')} {
    }
  }
`;

const strongLinkCss = (theme: Theme) => css`
  ${theme.typosV3.pretendard.sub5Medium};
  color: ${colors.grey['00']};
  text-align: center;
`;

const copyrightCss = (theme: Theme) => css`
  ${theme.typosV3.pretendard.body7Medium};
  color: ${colors.grey['00']};
  font-weight: 300;
`;
