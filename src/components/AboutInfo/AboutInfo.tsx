import Image from 'next/image';
import { css, Theme } from '@emotion/react';

import { ABOUT_INFO } from '~/constant/aboutInfo';
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
  ${mediaQuery('pc')} {
    margin-top: 200px;
  }

  ${mediaQuery('mobile')} {
    margin-top: 20px;
  }
`;

const headerCss = (theme: Theme) => css`
  font-size: ${pxToRem(40)};
  color: ${theme.colors.white};
  text-align: center;
  line-height: 56px; /* 140% */
  letter-spacing: -0.4px;
  ${mediaQuery('mobile')} {
    font-size: ${pxToRem(20)};
    line-height: 150%; /* 30px */
    letter-spacing: -0.2px;
  }
`;

const aboutBodyCss = css`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  gap: 24px;
  ${mediaQuery('tablet')} {
    margin-top: 100px;
    gap: 57px;
  }
  ${mediaQuery('mobile')} {
    margin-top: 100px;
    gap: 50px;
  }
`;

const aboutItemCss = css`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  ${mediaQuery('mobile')} {
    gap: 0px;
  }
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
  ${mediaQuery('tablet')} {
    width: 270px;
    height: 270px;
  }
  ${mediaQuery('mobile')} {
    width: 150px;
    height: 150px;
  }
`;

const aboutTitleCss = (theme: Theme) => css`
  ${theme.typos.pretendard.subTitle1};
  color: ${theme.colors.white};
`;

const aboutDescriptionCss = (theme: Theme) => css`
  ${theme.typos.pretendard.subTitle2};
  color: ${theme.colors.gray100};
  ${mediaQuery('mobile')} {
    letter-spacing: ${pxToRem(-0.14)};
  }
`;
