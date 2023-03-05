import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { colors } from '~/styles/constants';

import { ArrowIcon } from '../common/icons';

export default function PreviousSection() {
  const router = useRouter();

  return (
    <div css={sectionCss}>
      <button
        onClick={() => {
          router.back();
        }}
      >
        <ArrowIcon width={18} height={18} color="black" />
        이전
      </button>
    </div>
  );
}

const sectionCss = css`
  max-width: 1200px;
  margin: 10px auto;

  button {
    display: flex;
    align-items: center;

    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.3px;
    color: ${colors.black};
  }

  svg {
    transform: rotate(180deg);
    margin-right: 10px;
  }
`;
