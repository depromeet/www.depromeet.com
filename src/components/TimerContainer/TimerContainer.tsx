import { useState } from 'react';
import Image from 'next/image';
import { css, Theme } from '@emotion/react';

import { Button } from '~/components/Button';
import CloseIcon from '~/components/Icons/CloseIcon';
import Modal from '~/components/Modal/Modal';
// import { END_DATE } from '~/constant/common';
// import useIsInProgress from '~/hooks/useIsInProgress';
import { commonLayoutCss } from '~/styles/layout';
import { mediaQuery } from '~/styles/media';

// import useDiffDay from './useDiffDay';

export function TimerContainer() {
  // const { isInProgress, progressState } = useIsInProgress();
  // const time = useDiffDay(END_DATE);

  // const router = useRouter();

  // const onButtonClick = () => {
  //   router.push('/apply');
  // };

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const onAlertClose = () => setIsAlertOpen(false);

  const onAlertButtonClick = () => {
    setIsAlertOpen(true);
  };

  return (
    <section css={containerCss}>
      <div css={bgImageCss}>
        <Image src="/images/main/main-bg.png" alt="main-bg" width={1300} height={768.857} />
      </div>
      <div css={gradientCss} />
      <div css={[commonLayoutCss, layoutCss]}>
        <div>
          <div css={headingCss}>
            <h1>DEPROMEET</h1>
            <p>디프만은 디자이너와 개발자가 만나 서비스 기획부터 런칭까지</p>
            <p>하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다</p>

            <div css={mobileOnlyCss}>
              <p>디프만은 디자이너와 개발자가 만나</p>
              <p>서비스 기획부터 런칭까지 하나의 프로덕트를</p>
              <p>완성하며 성장하는 IT 커뮤니티입니다</p>
            </div>
          </div>
          <Button size="lg" overrideCss={buttonCss} onClick={onAlertButtonClick}>
            15기 알림신청
          </Button>
          {/* <Timer time={progressState === 'FINISH' ? FINISH_TIME_OBJ : time} />
          <Button size="lg" disabled={!isInProgress} onClick={onButtonClick}>
            14기 지원하기
          </Button> */}

          <Modal isShowing={isAlertOpen} onClickOutside={onAlertClose} mode="wait">
            <article css={modalCss}>
              <h2>15기 알림 신청</h2>
              <p>디프만 카카오톡 채널 친구 추가 시 기수 모집 알림을 보내드립니다</p>
              <Image src={'/images/kakao-qr.png'} alt="kakao qr link" width={90} height={90} />
              <div css={buttonWrapperCss}>
                <a href="https://pf.kakao.com/_xoxmcxed">
                  <Button size="md">카카오톡 채널 바로가기</Button>
                </a>
              </div>
              <div className="close-icon" onClick={onAlertClose}>
                <CloseIcon />
              </div>
            </article>
          </Modal>
        </div>
      </div>
    </section>
  );
}

// const FINISH_TIME_OBJ = {
//   day: '00',
//   hour: '00',
//   min: '00',
//   sec: '00',
// };

const buttonWrapperCss = css`
  margin-top: 39px;
  margin-bottom: 24px;
  padding: 0 24px;
  width: 100%;

  button {
    height: 46px;
    width: 100%;

    ${mediaQuery('mobile')} {
      height: 46px;
    }
  }
`;

const modalCss = (theme: Theme) => css`
  background-color: ${theme.colors.black400};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 320px;
  position: relative;

  h2 {
    ${theme.typos.pretendard.body1};
    color: ${theme.colors.white};
    margin-bottom: 8px;
    margin-top: 47px;
  }

  p {
    ${theme.typos.pretendard.body2};
    color: ${theme.colors.gray100};
    margin-bottom: 39px;
    max-width: 221px;
  }

  .close-icon {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
`;

const buttonCss = css`
  max-width: 443px;
  margin: 0 auto;

  ${mediaQuery('mobile')} {
    max-width: 266px;
  }
`;

const containerCss = css`
  position: relative;
  padding: 30px 0;
  background: linear-gradient(180deg, #0973ee 0%, rgba(9, 115, 238, 0) 100%);
  overflow: hidden;

  height: 828px;

  ${mediaQuery('pc')} {
    padding: 0;
  }

  ${mediaQuery('mobile')} {
    height: 428px;
  }
`;

const bgImageCss = css`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  z-index: 0;
  text-align: center;

  img {
    width: 1300px;
    height: 768.857px;

    @media screen and (max-width: 1300px) {
      width: 100%;
      height: auto;
    }
  }

  ${mediaQuery('pc')} {
    top: 0;
  }
`;

const layoutCss = css`
  margin: auto;

  max-width: 726px;

  & > div {
    width: 100%;
    position: relative;
    z-index: 2; // NOTE : gradient 뒤로 가려지지 않게
    margin: 0 auto;

    & > * {
      margin-bottom: 20px;
    }
  }
  ${mediaQuery('pc')} {
    margin: 0 auto;
  }

  ${mediaQuery('mobile')} {
    max-width: 400px;

    & > div {
      & > * {
        margin-bottom: 8px;
      }
    }
  }
`;

const gradientCss = css`
  background: linear-gradient(0deg, #070814 0%, rgba(7, 8, 20, 0) 100%);
  width: 100vw;
  height: 445px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

const headingCss = (theme: Theme) => css`
  text-align: center;
  padding-top: 147px;
  padding-bottom: 20px;

  & > h1 {
    ${theme.typos.decimal.title1}
    color: ${theme.colors.white};
    margin-bottom: 20px;
  }

  p {
    ${theme.typos.pretendard.subTitle2};
    color: ${theme.colors.gray20};
  }

  ${mediaQuery('mobile')} {
    padding-top: 65px;
    padding-bottom: 16px;
    & > h1 {
      ${theme.typos.decimal.title2};
      margin-bottom: 8px;
    }

    & > p {
      display: none;
    }

    div > p {
      ${theme.typos.pretendard.body2};
      font-size: 14px;
    }
  }
`;

const mobileOnlyCss = css`
  display: none;

  ${mediaQuery('mobile')} {
    display: block;
  }
`;
