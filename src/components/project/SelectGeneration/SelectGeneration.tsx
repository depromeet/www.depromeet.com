import { css } from '@emotion/react';

import { colors } from '~/styles/constants';

interface Props {
  selectGeneration: (clickedGeneration: any) => void;
}

export default function SelectGeneration({ selectGeneration }: Props) {
  return (
    <div css={wrapperCss}>
      <button
        css={buttonCss}
        onClick={() => {
          selectGeneration(null);
        }}
      >
        전체
      </button>
      <button
        css={buttonCss}
        onClick={() => {
          selectGeneration(12);
        }}
      >
        12기
      </button>
      <button
        css={buttonCss}
        onClick={() => {
          selectGeneration(11);
        }}
      >
        11기
      </button>
      <button
        css={buttonCss}
        onClick={() => {
          selectGeneration(10);
        }}
      >
        -10기
      </button>
    </div>
  );
}

const wrapperCss = css`
  margin-bottom: 40px;
`;

const buttonCss = css`
  width: 64px;
  height: 41px;
  border: 1px solid ${colors.black};
`;
