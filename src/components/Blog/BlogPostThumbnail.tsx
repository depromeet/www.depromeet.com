import Image from 'next/image';
import { css } from '@emotion/react';
import { m } from 'framer-motion';

import { ArrowIcon } from '~/components/Icons';
import { BlogLink } from '~/constant/blog';
import { defaultFadeInVariants } from '~/constant/motion';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

type ThumbnailProps = {
  title: string;
  date: string;
  img: string;
  link: BlogLink;
  showInfoDefault?: boolean;
  backgroundShow?: boolean;
};

export function BlogPostThumbnail({ title, date, img, link, ...props }: ThumbnailProps) {
  const handleClickThumbnail = () => {
    window.open(link.href);
  };

  return (
    <m.article
      css={articleCss}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
      variants={defaultFadeInVariants}
      onClick={handleClickThumbnail}
      {...props}
    >
      <div css={frontFaceCss} className="front-face">
        <div css={dateContainerCss}>
          <span css={dateCss}>{date}</span>
        </div>

        <div css={titleContainerCss}>
          <h3 css={titleCss} dangerouslySetInnerHTML={{ __html: title as string }} />
        </div>

        <div css={imageContainerCss}>
          <Image css={imageCss} src={img} alt={title} fill quality={100} />
        </div>
      </div>

      <div css={backFaceCss} className="back-face">
        <div css={dateContainerCss}>
          <span css={[dateCss, { color: 'black' }]}>{date}</span>
        </div>

        <div css={titleContainerCss}>
          <h3
            css={[titleCss, { color: 'black' }]}
            dangerouslySetInnerHTML={{ __html: title as string }}
          />
        </div>

        <div css={backLinksAreaCss}>
          <div css={linksContainerCss}>
            <button css={linkButtonCss} onClick={e => e.stopPropagation()}>
              {link.type}
              <ArrowIcon direction={'right'} color="white" width={16} height={16} />
            </button>
          </div>
        </div>
      </div>
    </m.article>
  );
}

// 메인 카드 스타일
const articleCss = css`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: #e3e5ea;
  border: 1px solid #478af4;
  cursor: pointer;
  transition: all 0.2s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:hover .back-face {
    opacity: 1;
  }

  ${mediaQuery('mobile')} {
    border-radius: 12px;
  }
`;

// 앞면 스타일
const frontFaceCss = css`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  opacity: 1;
  transition: opacity 0.3s ease;
`;

// 뒷면 스타일
const backFaceCss = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #e3e5ea;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const backLinksAreaCss = css`
  position: relative;
  width: 100%;
  height: 200px;
  background: #040c23;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 21px;
  box-sizing: border-box;

  ${mediaQuery('mobile')} {
    height: 180px;
  }
`;

const linksContainerCss = css`
  display: flex;
  gap: 16.5px;
  align-items: center;
  justify-content: center;
`;

const linkButtonCss = css`
  display: flex;
  gap: 6px;
  align-items: center;
  color: white;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.2s ease;

  ${theme.typosV3.MartianMono.body1Regular};
  font-weight: 200;

  &:hover {
    opacity: 0.8;
  }

  ${mediaQuery('tablet')} {
  }
`;

const dateContainerCss = css`
  padding: 16px 16px 0 16px;

  ${mediaQuery('mobile')} {
    padding: 12px 12px 0 12px;
  }
`;

const dateCss = css`
  ${theme.typosV2.pretendard.medium13}
  color: #040C23;
  line-height: 1.4;

  ${mediaQuery('mobile')} {
    font-size: 13px;
  }
`;

const titleContainerCss = css`
  padding: 8px 16px 16px 16px;
  flex: 1;
  display: flex;
  align-items: flex-start;

  ${mediaQuery('mobile')} {
    padding: 6px 12px 12px 12px;
  }
`;

const titleCss = css`
  ${theme.typosV2.pretendard.semibold20};
  color: #000000;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;

  ${mediaQuery('mobile')} {
    ${theme.typosV2.pretendard.semibold16};
    line-height: 1.3;
  }
`;

const imageContainerCss = css`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;

  ${mediaQuery('mobile')} {
    height: 180px;
  }
`;

const imageCss = css`
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;
