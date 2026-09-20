import { css } from '@emotion/react';

import { colors } from '~/styles/colors';

interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isChecked?: boolean;
  iconColor?: string;
}

/** Figma `203:673`(GNB variant set) Menu Toggle 아이콘, Default 모드 fill 그대로. */
const MenuIcon = ({ color = colors.v19.coolGray700 }: { color?: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 24V21.3333H28V24H4ZM4 17.3333V14.6667H28V17.3333H4ZM4 10.6667V8H28V10.6667H4Z"
      fill={color}
    />
  </svg>
);

/** Figma `203:968`(GNB_Mobile) Icon/Assets/Close, 32px 버튼에 맞춰 스케일만 키움. */
const CloseIcon = ({ color = colors.v19.white100 }: { color?: string }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.6294 5.64315L13.2719 11.9996L19.6294 18.357L18.9926 18.9928L18.3569 19.6295L11.9995 13.2721L5.64205 19.6295L5.00631 18.9928L4.36959 18.357L10.726 11.9996L4.36959 5.64315L5.64303 4.36972L11.9995 10.7262L18.3559 4.36972L19.6294 5.64315Z"
      fill={color}
    />
  </svg>
);

export function MobileMenuIcon({ onClick, isChecked = false, iconColor }: Props) {
  const color = iconColor ?? (isChecked ? colors.v19.white100 : colors.v19.coolGray700);
  return (
    <button
      type="button"
      css={containerCss}
      onClick={e => onClick?.(e)}
      aria-label={isChecked ? '메뉴 닫기' : '메뉴 열기'}
    >
      {isChecked ? <CloseIcon color={color} /> : <MenuIcon color={color} />}
    </button>
  );
}

const containerCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
`;
