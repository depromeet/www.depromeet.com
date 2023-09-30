import Image from 'next/image';
import { useRouter } from 'next/router';
import { css, Theme } from '@emotion/react';

import { Button } from '~/components/Button';
import { mediaQuery } from '~/styles/media';

const ERROR_IMAGE = `/images/error/career.png`;
export default function NotFound() {
  const router = useRouter();

  const onButtonClick = () => {
    router.push('/');
  };

  return (
    <main css={errorContainerCss}>
      <Image src={ERROR_IMAGE} alt="error image" width={270} height={270} />
      <h2 css={errorTitleCss}>404 ERROR</h2>
      <p css={errorDescriptionCss}>디프만 이륙 중 문제가 생겼어요</p>
      <Button css={homeButtonCss} onClick={onButtonClick}>
        홈으로 가기
      </Button>
    </main>
  );
}

const errorContainerCss = css`
  display: flex;
  gap: 24px;
  align-items: center;
  flex-direction: column;
  margin: 150px 0;
  ${mediaQuery('mobile')} {
    margin: 50px 0;
  }
`;

const errorTitleCss = (theme: Theme) => css`
  ${theme.typos.decimal.title2};
  color: white;
`;

const errorDescriptionCss = (theme: Theme) => css`
  ${theme.typos.pretendard.subTitle2};
  color: white;
`;

const homeButtonCss = css`
  width: 130px;
`;
