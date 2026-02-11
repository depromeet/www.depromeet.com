import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import Cookies from 'js-cookie';

import { RecruitState } from '~/hooks/useIsInProgress';

/**
 * @description
 * 모달 및 팝업과 같은 레이어 제일 최상단에 위치한 컴포넌트의 포지션을 쉽게 옮기기 위한 함수예요. <br/>
 * 첫 번째로 들어가는 인자는 <b>X축</b>을, 두 번째로 들어가는 인자는 <b>Y축</b>을 의미합니다.
 *
 * @params {string} position
 * */
const generateModalPositionStyle = ({ position = 'center center' }: { position?: string }) => {
  const [horizontal, vertical] = position.split(' ');

  const isValidHorizontal = ['left', 'center', 'right'].includes(horizontal);
  const isValidVertical = ['top', 'center', 'bottom'].includes(vertical);

  const safeHorizontal = isValidHorizontal ? horizontal : 'center';
  const safeVertical = isValidVertical ? vertical : 'center';

  const styles = {
    top: safeVertical === 'top' ? '0' : safeVertical === 'center' ? '50%' : 'auto',
    bottom: safeVertical === 'bottom' ? '0' : 'auto',
    left: safeHorizontal === 'left' ? '0' : safeHorizontal === 'center' ? '50%' : 'auto',
    right: safeHorizontal === 'right' ? '0' : 'auto',
    transform: '',
  };

  if (safeHorizontal === 'center' && safeVertical === 'center') {
    styles.transform = 'translate(-50%, -50%)';
  } else if (safeHorizontal === 'center') {
    styles.transform = 'translateX(-50%)';
  } else if (safeVertical === 'center') {
    styles.transform = 'translateY(-50%)';
  }

  return css`
    position: fixed;
    ${styles.top !== 'auto' ? `top: ${styles.top};` : ''}
    ${styles.bottom !== 'auto' ? `bottom: ${styles.bottom};` : ''}
    ${styles.left !== 'auto' ? `left: ${styles.left};` : ''}
    ${styles.right !== 'auto' ? `right: ${styles.right};` : ''}
    transform: ${styles.transform};
  `;
};

/**
 * @description
 * 사용자에게 팝업을 띄었는지 유무를 판단하기 위해 쿠키에 대한 값을 가져오는 유틸함수예요.
 *
 * @params {string} cookieName
 * */
function getPopupCookie({ cookieName }: { cookieName: string }) {
  if (!Cookies.get(cookieName)) {
    return true;
  }
  return false;
}

/**
 * @description
 * 사용자에게 팝업을 띄었는지 유무를 판단하기 위해 쿠키에 대한 값을 세팅하는 유틸함수예요.
 *
 * @params {string} cookieName
 * @params {number} expires
 * */
function setPopupCookie({ cookieName, expires = 1 }: { cookieName: string; expires?: number }) {
  Cookies.set(cookieName, 'true', { expires: expires });
}

/**
 * @description
 * UTC 타임존을 편하게 맞춰주는 유틸함수예요, 주로 지원 및 마감 시간에 사용되고 있어요.
 * 기본 값으로 한국 시간을 기준으로 9시간이 설정되어있어요
 *
 * @params {string} dateString
 * @params {number} offsetHours
 */

function adjustToUTC({
  dateString,
  offsetHours = 9,
}: {
  dateString: string;
  offsetHours?: number;
}) {
  const date = new Date(dateString);
  date.setHours(date.getHours() - offsetHours);
  return date.toISOString();
}

/**
 * @description
 * 현재 지원 시각에 맞춰 지원 상태를 변경해주는 유틸함수예요.
 * isApplyTime(18기 지원 오픈)이면 '18기 지원하기' + /recruit 이동.
 *
 * @param {import('next/router').NextRouter} router - Next.js의 `useRouter`를 통해 얻은 라우터 객체
 * @param {RecruitState} progressState - 현재 모집 상태
 * @param {boolean} isApplyTime - 18기 지원 오픈 여부 (APPLY_START_DATE 이후)
 *
 * @returns {{ action: (() => void), label: string, isDisabled?: boolean }}
 */
function getPathToRecruit(
  router: ReturnType<typeof useRouter>,
  progressState: RecruitState,
  isApplyTime?: boolean
) {
  if (isApplyTime) {
    return {
      action: () => router.push('/recruit'),
      label: '18기 지원하기',
    };
  }
  if (progressState === 'IN_PROGRESS') {
    return {
      action: () => router.push('/recruit#apply'),
      label: '17기 지원하기',
    };
  }
  if (progressState === 'PREVIOUS') {
    return {
      action: () => window.open('https://www.depromeet.com/recruit'),
      label: '18기 지원하기',
    };
  }

  return {
    action: () => window.open('https://www.depromeet.com/recruit'),
    label: '18기 지원하기',
  };
}

function getPositionStyleByAngle(angle: number, distance: number) {
  const x = Math.cos((Math.PI / 180) * angle) * distance;
  const y = -Math.sin((Math.PI / 180) * angle) * distance;
  return {
    left: x,
    top: y,
  };
}

function getNextArrowPosition(currentPosition: string) {
  const positions = ['ios', 'android', 'web', 'design', 'server'];

  const currentIndex = positions.indexOf(currentPosition);
  const nextIndex = (currentIndex + 1) % positions.length;
  return positions[nextIndex];
}

export {
  adjustToUTC,
  generateModalPositionStyle,
  getNextArrowPosition,
  getPathToRecruit,
  getPopupCookie,
  getPositionStyleByAngle,
  setPopupCookie,
};
