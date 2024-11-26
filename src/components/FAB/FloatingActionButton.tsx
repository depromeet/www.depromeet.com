import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import { DEPROMEET_EMAIL, DEPROMEET_KAKAO_PLUS_FRIEND } from '~/constant/depromeet';

import { Icon } from '../Icon/Icon';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(prev => !prev);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div css={fabContainerStyle}>
      <button
        css={fabButtonStyle}
        onClick={toggleMenu}
        onMouseEnter={() => toggleMenu}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <Icon icon="ic_question" />
      </button>

      {isOpen && (
        <div css={menuStyle}>
          <button
            css={[menuItemStyle, hoveredButton === 'email' && hoveredStyle]}
            onMouseEnter={() => setHoveredButton('email')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <Icon icon="ic_mail" />
            <a href={DEPROMEET_EMAIL}> 이메일 문의 </a>
          </button>
          <button
            css={[menuItemStyle, hoveredButton === 'kakao' && hoveredStyle]}
            onMouseEnter={() => setHoveredButton('kakao')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <Icon icon="ic_chat" />
            <a href={DEPROMEET_KAKAO_PLUS_FRIEND} target="_blank" rel="noreferrer">
              카카오톡 문의
            </a>
          </button>
        </div>
      )}
    </div>
  );
};

const fabContainerStyle = css`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 1000;
`;

const fabButtonStyle = css`
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 52px;
  height: 52px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #555;
  }
`;

const menuStyle = css`
  position: absolute;
  bottom: 70px;
  right: 0;
  background-color: #333;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  gap: 1px;
`;

const menuItemStyle = css`
  background-color: #333;
  color: #fff;
  padding: 12px 24px;
  border: none;
  width: 165px;
  display: flex;
  align-items: center;
  column-gap: 10px;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const hoveredStyle = css`
  background-color: #555;
`;

export { FloatingActionButton };
