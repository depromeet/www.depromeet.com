import { useId } from 'react';
import { css } from '@emotion/react';

import { colors } from '~/styles/constants';

export interface PaginationProps {
  onClick: (clickedPage: number) => void;
  numberOfPages: number;
  currentPage: number;
}

export default function Pagination({ onClick, numberOfPages, currentPage }: PaginationProps) {
  const id = useId();
  return (
    <ul css={listCss}>
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

const listCss = css`
  margin-top: 80px;
  display: flex;
  gap: 40px;
  font-family: 'Helvetica';
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  justify-content: center;
`;

const listItemCss = (selected: boolean) => css`
  color: ${selected ? colors.black : colors.gray500};
`;
