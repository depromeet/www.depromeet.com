import Image from 'next/image';
import { css } from '@emotion/react';

import CTAButton from '~/components/common/CTAButton';
import { colors } from '~/styles/constants';

import { ICON_CATEGORY_PATH, PositionType, POSTION_DISPLAY_NAME } from '../constants';

export default function DescriptionSection({ positionType }: { positionType: PositionType }) {
  const positionName = POSTION_DISPLAY_NAME[positionType];

  return (
    <section css={sectionCss}>
      <h2 css={headingCss}>{positionName}</h2>
      <div css={descriptionCss}>
        <dt>
          <Image
            width={24}
            height={24}
            src={`${ICON_CATEGORY_PATH[positionType]}`}
            alt="category-icon"
          />
          000 Developer 는 이런 일을 해요
        </dt>
        <dd>
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        </dd>
      </div>
      <div css={descriptionCss}>
        <dt>
          <Image width={24} height={24} src={'/svg/icon-hand-shake.svg'} alt="category-icon" />
          이런 분들과 함께하고 싶어요
        </dt>
        <dd>
          <ul css={preferListCss}>
            <li>내용내용내용내용내용내용내용</li>
            <li>내용내용내용내용내용내용내용내용내용</li>
            <li>ㄴ용내욘ㅇ내용내용내용내용내용내용</li>
          </ul>
        </dd>
      </div>
      <CTAButton css={ctaBtnCss}>지원하기</CTAButton>
      <hr css={dividerCss} />
    </section>
  );
}

const sectionCss = css`
  width: 100%;
  margin-bottom: 60px;
`;

const headingCss = css`
  font-weight: 600;
  font-size: 2.625rem;
  line-height: 120%;

  margin-bottom: 60px;
`;

const descriptionCss = css`
  margin-bottom: 80px;

  dt {
    display: flex;
    align-items: center;

    gap: 6px;

    font-weight: 600;
    font-size: 1.5rem;
    line-height: 29px;

    color: ${colors.gray1};
  }

  dd {
    font-size: 1.5rem;
    line-height: 150%;

    color: ${colors.gray3};
  }
`;

const preferListCss = css`
  list-style: disc;
  padding-left: 20px;
`;

const ctaBtnCss = css`
  margin-bottom: 120px;
`;

const dividerCss = css`
  border: 0px;
  border-top: 1px solid ${colors.gray7};
`;
