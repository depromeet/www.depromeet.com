import { css } from '@emotion/react';

import { colors, mediaQuery } from '~/styles/constants';
import { section40HeadingCss, sectionSmallCss } from '~/styles/css';

import { POSITION_TYPE_LABEL, PositionType } from './contstants';
import { sectionCss, sectionHeadingCss } from './Recurit.style';
import { ClickableLink } from '../common/Clickable';
import { ArrowIcon } from '../common/icons';
import { POSITION_TYPE } from '../recruit-detail/constants';

const positionTypes = Object.keys(POSITION_TYPE_LABEL) as PositionType[];

export default function JobGroupSection() {
  return (
    <section css={sectionCss}>
      <div css={sectionHeadingCss}>
        <p css={sectionSmallCss}>POSITIONS</p>
        <h2 css={section40HeadingCss}>모집 직군</h2>
      </div>
      <ul css={jobGroupFlexBox}>
        {positionTypes.map(key => (
          <ClickableLink key={`job-group-${key}`} href={`/recruit/${POSITION_TYPE[key]}`}>
            <li css={jobGroupItem}>
              {POSITION_TYPE_LABEL[key]}
              <span>
                자세히 보기 <ArrowIcon width={20} height={20} />
              </span>
            </li>
          </ClickableLink>
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

  span {
    display: flex;
    align-items: center;
  }

  svg {
    margin-left: 8px;
    & > * {
      stroke: ${colors.black};
    }
  }

  &:hover {
    color: ${colors.gray100};
    background-color: ${colors.black};

    svg {
      & > * {
        stroke: ${colors.gray100};
      }
    }
  }

  ${mediaQuery('xs')} {
    width: 100%;
  }
`;
