import Link from 'next/link';
import { css, Theme } from '@emotion/react';
import { m } from 'framer-motion';

import { Button } from '~/components/Button';
import { GNB_MENU_NAME } from '~/constant/gnb';

export function MobileMenu({}) {
  return (
    <m.article
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'fit-content', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      css={mobileMenuCss}
    >
      <ul>
        {GNB_MENU_NAME.map(menu => (
          <li key={menu.name}>
            {menu.type === 'button' ? (
              <Button size="lg">
                <Link css={[buttonCss]} href={menu.href}>
                  {menu.name}
                </Link>
              </Button>
            ) : (
              <Link css={[linkCss]} href={menu.href}>
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
  border-bottom: 1px solid ${theme.colors.gray300};

  overflow: hidden;
  li {
    padding: 12px 32px;
  }
`;

const linkCss = (theme: Theme) => css`
  ${theme.typos.pretendard.body1};
  color: ${theme.colors.white};
  &:hover,
  &:active {
    color: ${theme.colors.yellow500};
  }
`;

const buttonCss = (theme: Theme) => css`
  ${theme.typos.pretendard.body1};
  color: ${theme.colors.black800};
`;
