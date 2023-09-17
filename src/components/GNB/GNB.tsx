import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { Button } from '~/components/Button';
import { GNB_MENU_NAME, GNBMenu } from '~/constant/gnb';
import { colors } from '~/styles/colors';

const LOGO_IMAGE = `/images/logo.png`;

function ApplyButton({ menu }: { menu: GNBMenu }) {
  return (
    <Button css={applyButtonCss}>
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
            {<Image src={LOGO_IMAGE} alt="로고 이미지" width={240} height={30} />}
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
  padding: 0 20px;
  top: 0;
  left: 0;
  z-index: 9998;
  width: 100vw;
`;

const blankCss = css`
  width: 100vw;
  height: 72px;
`;

const navWrapperCss = css`
  max-width: 1240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  margin: 0 auto;
`;

const menuContainerCss = css`
  display: flex;
  gap: 60px;
`;

const menuCss = css`
  margin: auto 0;
`;

const activeLinkCss = css`
  color: ${colors.yellow500};
`;

const inActiveLinkCss = css`
  color: ${colors.white};
`;

const linkCss = css`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 150%; /* 30px */
  letter-spacing: -0.2px;
`;

const applyButtonCss = css`
  background-color: ${colors.yellow500};
  color: ${colors.black800};
`;
