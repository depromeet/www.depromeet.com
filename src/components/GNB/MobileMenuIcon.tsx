import { css } from '@emotion/react';

import { colors } from '~/styles/colors';

interface Props {
  onClick?: () => void;
  isChecked?: boolean;
}
export function MobileMenuIcon({ onClick, isChecked }: Props) {
  return (
    <div css={containerCss}>
      <input
        className="burger-check"
        type="checkbox"
        id="burger-check"
        onClick={onClick}
        checked={isChecked}
        readOnly
      />
      <label className="burger-icon" htmlFor="burger-check">
        <span className="burger-sticks"></span>
      </label>
    </div>
  );
}

const containerCss = css`
  position: relative;
  width: 32px;
  height: 32px;

  .menu {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    max-width: 0;
    min-width: 100px;
    transition: 0.5s ease;
    z-index: 1;
    background-color: ${colors.primary.darknavy};
  }

  .burger-icon {
    cursor: pointer;
    display: inline-block;
    position: absolute;
    z-index: 2;
    padding: 8px 0;
    top: 8px;
    right: 4px;
    user-select: none;
    width: auto;

    .burger-sticks {
      background: ${colors.primary.darknavy};
      display: block;
      height: 3px;
      position: relative;
      transition: background 0.2s ease-out;
      width: 24px;

      &:before,
      &:after {
        background: ${colors.primary.darknavy};
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        transition: all 0.2s ease-out;
        width: 100%;
      }

      &:before {
        top: 8px;
      }

      &:after {
        top: -8px;
      }
    }
  }

  .burger-check {
    display: none;
  }

  .burger-check:checked ~ .burger-icon .burger-sticks {
    background: transparent;
    left: -5px;

    &:before {
      background: ${colors.grey[100]};
      transform: rotate(-45deg);
      /* left: -5px; */
    }
    &:after {
      background: ${colors.grey[100]};
      transform: rotate(45deg);
      /* left: -5px; */
    }
  }

  .burger-check:checked ~ .burger-icon:not(.steps) .burger-sticks {
    &:before,
    &:after {
      top: 0;
    }
  }
`;
