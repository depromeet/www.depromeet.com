import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import watch from '~/assets/16th/lottie/watch.json';
import { Icon } from '~/components/Icon/Icon';
import { Lottie } from '~/components/Lottie/Lottie';
import Popup from '~/components/Popup/Popup';
import { mediaQuery } from '~/styles/media';
import { getPopupCookie, setPopupCookie } from '~/utils/utils';

const WillRecruitNoticePopup = () => {
  const POPUP_COOKIE_NAME = '16TH-POPUP';
  const [isShowing, setShowing] = useState(false);

  useEffect(() => {
    if (getPopupCookie({ cookieName: POPUP_COOKIE_NAME })) {
      const timer = setTimeout(() => {
        setShowing(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);
  const handleClick = () => (window.location.href = 'https://bit.ly/3YJgDmR');
  const handleClose = () => {
    setShowing(false);
    setPopupCookie({ cookieName: POPUP_COOKIE_NAME, expires: 1 });
  };

  return (
    <Popup
      isShowing={isShowing}
      position={'left bottom'}
      onClose={handleClose}
      mode="wait"
      containerStyles={popupCss}
    >
      <div css={containerCss}>
        <div css={contentCss}>
          <span>{`디프만은 16기 준비 중\n준비가 완료되면 알려드릴게요!`}</span>
          <Icon icon={'ic_close'} css={iconCss} onClick={handleClose} />
        </div>
        <Lottie animationData={watch} css={watchLottieCss} />
        <button css={buttonCss} onClick={handleClick}>
          16기 모집 알림 신청
        </button>
      </div>
    </Popup>
  );
};

const popupCss = () => css`
  margin-left: 40px;
  margin-bottom: 40px;

  ${mediaQuery('mobile')} {
    margin: 0;
  }
`;

const containerCss = () => css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 31.5px;
`;

const contentCss = () => css`
  width: 100%;
  display: flex;
  row-gap: 0.5rem;

  span {
    display: block;
    white-space: pre-wrap;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: -0.4px;
  }
`;

const watchLottieCss = () => css`
  width: 115px;
  height: auto;
`;

const buttonCss = () => css`
  display: flex;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 300px;
  background-color: black;
  font-size: 18px;
  line-height: 27px;
  font-weight: 600;
  color: white;
`;

const iconCss = () => css`
  margin-left: auto;
`;

export default WillRecruitNoticePopup;
