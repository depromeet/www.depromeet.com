import { css } from '@emotion/react';

import { colors, mediaQuery } from '~/styles/constants';
import { caption2Css } from '~/styles/css';

import { Generation } from '../ProjectListSection/ProjectListSection';

interface Props {
  selectGeneration: (clickedGeneration: null | Generation) => void;
  selectedGeneration: null | Generation;
}

export default function SelectGeneration({ selectGeneration, selectedGeneration }: Props) {
  return (
    <div css={wrapperCss}>
      <button
        css={buttonCss(selectedGeneration === null)}
        onClick={() => {
          selectGeneration(null);
        }}
      >
        전체
      </button>
      <button
        css={buttonCss(selectedGeneration === 12)}
        onClick={() => {
          selectGeneration(12);
        }}
      >
        12기
      </button>
      <button
        css={buttonCss(selectedGeneration === 11)}
        onClick={() => {
          selectGeneration(11);
        }}
      >
        11기
      </button>
      <button
        css={buttonCss(selectedGeneration === 10)}
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
  margin-bottom: 28px;
  display: flex;
  gap: 40px;
  ${mediaQuery('xs')} {
    gap: 20px;
    margin-bottom: 20px;
  }
`;

const buttonCss = (selected: boolean) => css`
  ${caption2Css}
  width: 64px;
  height: 41px;
  border: 1px solid ${colors.black};
  border-radius: 50%;

  background-color: ${selected && colors.black};
  border: ${!selected && `1px solid ${colors.black}`};
  color: ${selected ? colors.white : colors.black};

  &:hover,
  &:active {
    background: ${selected ? colors.black : colors.gray200};
  }
`;
