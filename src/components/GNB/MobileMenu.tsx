import Link from 'next/link';
import { useRouter } from 'next/router';
import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { m } from 'framer-motion';

import { GNB_MOBILE_MENU_NAME, GNBMenu } from '~/constant/gnb';
import { useRecruitPhase } from '~/hooks/useRecruitPhase';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { getRecruitCta } from '~/utils/recruit';

interface MobileMenuProps {
  onClickMenu: () => void;
}

function ApplyMenuItem({ onClickMenu }: MobileMenuProps) {
  const phase = useRecruitPhase();

  // 마운트 전에는 라벨을 확정할 수 없다(계획 §0.6).
  if (phase === null) {
    return (
      <span css={[linkCss, placeholderCss]} aria-hidden>
        {getRecruitCta('BEFORE').label}
      </span>
    );
  }

  const cta = getRecruitCta(phase);

  if (cta.kind === 'disabled') {
    return (
      <button type="button" css={linkCss} disabled>
        {cta.label}
      </button>
    );
  }

  return cta.external ? (
    <a
      css={linkCss}
      href={cta.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClickMenu}
    >
      {cta.label}
    </a>
  ) : (
    <Link css={linkCss} href={cta.href} onClick={onClickMenu}>
      {cta.label}
    </Link>
  );
}

export function MobileMenu({ onClickMenu }: MobileMenuProps) {
  const router = useRouter();

  const getActiveLinkcss = (menu: GNBMenu) => {
    if (router.pathname === menu.href) {
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
            <Link href={menu.href} css={[linkCss, getActiveLinkcss(menu)]}>
              {menu.name}
            </Link>
          </m.li>
        ))}
        <m.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <ApplyMenuItem onClickMenu={onClickMenu} />
        </m.li>
      </ul>
    </m.article>
  );
}

const mobileMenuCss = (_theme: Theme) => css`
  z-index: 9997;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  background-color: ${colors.v19.coolGray800};
  padding-top: 64px;

  overflow: hidden;

  li {
  }
`;

const linkCss = (theme: Theme) => css`
  ${theme.typosV3.pretendard.sub3Semibold};
  color: ${colors.v19.white100};

  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 12px 20px;

  ${mediaQuery('mobile')} {
    font-size: 1rem;
  }

  &:hover,
  &:active {
    color: ${colors.v19.blue300};
  }

  &:disabled {
    color: ${colors.v19.coolGray400};
    cursor: not-allowed;
  }
`;

const placeholderCss = css`
  visibility: hidden;
`;

const activeLinkCss = () => css`
  color: ${colors.v19.blue300} !important;

  &:hover,
  &:active {
    color: ${colors.v19.blue300} !important;
  }
`;

const inActiveLinkCss = () => css`
  color: ${colors.v19.white100};
`;
