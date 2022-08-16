import { css } from '@emotion/react';

import { colors } from '~/styles/constants';

export default function ApplySection() {
  return (
    <section css={sectionCss}>
      <span css={spanCss}>이제 여러분 차레예요!</span>

      <h2 css={headingCss}>디프만 12기 멤버가 되고싶다면</h2>

      <a>지금 지원하기</a>
    </section>
  );
}

const sectionCss = css`
  margin-top: 220px;
  width: 100%;
`;

const spanCss = css`
  display: block;
  font-size: 2rem;
  line-height: 110%;
  color: ${colors.gray4};
  text-align: center;

  margin-bottom: 12px;
`;

const headingCss = css`
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 110%;
  color: ${colors.white};
  text-align: center;

  margin-bottom: 60px;
`;
