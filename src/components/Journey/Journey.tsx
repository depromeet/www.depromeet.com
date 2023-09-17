import Image from 'next/image';
import { css, Theme } from '@emotion/react';

export function Journey() {
  return (
    <section css={layoutCss}>
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
