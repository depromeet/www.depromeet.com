import Link from 'next/link';
import { useRouter } from 'next/router';
import { css, Theme } from '@emotion/react';
import { m } from 'framer-motion';

import { getDDay, START_DATE } from '~/constant/common';
import { GNB_MOBILE_MENU_NAME, GNBMenu } from '~/constant/gnb';
import useIsInProgress from '~/hooks/useIsInProgress';
import { mediaQuery } from '~/styles/media';

interface MobileMenuProps {
  onClickMenu: () => void;
}

export function MobileMenu({ onClickMenu }: MobileMenuProps) {
  const { pathname, push } = useRouter();
  const { isInProgress } = useIsInProgress();
  const dday = getDDay(START_DATE);

  const getActiveLinkcss = (menu: GNBMenu) => {
    if (pathname.startsWith(menu.href)) {
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
              <button disabled={!isInProgress} onClick={() => push(menu.href)} css={linkCss}>
                {isInProgress ? menu.name : dday < 0 ? `D${dday}` : `D+${dday}`}
              </button>
            ) : (
              <Link href={menu.href} css={[linkCss, getActiveLinkcss(menu)]}>
                {menu.name}
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
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  background-color: black;
  padding-top: 72px;
  border-bottom: 1px solid ${theme.colors.lightGray};

  overflow: hidden;

  li {
    padding: 12px 32px;
  }
`;

const linkCss = (theme: Theme) => css`
  ${theme.typos.notosans.regular14};
  color: ${theme.colors.white};

  ${mediaQuery('mobile')} {
    font-size: 1rem;
  }

  &:hover,
  &:active {
    color: ${theme.colors.pink};
  }

  &:disabled {
    color: ${theme.colors.gray200};
    cursor: not-allowed;
  }
`;

const activeLinkCss = (theme: Theme) => css`
  color: ${theme.colors.pink};
`;

const inActiveLinkCss = (theme: Theme) => css`
  color: ${theme.colors.white};
`;
