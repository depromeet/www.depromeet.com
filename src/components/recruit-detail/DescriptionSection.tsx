import { css } from '@emotion/react';

import { colors, mediaQuery } from '~/styles/constants';

import {
  POSITION_DESCRIPTION,
  POSITION_DISPLAY_NAME,
  POSITION_PREFER_LIST,
  POSITION_TYPE,
  POSITION_WITH_CATEGORY_NAME,
  PositionType,
} from './constants';
import { sectionCss, sectionHeadingCss } from './RecruitDetail.style';
import { AndPersentCircleIcon } from '../common/icons/AndPersentCircleIcon';
import { BraceCircleIcon } from '../common/icons/BraceCircleIcon';
import { SharpInCircleIcon } from '../common/icons/SharpInCircleIcon';

export default function DescriptionSection({ positionType }: { positionType: PositionType }) {
  return (
    <section css={sectionCss}>
      <div css={[sectionHeadingCss]}>
        <h2 css={circleHeadingCss}>{POSITION_DISPLAY_NAME[positionType]}</h2>
      </div>
      <div css={flexBoxCss}>
        <div css={flexRowCss}>
          <dt>
            <span>
              {positionType === POSITION_TYPE.DESIGN ? (
                <SharpInCircleIcon color="black" />
              ) : (
                <BraceCircleIcon />
              )}
              {POSITION_WITH_CATEGORY_NAME[positionType]}는 이런 일을 해요
            </span>
          </dt>
          <dd dangerouslySetInnerHTML={{ __html: POSITION_DESCRIPTION[positionType] }} />
        </div>
        <div css={flexRowCss}>
          <dt>
            <span>
              <AndPersentCircleIcon />
              이런 분들과 함께하고 싶어요
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

  min-height: 390px;
  width: 100%;
  padding: 20px 0;
  border-bottom: solid 1px ${colors.black};

  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.3px;
  color: ${colors.black};

  dt {
    flex-shrink: 0;
    position: relative;
    padding: 20px 0;
    width: 408px;
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
    width: 100%;

    ul {
      list-style: disc;
    }
    li {
      margin-bottom: 16px;
    }
  }

  ${mediaQuery('xs')} {
    flex-direction: column;
    min-height: fit-content;
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

const circleHeadingCss = css`
  display: inline-block;
  width: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px 50px;
  margin: 0 auto;

  border: 1px solid #121212;
  border-radius: 50%;

  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  color: ${colors.black};

  ${mediaQuery('xs')} {
    font-weight: 600;
    font-size: 24px;
    line-height: 43px;
    letter-spacing: -1px;

    padding: 10px 35px;
  }
`;
