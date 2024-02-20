import { type ComponentProps, type MouseEvent, type PropsWithChildren } from 'react';
import { css } from '@emotion/react';
import { m, Variants } from 'framer-motion';

import AnimatePortal from '~/components/Modal/AnimatePortal';
import useScrollLock from '~/components/Modal/useScrollLock';

interface Props {
  /**
   * 외부영역 클릭시 호출될 함수
   */
  onClickOutside?: VoidFunction;
}

/**
 *
 * @param isShowing 열림/닫힘 상태
 * @param mode AnimatePresence mode
 * @param onClickOutside 외부영역 클릭시 호출될 함수
 */
const Modal = ({
  isShowing,
  mode,
  onClickOutside,
  children,
}: PropsWithChildren<Props> & ComponentProps<typeof AnimatePortal>) => {
  useScrollLock({ lock: isShowing });

  return (
    <AnimatePortal isShowing={isShowing} mode={mode}>
      <div css={dialogPositionCss}>
        <ModalBlur onClickOutside={onClickOutside} />
        <m.div
          variants={defaultFadeInVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          css={containerCss}
        >
          {children}
        </m.div>
      </div>
    </AnimatePortal>
  );
};
const defaultEasing = [0.6, -0.05, 0.01, 0.99];

const defaultFadeInVariants: Variants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: 'opacity',
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: 'opacity',
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: 'opacity',
  },
};

const dialogPositionCss = css`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
`;

const ModalBlur = ({ onClickOutside }: Pick<Props, 'onClickOutside'>) => {
  const onClickOutsideDefault = (e: MouseEvent) => {
    if (e.target !== e.currentTarget) return;
    if (onClickOutside) onClickOutside();
  };

  return (
    <m.div
      onClick={onClickOutsideDefault}
      css={blurCss}
      variants={defaultFadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        cursor: onClickOutside ? 'pointer' : 'default',
      }}
    />
  );
};

const blurCss = css`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: var(--DIM-70, rgba(19, 28, 40, 0.7));
`;

const containerCss = css`
  position: fixed;
  z-index: 10000;

  display: flex;
  flex-direction: column;

  border-radius: 16px;
`;

export default Modal;
