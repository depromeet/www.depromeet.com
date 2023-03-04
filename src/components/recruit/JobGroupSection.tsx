import Link from 'next/link';
import { css } from '@emotion/react';

import { colors, mediaQuery } from '~/styles/constants';
import { section40HeadingCss, sectionSmallCss } from '~/styles/css';

import { POSITION_TYPE_LABEL, PositionType } from './contstants';
import { sectionCss, sectionHeadingCss } from './Recurit.style';

const positionTypes = Object.keys(POSITION_TYPE_LABEL) as PositionType[];

export default function JobGroupSection() {
  return (
    <section css={sectionCss}>
      <div css={sectionHeadingCss}>
        <p css={sectionSmallCss}>job group</p>
        <h2 css={section40HeadingCss}>모집 직군</h2>
      </div>
      {/* TODO: clickAble 붙이기 */}
      <ul css={jobGroupFlexBox}>
        {positionTypes.map(key => (
          <Link
            key={`job-group-${key}`}
            href={`/recurit/${POSITION_TYPE_LABEL[key].toLowerCase()}`}
          >
            <li css={jobGroupItem}>
              {POSITION_TYPE_LABEL[key]}
              <span>자세히 보기 icon</span>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}

const jobGroupFlexBox = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 24px;
  row-gap: 28px;

  width: 100%;
  max-width: 1200px;

  ${mediaQuery('xs')} {
    flex-direction: column;
    row-gap: 20px;
  }
`;

const jobGroupItem = css`
  display: flex;
  flex-direction: column;
  row-gap: 2px;

  padding: 20px 24px;
  border: 1px solid ${colors.black};
  width: 384px;
  height: 98px;

  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.3px;
  color: ${colors.black};

  &:hover {
    color: ${colors.gray100};
    background-color: ${colors.black};
  }

  ${mediaQuery('xs')} {
    width: 100%;
  }
`;
