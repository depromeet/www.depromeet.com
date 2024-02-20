import React, { useState } from 'react';
import Image from 'next/image';
import { css, Theme } from '@emotion/react';

import { Button } from '~/components/Button';
import CloseIcon from '~/components/Icons/CloseIcon';
import Modal from '~/components/Modal/Modal';
import { mediaQuery } from '~/styles/media';

function GuideModalButton() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const onAlertClose = () => setIsAlertOpen(false);

  const onAlertButtonClick = () => {
    setIsAlertOpen(true);
  };
  return (
    <>
      <Button size="lg" overrideCss={buttonCss} onClick={onAlertButtonClick}>
        15기 알림신청
      </Button>

      <Modal isShowing={isAlertOpen} onClickOutside={onAlertClose} mode="wait">
        <article css={modalCss}>
          <h2>15기 알림 신청</h2>
          <p>디프만 카카오톡 채널 친구 추가 시 기수 모집 알림을 보내드립니다</p>
          <Image src={'/images/kakao-qr.png'} alt="kakao qr link" width={90} height={90} />
          <div css={buttonWrapperCss}>
            <a href="https://pf.kakao.com/_xoxmcxed">
              <Button size="md">카카오톡 채널 바로가기</Button>
            </a>
          </div>
          <div className="close-icon" onClick={onAlertClose}>
            <CloseIcon />
          </div>
        </article>
      </Modal>
    </>
  );
}

export default GuideModalButton;

const buttonCss = css`
  max-width: 443px;
  margin: 0 auto;

  ${mediaQuery('mobile')} {
    max-width: 266px;
  }
`;

const buttonWrapperCss = css`
  margin-top: 39px;
  margin-bottom: 24px;
  padding: 0 24px;
  width: 100%;

  button {
    height: 46px;
    width: 100%;

    ${mediaQuery('mobile')} {
      height: 46px;
    }
  }
`;

const modalCss = (theme: Theme) => css`
  background-color: ${theme.colors.black400};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 320px;
  position: relative;

  h2 {
    ${theme.typos.pretendard.body1};
    color: ${theme.colors.white};
    margin-bottom: 8px;
    margin-top: 47px;
  }

  p {
    ${theme.typos.pretendard.body2};
    color: ${theme.colors.gray100};
    margin-bottom: 39px;
    max-width: 221px;
  }

  .close-icon {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
`;
