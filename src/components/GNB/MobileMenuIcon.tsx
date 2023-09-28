import { css } from '@emotion/react';

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
  width: 24px;
  height: 24px;

  .menu {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    max-width: 0;
    min-width: 100px;
    transition: 0.5s ease;
    z-index: 1;
    background-color: #eee;
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
      background: #d9d9d9;
      display: block;
      height: 3px;
      position: relative;
      transition: background 0.2s ease-out;
      width: 24px;

      &:before,
      &:after {
        background: #d9d9d9;
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
    &:before {
      transform: rotate(-45deg);
    }
    &:after {
      transform: rotate(45deg);
    }
  }

  .burger-check:checked ~ .burger-icon:not(.steps) .burger-sticks {
    &:before,
    &:after {
      top: 0;
    }
  }
`;
