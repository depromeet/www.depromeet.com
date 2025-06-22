'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { css, Theme } from '@emotion/react';

import { Button } from '~/components/Button';

function RecruitNotificationModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    const modalClosed = localStorage.getItem('depromeet17thModalClosed');
    if (modalClosed) {
      return () => window.removeEventListener('resize', checkScreenSize);
    }

    const timer = setTimeout(
      () => {
        setIsModalOpen(true);
      },
      isMobile ? 0 : 3000
    );

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [isMobile]);

  const onModalClose = () => {
    setIsModalOpen(false);
    localStorage.setItem('depromeet17thModalClosed', 'true');
  };

  const onApplyClick = () => {
    window.open('https://forms.gle/Fn1i6zoipWXb3G5Q8', '_blank');
  };

  if (!isModalOpen) return null;

  const modalContent = (
    <article css={isMobile ? mobileModalCss : desktopModalCss}>
      <div className="close-icon" onClick={onModalClose}>
        <Image src="/images/17th/close.svg" alt="닫기" width={11} height={11} />
      </div>
      <p>
        디프만은 17기 준비 중<br />
        준비가 완료되면 알려드릴게요!
      </p>
      <div css={bellIconCss}>
        <Image src="/images/17th/ring2.svg" alt="알림" width={130} height={130} />
      </div>
      <div css={buttonWrapperCss}>
        <Button size={isMobile ? 'lg' : 'md'} onClick={onApplyClick}>
          17기 모집 알림 신청
        </Button>
      </div>
    </article>
  );

  return isMobile ? (
    <div css={mobileModalWrapperCss}>{modalContent}</div>
  ) : (
    <div css={desktopModalWrapperCss}>{modalContent}</div>
  );
}

export default RecruitNotificationModal;

const commonModalCss = (theme: Theme) => css`
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  position: relative;
  padding: 24px;

  p {
    ${theme.typos.pretendard.body1};
    color: ${theme.colors.black};
    margin-bottom: 41.5px;
    font-weight: 600 !important;
    font-size: 20px !important;
    line-height: 1.4;
  }

  .close-icon {
    position: absolute;
    top: 24px;
    right: 20px;
    cursor: pointer;
    background: #e9e9e9;
    border-radius: 100%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const mobileModalWrapperCss = css`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
`;

const desktopModalWrapperCss = css`
  position: fixed;
  z-index: 1000;
  bottom: 24px;
  left: 24px;
  animation: fadeInUp 0.5s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const mobileModalCss = (theme: Theme) => css`
  ${commonModalCss(theme)}
  width: 100%;
  border-radius: 20px 20px 0 0;
  animation: slideUpFromBottom 0.5s ease-out;

  @keyframes slideUpFromBottom {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const desktopModalCss = (theme: Theme) => css`
  ${commonModalCss(theme)}
  width: 308px;
  border-radius: 20px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const bellIconCss = css`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 41.5px;
  align-self: center;
`;

const buttonWrapperCss = css`
  width: 100%;
  align-self: stretch;

  button {
    width: 100%;
    height: 51px;
    padding: 12px;
    border-radius: 50px;
    font-weight: 500;
    font-size: 18px;
    background-color: #000;
    color: #fff;
    border: none;

    &:hover {
      background-color: #333;
    }
  }
`;
