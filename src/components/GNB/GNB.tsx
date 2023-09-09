import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';

import { GNB_MENU_NAME } from '~/constant/gnb';
import { colors } from '~/styles/colors';

const LOGO_IMAGE = `/images/logo.png`;
export function GNB() {
  return (
    <nav css={navCss}>
      <div css={navWrapperCss}>
        {<Image src={LOGO_IMAGE} alt="로고 이미지" width={240} height={30} />}
        <ul css={menuContainerCss}>
          {GNB_MENU_NAME.map(menu => (
            <li key={menu.name}>
              <Link css={LinkCss} href={menu.href}>
                {menu.name}
              </Link>
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

const LinkCss = css`
  color: ${colors.white};
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 150%; /* 30px */
  letter-spacing: -0.2px;
`;
