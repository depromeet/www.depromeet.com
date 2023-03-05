import { css } from '@emotion/react';

import { colors, mediaQuery } from '~/styles/constants';

import {
  POSITION_DESCRIPTION,
  POSITION_PREFER_LIST,
  POSITION_TYPE,
  POSITION_WITH_CATEGORY_NAME,
  PositionType,
} from './constants';
import { sectionCss } from './RecruitDetail.style';
import { AndPersentCircleIcon } from '../common/icons/AndPersentCircleIcon';
import { BraceCircleIcon } from '../common/icons/BraceCircleIcon';
import { SharpInCircleIcon } from '../common/icons/SharpInCircleIcon';

export default function DescriptionSection({ positionType }: { positionType: PositionType }) {
  return (
    <section css={sectionCss}>
      <div css={flexBoxCss}>
        <div css={flexRowCss}>
          <dt>
            <span>
              {positionType === POSITION_TYPE.DESIGN ? (
                <SharpInCircleIcon color="black" />
              ) : (
                <BraceCircleIcon />
              )}

              {POSITION_WITH_CATEGORY_NAME[positionType]}
            </span>
          </dt>
          <dd dangerouslySetInnerHTML={{ __html: POSITION_DESCRIPTION[positionType] }} />
        </div>
        <div css={flexRowCss}>
          <dt>
            <span>
              <AndPersentCircleIcon />
              이런분들과 함께하고 싶어요
            </span>
          </dt>
          <dd>
            <ul>
              {POSITION_PREFER_LIST[positionType].map((content, index) => (
                <li key={index}>{content}</li>
              ))}
            </ul>
          </dd>
        </div>
      </div>
    </section>
  );
}

const flexBoxCss = css`
  display: flex;
  flex-direction: column;

  width: 100%;
  border-top: solid 1px ${colors.black};
`;

const flexRowCss = css`
  display: flex;

  height: 390px;
  width: 100%;
  padding: 20px 0;
  border-bottom: solid 1px ${colors.black};

  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.3px;
  color: ${colors.black};

  dt {
    position: relative;
    padding: 20px 0;
    width: 34%;
    border-right: solid 1px ${colors.black};

    span {
      display: flex;
      align-items: center;
    }

    svg {
      margin-right: 10px;
    }
  }

  dd {
    padding: 20px 20px 0 80px;
    width: 76%;

    ul {
      list-style: disc;
    }
    li {
      margin-bottom: 16px;
    }
  }

  ${mediaQuery('xs')} {
    flex-direction: column;
    height: fit-content;
    padding: 0;

    dt,
    dd {
      width: 100%;
      padding: 20px 0;
    }

    dt {
      border-right: none;
      border-bottom: solid 1px ${colors.black};
    }

    dd {
      font-weight: 500;
      font-size: 14px;
      line-height: 180%;

      ul {
        padding-left: 20px;
      }
    }
  }
`;
