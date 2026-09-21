import { css } from '@emotion/react';

import { colors } from '~/styles/colors';

type Props = {
  /** 360에서 24px 로 줄인다(768 이상은 32). 프로젝트·후원 버튼이 그렇다. */
  responsive?: boolean;
};

export const CircleArrowRightIcon = ({ responsive = false }: Props) => (
  <>
    <span css={[defaultCss, responsive && responsiveSizeCss]} data-icon="default">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <circle cx="16" cy="16" r="16" fill={colors.v19.blue500} />
        <path
          d="M16 21.3337L21.3333 16.0003L16 10.667"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.667 16H21.3337"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>

    <span css={[hoverCss, responsive && responsiveSizeCss]} data-icon="hover">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <circle cx="16" cy="16" r="16" fill={colors.v19.white100} />
        <path
          d="M16 21.3337L21.3333 16.0003L16 10.667"
          stroke={colors.v19.blue500}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.667 16H21.3337"
          stroke={colors.v19.blue500}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </>
);

const defaultCss = css`
  display: flex;
`;

const hoverCss = css`
  display: none;
`;

/* svg 가 상자를 꽉 채우게 두고 상자 크기로 조절한다 — viewBox 가 있어 모양은 그대로다. */
const responsiveSizeCss = css`
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
