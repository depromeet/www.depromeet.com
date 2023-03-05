import Image from 'next/image';
import { css } from '@emotion/react';

import BottomSheet from '~/components/common/BottomSheet';
import { BottomSheetModalProps } from '~/components/common/BottomSheet/BottomSheet';
import { colors } from '~/styles/constants';

import { Order } from '../ProjectListSection/ProjectListSection';

type Props = Omit<BottomSheetModalProps, 'children'> & {
  sortBy: Order;
  sortByLatest: () => void;
  sortByOldest: () => void;
};

export default function SortBottomSheet({
  isShowing,
  onClose,
  sortBy,
  sortByLatest,
  sortByOldest,
}: Props) {
  return (
    <BottomSheet isShowing={isShowing} onClose={onClose}>
      <div css={bottomSheetContentsCss}>
        <button css={bottomSheetBtnCss(sortBy === 'latest')} onClick={sortByLatest}>
          최신순
          {sortBy === 'latest' && (
            <Image src={'/project/check.webp'} width={24} height={24} alt="" />
          )}
        </button>
        <div css={bottomSheetDividerCss}></div>
        <button css={bottomSheetBtnCss(sortBy === 'oldest')} onClick={sortByOldest}>
          오래된순
          {sortBy === 'oldest' && (
            <Image src={'/project/check.webp'} width={24} height={24} alt="" />
          )}
        </button>
      </div>
    </BottomSheet>
  );
}

const bottomSheetContentsCss = css`
  background: ${colors.white};
  height: 198px;
  padding: 30px;
`;

const bottomSheetBtnCss = (selected: boolean) => css`
  font-size: 18px;
  line-height: 21px;
  font-weignt: ${selected ? 700 : 500};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
  width: 100%;
`;

const bottomSheetDividerCss = css`
  border: 0.3px solid ${colors.black};
  margin: 25px 0;
`;
