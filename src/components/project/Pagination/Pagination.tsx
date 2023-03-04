import { useId } from 'react';
import { css } from '@emotion/react';

import { colors } from '~/styles/constants';

interface Props {
  onClick: (clickedPage: number) => void;
  numberOfPages: number;
  currentPage: number;
}

export default function Pagination({ onClick, numberOfPages, currentPage }: Props) {
  const id = useId();
  return (
    <ul css={wrapperCss}>
      {[...new Array(numberOfPages)].map((_, i) => {
        return (
          <li
            onClick={() => {
              onClick(i + 1);
            }}
            css={listItemCss(currentPage === i + 1)}
            key={`page-${id}-${i + 1}`}
          >
            {i + 1}
          </li>
        );
      })}
    </ul>
  );
}

const wrapperCss = css`
  display: flex;
  gap: 40px;
  margin-top: 80px;
  font-family: 'Helvetica';
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
`;

const listItemCss = (selected: boolean) => css`
  color: ${selected ? colors.black : colors.gray500};
`;
