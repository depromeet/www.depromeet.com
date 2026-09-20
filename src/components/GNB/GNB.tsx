import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { css, Theme } from '@emotion/react';
import { AnimatePresence } from 'framer-motion';

import { MobileMenu } from '~/components/GNB/MobileMenu';
import { MobileMenuIcon } from '~/components/GNB/MobileMenuIcon';
import { GNB_MENU_NAME, GNBMenu } from '~/constant/gnb';
import { useDropDown } from '~/hooks/useDropdown';
import { GnbTheme, useGnbTheme } from '~/hooks/useGnbTheme';
import { useRecruitPhase } from '~/hooks/useRecruitPhase';
import { colors } from '~/styles/colors';
import { getRecruitCta } from '~/utils/recruit';

function ApplyButton({ isDark }: { isDark: boolean }) {
  const phase = useRecruitPhase();
  const buttonCss = linkButtonCss(isDark);

  // 마운트 전에는 시각에 따라 달라지는 라벨을 확정할 수 없다(계획 §0.6).
  // 가장 긴 라벨을 숨겨 렌더해 폭을 예약하면 상태가 정해질 때 레이아웃이 흔들리지 않는다.
  if (phase === null) {
    return (
      <span css={[buttonCss, placeholderCss]} aria-hidden>
        {getRecruitCta('BEFORE').label}
      </span>
    );
  }

  const cta = getRecruitCta(phase);

  if (cta.kind === 'disabled') {
    return (
      <button type="button" css={buttonCss} disabled>
        {cta.label}
      </button>
    );
  }

  return cta.external ? (
    <a css={buttonCss} href={cta.href} target="_blank" rel="noopener noreferrer">
      {cta.label}
    </a>
  ) : (
    <Link css={buttonCss} href={cta.href}>
      {cta.label}
    </Link>
  );
}

const placeholderCss = css`
  visibility: hidden;
`;

const linkButtonCss = (isDark: boolean) => css`
  display: flex;
  height: 60px;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  background: ${isDark ? colors.v19.white100 : colors.v19.blue900};
  color: ${isDark ? colors.v19.blue900 : colors.v19.white100};
  font-family: Pretendard, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap;
  /* 밝은 섹션과 어두운 섹션의 경계를 지날 때 색이 튀지 않게 한다. */
  transition: background 0.3s ease, color 0.3s ease;

  /* Tablet: Push button to right */
  @media (min-width: 768px) and (max-width: 1279px) {
    margin-left: auto;
  }

  &:disabled {
    background: ${colors.v19.coolGray200};
    color: ${colors.v19.coolGray400};
  }
`;

/**
 * 디자이너 노트는 "화면 스크롤 시 GNB(Background = True) 노출"이다 — 특정 높이가 아니라
 * **스크롤이 시작되면** 배경이 붙는다. 18기의 800px 기준을 그대로 두면 히어로가 없는
 * `/recruit`·`/project`·`/blog`에서 첫 800px 동안 본문 위에 투명한 GNB가 떠 글자가 겹친다.
 * 작은 값을 두는 건 최상단에서의 떨림을 막기 위함이다.
 */
const SCROLL_THRESHOLD = 8;

/**
 * 각 페이지 **최상단 섹션**의 배경. 첫 페인트(SSR)와 마운트 직전에 쓰는 초기값이고,
 * 그 뒤로는 `useGnbTheme`이 스크롤에 따라 실제로 뒤에 깔린 섹션을 따라간다.
 *
 * 시안에서 네이비 히어로(모집안내 `203:2377`)의 GNB는 흰 로고·흰 메뉴·**흰 CTA 알약**이고,
 * 밝은 페이지(`203:1065` 프로젝트·블로그)에서는 어두운 로고·어두운 메뉴·**어두운 CTA 알약**이다.
 */
const DARK_TOP_ROUTES = ['/', '/recruit', '/404'];

const getInitialGnbTheme = (pathname: string): GnbTheme =>
  DARK_TOP_ROUTES.includes(pathname) ? 'dark' : 'light';

export function GNB() {
  const { pathname } = useRouter();
  const { containerRef, isDropdownOpen, openDropdown, closeDropdown } = useDropDown();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = useGnbTheme(getInitialGnbTheme(pathname)) === 'dark';

  const getActiveLinkcss = (menu: GNBMenu) =>
    pathname === menu.href ? activeLinkCss(isDark) : inActiveLinkCss(isDark);

  return (
    <>
      {/* Desktop GNB */}
      <nav css={navCss(isScrolled)}>
        <div css={navWrapperCss}>
          <Link href={'/'} css={logoLinkCss(isDark)}>
            DPM
          </Link>
          <div css={spacerOneCss} />
          <ul css={menuContainerCss}>
            {GNB_MENU_NAME.map(menu => (
              <li css={menuCss} key={menu.name}>
                <Link css={[linkCss, getActiveLinkcss(menu)]} href={menu.href}>
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
          <div css={spacerTwoCss} />
          <ApplyButton isDark={isDark} />
        </div>
      </nav>

      {/* Mobile GNB */}
      <nav ref={containerRef} css={mobileNavCss}>
        <div css={mobileMenuGNBCss(isDropdownOpen, isScrolled)}>
          <Link href={'/'} css={mobileLogoLinkCss(isDropdownOpen, isDark)}>
            {isDropdownOpen ? (
              <Image
                src="/images/19th/common/gnb-mobile-wordmark.svg"
                alt="DEPROMEET"
                width={120}
                height={24}
                css={mobileLogoImageCss}
              />
            ) : (
              'DPM'
            )}
          </Link>
          <MobileMenuIcon
            key={isDropdownOpen ? 'open' : 'closed'}
            onClick={e => {
              e.stopPropagation();
              isDropdownOpen ? closeDropdown() : openDropdown();
            }}
            isChecked={isDropdownOpen}
            iconColor={isDropdownOpen || isDark ? colors.v19.white100 : colors.v19.coolGray700}
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
  overflow: hidden;
`;

/** Figma `203:673`(GNB variant set) Default 모드: 최상단은 투명, Background=True면 White 10% + blur. */
const navCss = (isScrolled: boolean) => css`
  ${navCommonCss()};
  background: ${isScrolled ? colors.v19.white010 : 'transparent'};
  backdrop-filter: ${isScrolled ? 'blur(10px)' : 'none'};
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
`;

const spacerOneCss = css`
  flex: 1;
  min-width: 40px;
  max-width: 269px;
  height: 1px;
`;

const spacerTwoCss = css`
  flex: 1;
  min-width: 44px;
  height: 1px;
`;

/** 로고 "DPM" — Figma `203:1003`: Instrument Sans SemiBold 24px (18기는 Helvetica Neue Medium). */
const logoLinkCss = (isDark: boolean) => (theme: Theme) =>
  css`
    ${theme.typosV4.instrumentSans.sub3};
    color: ${isDark ? colors.v19.white100 : colors.v19.blue900};
    text-decoration: none;
    transition: color 0.3s ease;
  `;

const mobileLogoLinkCss = (isDropdownOpen: boolean, isDark: boolean) => (theme: Theme) =>
  css`
    ${theme.typosV4.instrumentSans.sub3};
    color: ${isDropdownOpen || isDark ? colors.v19.white100 : colors.v19.blue900};
    text-decoration: none;
    transition: color 0.3s ease;

    ${isDropdownOpen &&
    css`
      display: flex;
      align-items: center;
    `}
  `;

const mobileLogoImageCss = css`
  display: block;
  height: 24px;
  width: auto;
  object-fit: contain;
`;

const menuContainerCss = css`
  display: flex;
  gap: 48px;
`;

const menuCss = css`
  margin: auto 0;
`;

const activeLinkCss = (isDark: boolean) => css`
  color: ${isDark ? colors.v19.white100 : colors.v19.coolGray700};
  font-family: Pretendard, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  transition: color 0.3s ease;
`;

const inActiveLinkCss = (isDark: boolean) => css`
  color: ${isDark ? colors.v19.coolGray200 : colors.v19.coolGray500};
  font-family: Pretendard, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  opacity: 0.8;
  transition: color 0.3s ease;
`;

const linkCss = (theme: Theme) => css`
  ${theme.typosV3.pretendard.sub5Medium};
  white-space: nowrap;
`;

const mobileMenuGNBCss = (isDropdownOpen: boolean, isScrolled: boolean) => css`
  ${navCommonCss()};

  ${isDropdownOpen
    ? `
      background-color: ${colors.v19.coolGray800};
      background-image: none;
      backdrop-filter: none;
    `
    : `
      background: ${isScrolled ? colors.v19.white010 : 'transparent'};
      backdrop-filter: ${isScrolled ? 'blur(10px)' : 'none'};
  `}

  height: 80px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
`;
