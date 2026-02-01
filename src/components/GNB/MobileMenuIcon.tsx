import { css } from '@emotion/react';

interface Props {
  onClick?: () => void;
  isChecked?: boolean;
}

const MenuIcon = ({ color = '#000000' }: { color?: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9H26M6 16H26M6 23H26" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CloseIcon = ({ color = '#ffffff' }: { color?: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8L24 24M24 8L8 24" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export function MobileMenuIcon({ onClick, isChecked }: Props) {
  return (
    <button css={containerCss} onClick={onClick} aria-label={isChecked ? '메뉴 닫기' : '메뉴 열기'}>
      {isChecked ? <CloseIcon /> : <MenuIcon />}
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
