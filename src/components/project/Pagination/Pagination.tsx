import { useId } from 'react';
import { css } from '@emotion/react';

interface Props {
  onClick: (clickedPage: number) => void;
  numberOfPages: number;
}

export default function Pagination({ onClick, numberOfPages }: Props) {
  const id = useId();
  return (
    <ul css={wrapperCss}>
      {[...new Array(numberOfPages)].map((_, i) => {
        return (
          <li
            onClick={() => {
              onClick(i + 1);
            }}
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
`;
