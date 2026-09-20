import Image from 'next/image';
import Link from 'next/link';
import { css, Theme } from '@emotion/react';

import { colors } from '~/styles/colors';

const FOOTER_LINKS = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/depromeet/',
    icon: '/images/19th/footer/instagram.svg',
  },
  {
    name: 'Behance',
    href: 'https://www.behance.net/Depromeet',
    icon: '/images/19th/footer/behance.svg',
  },
  { name: 'Github', href: 'https://github.com/depromeet/', icon: '/images/19th/footer/github.svg' },
  { name: 'Medium', href: 'https://depromeet.medium.com/', icon: '/images/19th/footer/medium.svg' },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/depromeet/',
    icon: '/images/19th/footer/linkedin.svg',
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer css={footerCss} data-gnb-theme="dark">
      <div css={wrapperCss}>
        <div css={contentCss}>
          <div css={logoSectionCss}>
            <Image
              src={'/images/19th/footer/depromeet-logo.svg'}
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
                <li key={link.name} css={linkItemCss}>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: ${colors.v19.coolGray700};
  padding: 28px 20px;

  @media (min-width: 768px) {
    padding: 20px 40px;
  }
`;

const wrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;

  @media (min-width: 768px) {
    gap: 48px;
  }
`;

const contentCss = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;

  @media (min-width: 768px) {
    gap: 32px;
    width: auto;
  }
`;

const logoSectionCss = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

const emailRowCss = (theme: Theme) => css`
  ${theme.typosV4.instrumentSans.body7};
  display: flex;
  align-items: center;
  gap: 4px;
`;

const emailLabelCss = css`
  color: ${colors.v19.blue300};
`;

const emailTextCss = css`
  color: ${colors.v19.white100};

  @media (min-width: 768px) {
    color: ${colors.v19.blue100};
  }
`;

const linksRowCss = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px 16px;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 16px;
    width: auto;
  }
`;

const linkItemCss = css`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const linkCss = (theme: Theme) => css`
  ${theme.typosV4.instrumentSans.caption1};
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${colors.v19.white100};
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

const dividerCss = (hiddenOnMobile: boolean) => css`
  display: inline-block;
  width: 2px;
  height: 2px;
  background: ${colors.v19.coolGray100};
  border-radius: 100px;

  ${hiddenOnMobile &&
  css`
    display: none;

    @media (min-width: 768px) {
      display: inline-block;
    }
  `}
`;

const copyrightCss = (theme: Theme) => css`
  ${theme.typosV4.instrumentSans.body7};
  color: ${colors.v19.blue300};
`;
