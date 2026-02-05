import Link from 'next/link';
import { useRouter } from 'next/router';
import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { m } from 'framer-motion';

import { GNB_MOBILE_MENU_NAME, GNBMenu } from '~/constant/gnb';
import useIsInProgress from '~/hooks/useIsInProgress';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { getPathToRecruit } from '~/utils/utils';

interface MobileMenuProps {
  onClickMenu: () => void;
}

export function MobileMenu({ onClickMenu }: MobileMenuProps) {
  const router = useRouter();
  const { progressState } = useIsInProgress();
  const { label: _label, action: _action } = getPathToRecruit(router, progressState);

  const getActiveLinkcss = (menu: GNBMenu) => {
    if (router.pathname === menu.href) {
      return activeLinkCss;
    }
    return inActiveLinkCss;
  };

  return (
    <m.article
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: '310px', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      css={mobileMenuCss}
    >
      <ul>
        {GNB_MOBILE_MENU_NAME.map(menu => (
          <m.li
            key={menu.name}
            onClick={onClickMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {menu.type === 'button' ? (
              <button
                onClick={() => (menu.isNewTab ? window.open(menu.href) : router.push(menu.href))}
                css={linkCss}
                suppressHydrationWarning
              >
                {menu.name}
              </button>
            ) : (
              <Link
                href={menu.href}
                css={[linkCss, getActiveLinkcss(menu)]}
                target={menu.isNewTab ? '_blank' : '_self'}
              >
                {menu.name}
              </Link>
            )}
          </m.li>
        ))}
      </ul>
    </m.article>
  );
}

const mobileMenuCss = (_theme: Theme) => css`
  z-index: 9997;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  background-color: ${colors.grey18[900]};
  padding-top: 64px;

  overflow: hidden;

  li {
  }
`;

const linkCss = (theme: Theme) => css`
  ${theme.typosV3.pretendard.sub3Semibold};
  color: ${colors.white};
  font-weight: 400;

  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 12px 20px;

  ${mediaQuery('mobile')} {
    font-size: 1rem;
  }

  &:hover,
  &:active {
    color: ${colors.primary.blue};
  }

  &:disabled {
    color: ${theme.colors.gray200};
    cursor: not-allowed;
  }
`;

const activeLinkCss = () => css`
  color: #59aefe !important;

  &:hover,
  &:active {
    color: #59aefe !important;
  }
`;

const inActiveLinkCss = () => css`
  color: ${colors.white};
`;
