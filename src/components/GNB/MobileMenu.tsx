import Link from 'next/link';
import { css, Theme } from '@emotion/react';
import { m } from 'framer-motion';

import { GNB_MENU_NAME } from '~/constant/gnb';

export function MobileMenu({}) {
  return (
    <m.article
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: '272px', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      css={mobileMenuCss}
    >
      <ul>
        {GNB_MENU_NAME.map(menu => (
          <li key={menu.name}>
            {menu.type === 'button' ? (
              <Link css={[linkCss, activeLinkCss]} href={menu.href}>
                {menu.name}
              </Link>
            ) : (
              <Link css={[linkCss, inActiveLinkCss]} href={menu.href}>
                {menu.name}
              </Link>
            )}
          </li>
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

  overflow: hidden;
  li {
    padding: 12px 32px;
  }
`;

const activeLinkCss = (theme: Theme) => css`
  color: ${theme.colors.yellow500};
`;

const inActiveLinkCss = (theme: Theme) => css`
  color: ${theme.colors.white};
`;

const linkCss = (theme: Theme) => css`
  ${theme.typos.pretendard.body1};
`;
