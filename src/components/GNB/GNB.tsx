import { useEffect, useState } from 'react';
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
import { colors } from '~/styles/colors';
import { getPathToRecruit } from '~/utils/utils';

function ApplyButton() {
  const { progressState } = useIsInProgress();
  const router = useRouter();
  const { label, action } = getPathToRecruit(router, progressState);

  return (
    <Button css={linkButtonCss} onClick={action} suppressHydrationWarning>
      {label}
    </Button>
  );
}

const linkButtonCss = css`
  display: flex;
  height: 52px;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  background: ${colors.grey18['900']};
  color: #fff;
  font-family: Pretendard, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  /* Tablet: Push button to right */
  @media (min-width: 768px) and (max-width: 1279px) {
    margin-left: auto;
  }

  &:disabled {
    background: ${colors.grey[300]};
    color: ${colors.grey[500]};
  }
`;

const HERO_SECTION_HEIGHT = 800;

export function GNB() {
  const { pathname } = useRouter();
  const { containerRef, isDropdownOpen, openDropdown, closeDropdown } = useDropDown();
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsPastHero(window.scrollY > HERO_SECTION_HEIGHT);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getActiveLinkcss = (menu: GNBMenu) => {
    if (pathname === menu.href) {
      return activeLinkCss;
    }
    return inActiveLinkCss;
  };

  return (
    <>
      {/* Desktop GNB */}
      <nav css={navCss(isPastHero)}>
        <div css={navWrapperCss}>
          <Link href={'/'} css={logoLinkCss}>
            DPM
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

      {/* Mobile GNB */}
      <nav ref={containerRef} css={mobileNavCss}>
        <div css={mobileMenuGNBCss(isDropdownOpen, isPastHero)}>
          <Link href={'/'} css={mobileLogoLinkCss(isDropdownOpen)}>
            DPM
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

const navCommonCss = () => css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  width: 100%;
`;

const navCss = (isPastHero: boolean) => css`
  ${navCommonCss()};
  background: ${isPastHero ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  backdrop-filter: ${isPastHero ? 'blur(10px)' : 'none'};
  height: 80px;
  padding: 0 40px;
  transition: background 0.3s ease, backdrop-filter 0.3s ease;

  display: none;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const mobileNavCss = css`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

const navWrapperCss = css`
  width: 100%;
  display: flex;
  align-items: center;

  /* Tablet: Logo and Menu grouped on left */
  @media (min-width: 768px) and (max-width: 1279px) {
    justify-content: flex-start;
    gap: 40px;
  }

  /* Desktop: Logo left, Menu center, Button right */
  @media (min-width: 1280px) {
    justify-content: space-between;
  }
`;

const logoLinkCss = css`
  color: #000000;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.92px;
  text-transform: uppercase;
  text-decoration: none;
`;

const mobileLogoLinkCss = (isDropdownOpen: boolean) => css`
  color: ${isDropdownOpen ? '#ffffff' : '#000000'};
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.92px;
  text-transform: uppercase;
  text-decoration: none;
`;

const menuContainerCss = css`
  display: flex;
  gap: 48px;
`;

const menuCss = css`
  margin: auto 0;
`;

const activeLinkCss = () => css`
  color: ${colors.grey18['900']};
  font-family: Pretendard, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const inActiveLinkCss = () => css`
  color: ${colors.grey18['700']};
  font-family: Pretendard, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  opacity: 0.8;
`;

const linkCss = (theme: Theme) => css`
  ${theme.typosV3.pretendard.sub5Medium};
`;

const mobileMenuGNBCss = (isDropdownOpen: boolean, isPastHero: boolean) => css`
  ${navCommonCss()};

  ${isDropdownOpen
    ? `
      background-color: ${colors.primary.darknavy};
      background-image: none;
      backdrop-filter: none;
    `
    : `
      background: ${isPastHero ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
      backdrop-filter: ${isPastHero ? 'blur(10px)' : 'none'};
  `}

  height: 80px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
`;
