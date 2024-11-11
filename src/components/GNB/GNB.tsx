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
import { mediaQuery } from '~/styles/media';

const LOGO_IMAGE = `/images/logo.svg`;
const currentGeneration = 16;

// TODO: 추후 해당 컴포넌트 재사용
// function ApplyButton() {
//   const { isInProgress, dDay } = useIsInProgress();
//   const router = useRouter();
//
//   const onClick = () => {
//     router.push('/apply');
//   };
//
//   return (
//     <Button disabled={!isInProgress} css={linkButtonCss} onClick={onClick} suppressHydrationWarning>
//       {isInProgress ? ' 지원하기' : dDay < 0 ? `D${dDay}` : `지원 마감`}
//     </Button>
//   );
// }

function NotifyButton() {
  const handleClick = () => (window.location.href = 'https://bit.ly/3YJgDmR');
  return (
    <Button onClick={handleClick} css={linkButtonCss}>
      {currentGeneration}기 모집 알림 신청
    </Button>
  );
}

const linkButtonCss = css`
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
          {/*<ApplyButton />*/}
          <NotifyButton />
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

const navCommonCss = () => css`
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  width: 100vw;
`;

const navCss = () => css`
  ${navCommonCss()};
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
  ${theme.typosV2.pretendard.regular14};
`;

const mobileMenuGNBCss = () => css`
  ${navCommonCss()};
  padding: 21px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > a {
    margin-top: 6px;
  }
`;
