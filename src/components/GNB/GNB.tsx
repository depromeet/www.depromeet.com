import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { css, Theme } from '@emotion/react';
import { AnimatePresence } from 'framer-motion';

import { Button } from '~/components/Button';
import { MobileMenu } from '~/components/GNB/MobileMenu';
import { MobileMenuIcon } from '~/components/GNB/MobileMenuIcon';
import { GNB_MENU_NAME, GNBMenu } from '~/constant/gnb';
import { useDropDown } from '~/hooks/useDropdown';
import useIsInProgress from '~/hooks/useIsInProgress';
import { mediaQuery } from '~/styles/media';

const LOGO_IMAGE = `/images/logo.svg`;

function ApplyButton() {
  const { isInProgress } = useIsInProgress();
  const router = useRouter();

  const onClick = () => {
    router.push('/apply');
  };

  return (
    <Button disabled={!isInProgress} css={linkButtonCss} onClick={onClick}>
      지원하기
    </Button>
  );
}

const linkButtonCss = (theme: Theme) => css`
  ${theme.typos.notosans.semibold14};
  width: 98px;
  height: 37px;
  padding: 8px 24px 8px 24px;
  border-radius: 300px;
  opacity: 0px;
`;

export function GNB() {
  const { pathname } = useRouter();
  const { containerRef, isDropdownOpen, openDropdown, closeDropdown } = useDropDown();

  const getActiveLinkcss = (menu: GNBMenu) => {
    if (pathname.startsWith(menu.href)) {
      return activeLinkCss;
    }
    return inActiveLinkCss;
  };

  return (
    <>
      <nav css={navCss}>
        <div css={navWrapperCss}>
          <Link href={'/'}>
            <Image src={LOGO_IMAGE} alt="로고 이미지" width={112} height={24} />
          </Link>
          <ul css={menuContainerCss}>
            {GNB_MENU_NAME.map(menu => (
              <li css={menuCss} key={menu.name}>
                <Link css={[linkCss, getActiveLinkcss(menu)]} href={menu.href}>
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
          <ApplyButton />
        </div>
      </nav>
      <nav css={mobileNavCss} ref={containerRef}>
        <div css={mobileMenuGNBCss}>
          <Link href={'/'}>
            <Image src={LOGO_IMAGE} alt="로고 이미지" width={112} height={24} />
          </Link>
          <MobileMenuIcon
            onClick={() => (isDropdownOpen ? closeDropdown() : openDropdown())}
            isChecked={isDropdownOpen}
          />
        </div>
        <AnimatePresence mode="wait">
          {isDropdownOpen && <MobileMenu onClickMenu={closeDropdown} />}
        </AnimatePresence>
      </nav>
    </>
  );
}

const navCommonCss = (theme: Theme) => css`
  background-color: ${theme.colors.black800};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  width: 100vw;
`;

const navCss = (theme: Theme) => css`
  ${navCommonCss(theme)};
  padding: 12px 40px;
  height: 61px;

  ${mediaQuery('mobile')} {
    display: none;
  }
`;

const navWrapperCss = css`
  max-width: 1240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const menuContainerCss = css`
  display: flex;
  gap: 32px;
`;

const mobileNavCss = css`
  display: none;

  ${mediaQuery('mobile')} {
    display: block;
  }
`;

const menuCss = css`
  margin: auto 0;
`;

const activeLinkCss = (theme: Theme) => css`
  color: ${theme.colors.pink};
`;

const inActiveLinkCss = (theme: Theme) => css`
  color: ${theme.colors.white};
`;

const linkCss = (theme: Theme) => css`
  ${theme.typos.notosans.regular14};
`;

const mobileMenuGNBCss = (theme: Theme) => css`
  ${navCommonCss(theme)};
  padding: 20px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > a {
    margin-top: 6px;
  }
`;
