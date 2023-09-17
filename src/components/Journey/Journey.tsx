import Image from 'next/image';
import { css, Theme } from '@emotion/react';

import { commonLayoutCss } from '~/styles/layout';

export function Journey() {
  return (
    <section css={[commonLayoutCss, layoutCss]}>
      <h1 css={headingCss}>
        디자이너와 개발자를 만나
        <br />
        공동의 성장을 위한 여정에 합류해보세요
      </h1>
      <div>
        <Image
          src="/images/main/passport-combination.png"
          width={530.326}
          height={340}
          alt="passport combination"
        />
      </div>
      <div css={infoContainerCss}>
        <div>
          <h3>누적 멤버 수</h3>
          <p>850+</p>
        </div>
        <div>
          <h3>탄생한지</h3>
          <p>7 YEARS</p>
        </div>
        <div>
          <h3>10-13기 론칭 성공률</h3>
          <p>100%</p>
        </div>
        <div>
          <h3>5-13기 론칭 서비스</h3>
          <p>50+</p>
        </div>
      </div>
    </section>
  );
}

const layoutCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  padding: 0 30px;

  color: ${theme.colors.white};
`;

const headingCss = (theme: Theme) => css`
  ${theme.typos.decimal.title2};
  text-align: center;
`;

const infoContainerCss = (theme: Theme) => css`
  display: grid;
  gap: 20px;
  width: 100%;

  grid-template-columns: repeat(4, 1fr);
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    background-color: ${theme.colors.black400};
    padding: 52px 0;
  }

  h3 {
    ${theme.typos.pretendard.body1};
    color: ${theme.colors.gray100};
  }

  p {
    ${theme.typos.decimal.subTitle1};
  }
`;
