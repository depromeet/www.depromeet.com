import Image from 'next/image';
import { css, Theme } from '@emotion/react';

import { Button } from '~/components/Button';
import { commonLayoutCss } from '~/styles/layout';
import { mediaQuery } from '~/styles/media';

export function RecruitEntrance() {
  return (
    <section css={[commonLayoutCss, layoutCss]}>
      <div css={imageContainerCss}>
        <Image
          src="/images/main/coin-drop.png"
          width={400}
          height={400}
          alt="passport combination"
        />
      </div>
      <div css={infoContainerCss}>
        <h1>14기 모집 안내</h1>
        <div>
          <p>지원 자격부터 모집 직무까지</p>
          <p>상세 내용을 한 번에 확인해보세요</p>
        </div>
        <Button>바로가기</Button>
      </div>
    </section>
  );
}

const imageContainerCss = css`
  padding: 24px;
  ${mediaQuery('tablet')} {
    width: 346px;
    padding: 0;
    margin-left: 53px;
    img {
      position: relative;
      left: -53px;
    }
  }

  ${mediaQuery('mobile')} {
    width: 124px;
    margin-left: 0;
    img {
      width: auto;
      height: 170px;
      left: -16px;
    }
  }
`;

const infoContainerCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  text-align: left;
  padding-right: 80px;

  h1 {
    ${theme.typos.pretendard.subTitle1};
    color: ${theme.colors.white};
  }
  p {
    ${theme.typos.pretendard.subTitle2};
    color: ${theme.colors.gray100};
  }

  ${mediaQuery('tablet')} {
    padding-right: 0;
  }

  ${mediaQuery('mobile')} {
    gap: 8px;

    h1 {
      ${theme.typos.pretendard.subTitle2};
    }

    p {
      font-size: 14px;
    }
    button {
      margin-top: 16px;
    }
  }
`;

const layoutCss = css`
  display: flex;
  gap: 80px;

  ${mediaQuery('tablet')} {
    gap: 7px;
  }

  ${mediaQuery('mobile')} {
    gap: 16px;
    justify-content: center;
  }
`;
