import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { css, Theme } from '@emotion/react';

import { Button } from '~/components/Button';
import { GNB_MENU_NAME, GNBMenu } from '~/constant/gnb';
import { colors } from '~/styles/colors';

const LOGO_IMAGE = `/images/logo.png`;

function ApplyButton({ menu }: { menu: GNBMenu }) {
  return (
    <Button>
      <Link css={linkCss} href={menu.href}>
        {menu.name}
      </Link>
    </Button>
  );
}

export function GNB() {
  const { pathname } = useRouter();
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
            {<Image src={LOGO_IMAGE} alt="로고 이미지" width={154} height={18.9} />}
          </Link>
          <ul css={menuContainerCss}>
            {GNB_MENU_NAME.map(menu => (
              <li css={menuCss} key={menu.name}>
                {menu.type === 'button' ? (
                  <ApplyButton menu={menu} />
                ) : (
                  <Link css={[linkCss, getActiveLinkcss(menu)]} href={menu.href}>
                    {menu.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div css={blankCss} />
    </>
  );
}

const navCss = css`
  background-color: ${colors.black800};
  position: fixed;
  padding: 20px 32px;
  top: 0;
  left: 0;
  z-index: 9998;
  width: 100vw;
`;

const blankCss = css`
  width: 100vw;
  height: 82px;
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

const menuCss = css`
  margin: auto 0;
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
