import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';

import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';

const FOOTER_LINKS = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/depromeet/',
    icon: '/images/18th/footer/instagram.svg',
  },
  {
    name: 'Behance',
    href: 'https://www.behance.net/Depromeet',
    icon: '/images/18th/footer/behance.png',
  },
  { name: 'Github', href: 'https://github.com/depromeet/', icon: '/images/18th/footer/github.svg' },
  { name: 'Medium', href: 'https://depromeet.medium.com/', icon: '/images/18th/footer/medium.svg' },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/depromeet/',
    icon: '/images/18th/footer/linkedin.png',
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer css={footerCss}>
      <div css={wrapperCss}>
        <div css={contentCss}>
          <div css={logoSectionCss}>
            <Image
              src={'/images/17th/logo/depromeet-white.svg'}
              alt={'DEPROMEET'}
              width={200}
              height={26}
            />
            <div css={emailRowCss}>
              <span css={emailLabelCss}>Email</span>
              <span css={emailTextCss}>depromeet@gmail.com</span>
            </div>
          </div>

          <ul css={linksRowCss}>
            {FOOTER_LINKS.map((link, idx) => {
              const isLast = idx === FOOTER_LINKS.length - 1;
              const isGithub = link.name === 'Github';
              return (
                <li key={link.name} css={linkItemCss(idx)}>
                  <Link css={linkCss} href={link.href} target="_blank">
                    <Image src={link.icon} alt={link.name} width={16} height={16} />
                    <span>{link.name}</span>
                  </Link>
                  {!isLast && <span css={dividerCss(isGithub)} aria-hidden="true" />}
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
  background-color: ${colors.primary18.strong};
  padding: 20px 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediaQuery('mobile')} {
    padding: 20px;
  }
`;

const wrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: flex-start;
  max-width: 1100px;
  width: 100%;

  ${mediaQuery('mobile')} {
    gap: 40px;
  }
`;

const contentCss = css`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${mediaQuery('mobile')} {
    gap: 40px;
    width: 100%;
  }
`;

const logoSectionCss = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const emailRowCss = css`
  display: flex;
  gap: 4px;
  align-items: center;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 9px;
  line-height: 1.5;
  letter-spacing: -0.18px;
`;

const emailLabelCss = css`
  font-weight: 700;
  color: ${colors.primary18.normal};
`;

const emailTextCss = css`
  font-weight: 500;
  color: ${colors.primary18.light};

  ${mediaQuery('mobile')} {
    color: ${colors.white};
  }
`;

const linksRowCss = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;

  ${mediaQuery('mobile')} {
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: start;
    gap: 16px;
    row-gap: 20px;
    width: 100%;
  }
`;

const linkItemCss = (index: number) => css`
  display: flex;
  align-items: center;
  gap: 16px;

  ${mediaQuery('mobile')} {
    /* Grid positions: 0,1,2 on first row, 3,4 on second row */
    grid-column: ${index < 3 ? index + 1 : index - 2};
    grid-row: ${index < 3 ? 1 : 2};
  }
`;

const linkCss = css`
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.white};
  letter-spacing: -0.84px;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

const dividerCss = (hiddenOnMobile: boolean) => css`
  display: inline-block;
  width: 2px;
  height: 2px;
  background: ${colors.grey18['100']};
  border-radius: 100px;

  ${mediaQuery('mobile')} {
    ${hiddenOnMobile && 'display: none;'}
  }
`;

const copyrightCss = css`
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 9px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.18px;
  color: ${colors.primary18.normal};
`;
