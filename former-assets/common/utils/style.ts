import { css } from '@emotion/react';

/**
 * @NOTE(@jonghopark95)
 * - 해당 CSS object 를 사용하고자 하였지만 사용하는 측에서 제대로 파싱하지 못하는 문제를 발견하였습니다.
 * - 시간 관계상 넘어가지만 후임 Maintainer 분께서 이 object 를 사용하여 재사용성을 높여주시면 감사하겠습니다.
 */
export const hideScrollbarStyles = css`
  && {
    -ms-overflow-style: none;
    scrollbar-width: none;
    position: relative;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
