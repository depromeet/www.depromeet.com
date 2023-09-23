import Image from 'next/image';
import { css, Theme } from '@emotion/react';

import { commonLayoutCss } from '~/styles/layout';
import { mediaQuery } from '~/styles/media';
import { pxToRem } from '~/styles/typo';

export function AboutInfo() {
  return (
    <div css={[commonLayoutCss, layoutCss]}>
      <div>
        <h2 css={headerCss}>{'IT 사이드 프로젝트의 시작\n디프만의 열정적인 여정에 합류하세요'}</h2>
      </div>
      <ul css={aboutBodyCss}>
        {ABOUT_INFO.map(({ image, title, label, description, reverse }) => (
          <div key={title} css={aboutItemCss}>
            {reverse ? (
              <>
                <div css={aboutInfoCss}>
                  <h3 css={aboutTitleCss}>{title}</h3>
                  <p css={aboutDescriptionCss}>{description}</p>
                </div>
                <div css={imageCss}>
                  <Image src={image} alt={label} fill quality={100} />
                </div>
              </>
            ) : (
              <>
                <div css={imageCss}>
                  <Image src={image} alt={label} fill quality={100} />
                </div>
                <div css={aboutInfoCss}>
                  <h3 css={aboutTitleCss}>{title}</h3>
                  <p css={aboutDescriptionCss}>{description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

const layoutCss = css`
  margin-top: 200px;
  white-space: pre-line;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const headerCss = (theme: Theme) => css`
  ${theme.typos.pretendard.subTitle1};
  font-size: ${pxToRem(40)};
  color: ${theme.colors.white};
`;

const aboutBodyCss = css`
  margin-top: 200px;
`;

const aboutItemCss = css`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
`;

const aboutInfoCss = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const imageCss = css`
  position: relative;
  width: 400px;
  height: 400px;
  object-fit: cover;
  object-position: center;
  ${mediaQuery('mobile')} {
    width: 270px;
    height: 270px;
  }
`;

const aboutTitleCss = (theme: Theme) => css`
  ${theme.typos.pretendard.subTitle1};
  color: ${theme.colors.white};
`;

const aboutDescriptionCss = (theme: Theme) => css`
  ${theme.typos.pretendard.subTitle2};
  color: ${theme.colors.gray100};
`;

const PASSPORT_IMAGE = `/images/about/passport.png`;
const AIRPLANE_IMAGE = `/images/about/airplane.png`;

const ABOUT_INFO = [
  {
    label: 'passport',
    image: PASSPORT_IMAGE,
    title: '디자이너, 개발자의\n 커리어 패스 여정',
    description:
      '14기는 매주 토요일, 총 16주간 진행되며 \n다양한 오프라인 세션과 네트워킹이 준비되어 있습니다',
    reverse: false,
  },
  {
    label: 'airplane',
    image: AIRPLANE_IMAGE,
    title: '서비스 론칭 후\n유저에게 도착하는 순간까지',
    description:
      'UT, 론칭데이 등 실제 서비스를 구현하고\n타켓 유저에게 도달하는 전 과정을 경험합니다',
    reverse: true,
  },
];
