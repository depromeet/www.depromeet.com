import { css } from '@emotion/react';

import { colors, mediaQuery } from '~/styles/constants';

import { sectionCss } from './RecruitDetail.style';

export default function DescriptionSection() {
  return (
    <section css={sectionCss}>
      <div css={flexBoxCss}>
        <div css={flexRowCss}>
          <dt>icon 제목</dt>
          <dd>설명</dd>
        </div>
        <div css={flexRowCss}>
          <dt>icon 제목</dt>
          <dd>설명</dd>
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
  }

  dd {
    padding: 20px 20px 0 80px;
    width: 76%;
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
    }
  }
`;
