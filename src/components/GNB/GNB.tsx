import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { css, Theme } from '@emotion/react';
import { AnimatePresence } from 'framer-motion';

import { Button } from '~/components/Button';
import { MobileMenu } from '~/components/GNB/MobileMenu';
import { MobileMenuIcon } from '~/components/GNB/MobileMenuIcon';
import { GNB_MENU_NAME, GNBMenu } from '~/constant/gnb';
import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { useDropDown } from '~/hooks/useDropdown';
import useIsInProgress from '~/hooks/useIsInProgress';
import { colors } from '~/styles/colors';
import { theme } from '~/styles/theme';
import { getPathToRecruit } from '~/utils/utils';

const LOGO_IMAGE = `/images/17th/logo/dpm.svg`;
const LOGO_WHITE_IMAGE = `/images/17th/logo/depromeet-white.svg`;

function ApplyButton() {
  const { progressState } = useIsInProgress();
  const router = useRouter();
  const recruitData = getPathToRecruit(router, progressState);
  const { label, action } = recruitData;
  const isDisabled =
    'isDisabled' in recruitData && typeof recruitData.isDisabled === 'boolean'
      ? recruitData.isDisabled
      : false;

  return (
    <Button css={linkButtonCss} onClick={action} disabled={isDisabled} suppressHydrationWarning>
      {label}
    </Button>
  );
}

const linkButtonCss = css`
  padding: 0 16px;
  min-height: 34px;
  border-radius: 8px;

  position: absolute;
  top: 50%;
  right: 20px;

  transform: translateY(-50%);
  ${theme.typosV3.pretendard.sub5Semibold};

  background: ${colors.primary.darknavy};
  color: ${colors.white};

  &:disabled {
    background: ${colors.grey[300]};
    color: ${colors.grey[500]};
  }
`;

export function GNB() {
  const { pathname } = useRouter();
  const { containerRef, isDropdownOpen, openDropdown, closeDropdown } = useDropDown();

  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');

  const getActiveLinkcss = (menu: GNBMenu) => {
    if (pathname === menu.href) {
      return activeLinkCss;
    }
    return inActiveLinkCss;
  };

  return (
    <>
      {!isMobileSize ? (
        <nav css={navCss}>
          <div css={navWrapperCss}>
            <Link href={'/'}>
              <Image css={logoCss} src={LOGO_IMAGE} alt="로고 이미지" width={45} height={20} />
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
      ) : (
        <nav ref={containerRef}>
          <div css={mobileMenuGNBCss(isDropdownOpen)}>
            <Link href={'/'}>
              {isDropdownOpen ? (
                <Image src={LOGO_WHITE_IMAGE} alt="로고 이미지" width={161} height={24} />
              ) : (
                <Image src={LOGO_IMAGE} alt="로고 이미지" width={45} height={24} />
              )}
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
      )}
    </>
  );
}

const navCommonCss = () => css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  width: 100%;
`;

const navCss = () => css`
  ${navCommonCss()};
  background-color: rgba(227, 229, 234, 0.7);
  backdrop-filter: blur(80px);
  padding: 18px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const navWrapperCss = css`
  width: 100%;
  max-width: 1110px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const logoCss = css`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
`;

const menuContainerCss = css`
  display: flex;
  gap: 40px;
`;

const menuCss = css`
  margin: auto 0;
`;

const activeLinkCss = () => css`
  color: ${colors.primary.darknavy};
`;

const inActiveLinkCss = () => css`
  color: ${colors.grey[400]};
`;

const linkCss = (theme: Theme) => css`
  ${theme.typosV3.pretendard.sub5Medium};
`;

const mobileMenuGNBCss = (isDropdownOpen: boolean) => css`
  ${navCommonCss()};

  ${isDropdownOpen
    ? `
      background-color: ${colors.primary.darknavy};
      background-image: none;
    `
    : `
      background-color: rgba(227, 229, 234, 0.7);
      backdrop-filter: blur(80px);
  `}

  padding: 18px ${isDropdownOpen ? `16px` : `20px`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > a {
    margin-top: 6px;
  }
`;
