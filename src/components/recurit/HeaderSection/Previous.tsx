import { css } from '@emotion/react';

import CTAButton from '~/components/common/CTAButton';

export default function Previous() {
  return (
    <>
      <h1 css={headingCss}>
        2022.08.22.
        <br /> 모집이 시작 됩니다.
      </h1>
      <CTAButton disabled>아직 모집 기간이 아닙니다.</CTAButton>
    </>
  );
}

const headingCss = css`
  font-weight: 600;
  font-size: 72px;
  line-height: 120%;
  text-align: center;

  color: #ffffff;

  margin-bottom: 174px;
`;
