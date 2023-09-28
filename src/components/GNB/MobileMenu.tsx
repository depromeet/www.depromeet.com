import Link from 'next/link';
import { useRouter } from 'next/router';
import { css, Theme } from '@emotion/react';
import { m } from 'framer-motion';

import { GNB_MENU_NAME, GNBMenu } from '~/constant/gnb';
import { mediaQuery } from '~/styles/media';

interface MobileMenuProps {
  onClickMenu: () => void;
}

export function MobileMenu({ onClickMenu }: MobileMenuProps) {
  const { pathname } = useRouter();

  const getActiveLinkcss = (menu: GNBMenu) => {
    if (pathname.startsWith(menu.href)) {
      return activeLinkCss;
    }
    return inActiveLinkCss;
  };

  return (
    <m.article
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: '280px', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      css={mobileMenuCss}
    >
      <ul>
        {GNB_MENU_NAME.map(menu => (
          <m.li
            key={menu.name}
            onClick={onClickMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {menu.type === 'button' ? (
              <Link href={menu.href}>
                <a css={[linkCss]}>{menu.name}</a>
              </Link>
            ) : (
              <Link href={menu.href}>
                <a css={[linkCss, getActiveLinkcss(menu)]}>{menu.name}</a>
              </Link>
            )}
          </m.li>
        ))}
      </ul>
    </m.article>
  );
}

const mobileMenuCss = (theme: Theme) => css`
  z-index: 9997;

  width: 100vw;
  height: fit-content;
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  background-color: ${theme.colors.black800};
  padding-top: 72px;
  border-bottom: 1px solid ${theme.colors.gray300};

  overflow: hidden;
  li {
    padding: 12px 32px;
  }
`;

const linkCss = (theme: Theme) => css`
  ${theme.typos.pretendard.body1};
  color: ${theme.colors.white};

  ${mediaQuery('mobile')} {
    font-size: 1rem;
  }

  &:hover,
  &:active {
    color: ${theme.colors.yellow500};
  }
`;

const activeLinkCss = (theme: Theme) => css`
  color: ${theme.colors.yellow500};
`;

const inActiveLinkCss = (theme: Theme) => css`
  color: ${theme.colors.white};
`;
