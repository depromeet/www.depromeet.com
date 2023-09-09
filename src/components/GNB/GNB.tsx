import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';

import { Button } from '~/components/Button';
import { GNB_MENU_NAME } from '~/constant/gnb';
import { colors } from '~/styles/colors';

const LOGO_IMAGE = `/images/logo.png`;
export function GNB() {
  return (
    <nav css={navCss}>
      <div css={navWrapperCss}>
        <Link href={'/'}>
          {<Image src={LOGO_IMAGE} alt="로고 이미지" width={240} height={30} />}
        </Link>
        <ul css={menuContainerCss}>
          {GNB_MENU_NAME.map(menu => (
            <li css={menuCss} key={menu.name}>
              {menu.type === 'button' ? (
                <Button css={yellow500css}>
                  <Link css={linkButtonCss} href={menu.href}>
                    {menu.name}
                  </Link>
                </Button>
              ) : (
                <Link css={linkCss} href={menu.href}>
                  {menu.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
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

const linkCss = css`
  color: ${colors.white};
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 150%; /* 30px */
  letter-spacing: -0.2px;
`;

const linkButtonCss = css`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 150%; /* 30px */
  letter-spacing: -0.2px;
`;

const yellow500css = css`
  background-color: ${colors.yellow500};
  color: ${colors.black800};
`;
