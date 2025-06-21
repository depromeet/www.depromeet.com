import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';

import { DEPROMEET_EMAIL, DEPROMEET_KAKAO_PLUS_FRIEND } from '~/constant/depromeet';
import { colors } from '~/styles/colors';
import { theme } from '~/styles/theme';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const fabContainerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(prev => !prev);

  const handleClickOutside = (e: MouseEvent) => {
    if (fabContainerRef.current && !fabContainerRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setIsMounted(true);
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div css={fabContainerStyle} ref={fabContainerRef}>
      <button
        css={fabButtonStyle}
        onClick={toggleMenu}
        onMouseEnter={() => toggleMenu}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <Image src={'/images/17th/fab/question.svg'} alt="question" width={36} height={36} />
      </button>

      {isOpen && (
        <div css={menuStyle}>
          <button
            css={[menuItemStyle, hoveredButton === 'email' && hoveredStyle]}
            onMouseEnter={() => setHoveredButton('email')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <Image src={'/images/17th/fab/mail.svg'} alt="mail" width={20} height={20} />
            <a href={DEPROMEET_EMAIL}> 이메일 문의 </a>
          </button>
          <button
            css={[menuItemStyle, hoveredButton === 'kakao' && hoveredStyle]}
            onMouseEnter={() => setHoveredButton('kakao')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <Image src={'/images/17th/fab/chat.svg'} alt="chat" width={20} height={20} />
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
  background-color: ${colors.primary.blue};
  color: ${colors.white};
  border: none;
  width: 54px;
  height: 54px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
`;

const menuStyle = css`
  position: absolute;
  bottom: 70px;
  right: 0;
  background-color: ${colors.white};
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid ${colors.primary.blue};
  display: flex;
  flex-direction: column;
  /* padding: 8px 0; */
  gap: 1px;
`;

const menuItemStyle = css`
  ${theme.typosV2.pretendard.semibold14}

  color: ${colors.primary.darknavy};

  &:nth-of-type(1) {
    padding: 16px 24px 12px 24px;
  }
  &:nth-of-type(2) {
    padding: 12px 24px 16px 24px;
  }
  border: none;
  width: 165px;
  display: flex;
  align-items: center;
  column-gap: 10px;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.grey[100]};
    opacity: 40;
  }
`;

const hoveredStyle = css`
  background-color: #555;
`;

export { FloatingActionButton };
