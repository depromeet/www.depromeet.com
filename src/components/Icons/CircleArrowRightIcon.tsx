import { css } from '@emotion/react';

import { colors } from '~/styles/colors';

type Props = {
  /**
   * 아이콘 한 변의 길이(px). 뷰포트와 무관하게 이 크기로 그린다.
   *
   * 피그마에서 값을 옮길 때는 컴포넌트 박스가 아니라 svg 자체 크기를 봐야 한다.
   * 박스 크기를 그대로 읽어 32px을 넣었던 적이 있다.
   */
  size: number;
};

export const CircleArrowRightIcon = ({ size }: Props) => (
  <>
    <span css={[defaultCss, sizeCss(size)]} data-icon="default">
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

    <span css={[hoverCss, sizeCss(size)]} data-icon="hover">
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
const sizeCss = (size: number) => css`
  width: ${size}px;
  height: ${size}px;
  /* 버튼이 flex 라 웹폰트가 늦게 오면 글자가 넓어지며 아이콘을 눌러버린다. 크기를 고정한다. */
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;
