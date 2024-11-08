import { css } from '@emotion/react';

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

export { generateModalPositionStyle };
