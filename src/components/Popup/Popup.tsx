import { ComponentProps, Fragment, MouseEvent } from 'react';
import { css, Interpolation, Theme } from '@emotion/react';
import { m, Variants } from 'framer-motion';

import useScrollLock from '~/components/Modal/useScrollLock';
import AnimatePortal from '~/components/Portal/AnimatePortal';
import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { mediaQuery } from '~/styles/media';
import { generateModalPositionStyle } from '~/utils/utils';

interface PopupProps {
  onClose?: () => void;
  position?: string;
  containerStyles?: Interpolation<Theme>;
  mode?: string;
}

const Popup = ({
  isShowing,
  children,
  position,
  onClose,
  mode = 'wait',
  containerStyles,
}: ComponentProps<typeof AnimatePortal> & PopupProps) => {
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');
  useScrollLock({ lock: isMobileSize && isShowing });

  return (
    <AnimatePortal isShowing={isShowing} mode={mode}>
      <Fragment>
        <BackgroundBlur onClose={onClose} />
        <m.div
          variants={defaultSlideUpVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          css={[containerCss({ position }), containerStyles]}
        >
          {children}
        </m.div>
      </Fragment>
    </AnimatePortal>
  );
};

const BackgroundBlur = ({ onClose }: Pick<PopupProps, 'onClose'>) => {
  const onClickOutsideDefault = (e: MouseEvent) => {
    if (e.target !== e.currentTarget) return;
    if (onClose) onClose();
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
        cursor: onClose ? 'pointer' : 'default',
      }}
    />
  );
};

const defaultEasing = [0.6, -0.05, 0.01, 0.99];
const defaultFadeInVariants: Variants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity',
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity',
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity',
  },
};

const defaultSlideUpVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};

/**
 * @description 추후 팝업 컴포넌트의 재사용성을 위해 최소한의 스타일링만 적용을 헀어요.
 * @params {string} position
 * */
const containerCss = ({ position }: Pick<PopupProps, 'position'>) => css`
  ${generateModalPositionStyle({ position })};
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 308px;
  height: 342px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.08);
  background-color: white;
  padding: 24px;

  ${mediaQuery('mobile')} {
    width: 100%;
    border-radius: 20px 20px 0 0;
  }
`;

const blurCss = css`
  display: none;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: var(--DIM-70, rgba(19, 28, 40, 0.7));

  ${mediaQuery('mobile')} {
    display: flex;
    width: 100%;
    border-radius: 20px 20px 0 0;
  }
`;

export default Popup;
