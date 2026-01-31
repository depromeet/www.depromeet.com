import Image from 'next/image';
import { css } from '@emotion/react';
import { m } from 'framer-motion';

import { ArrowIcon } from '~/components/Icons';
import { BlogLink } from '~/constant/blog';
import { defaultFadeInVariants } from '~/constant/motion';
import { colors } from '~/styles/colors';
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

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 카드 클릭 이벤트 방지
    window.open(link.href, '_blank'); // 새 탭에서 링크 열기
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
        <div css={imageContainerCss}>
          <Image css={imageCss} src={img} alt={title} fill quality={100} />
          <div css={thumbnailOverlayCss} className="thumbnail-overlay">
            <button css={linkButtonCss} onClick={handleLinkClick}>
              {link.type}
              <ArrowIcon direction={'right'} color="white" width={16} height={16} />
            </button>
          </div>
        </div>

        <div css={titleContainerCss}>
          <h3 css={titleCss} dangerouslySetInnerHTML={{ __html: title as string }} />
        </div>

        <div css={dateContainerCss}>
          <span css={dateCss}>{date}</span>
        </div>
      </div>
    </m.article>
  );
}

/* hover시 썸네일 영역만 회색+텍스트 표시, 그 외 효과 없음 */
const articleCss = css`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  border: none;
  cursor: pointer;
  overflow: hidden;

  &:hover .thumbnail-overlay {
    opacity: 1;
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

const linkButtonCss = css`
  display: flex;
  gap: 6px;
  align-items: center;
  color: ${colors.white};
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
`;

const titleContainerCss = css`
  padding: 20px 0 8px 0;
  flex: 1;
  display: flex;
  align-items: flex-start;
`;

const titleCss = css`
  font-size: 22px;
  font-weight: 600;
  color: ${colors.grey18['900']};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
`;

const dateContainerCss = css`
  padding: 0;
`;

const dateCss = css`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.grey18['900']};
  line-height: 1.4;
`;

const imageContainerCss = css`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
`;

const imageCss = css`
  object-fit: cover;
  object-position: center;
`;

/* hover시 썸네일 영역만 회색 오버레이 + 링크 텍스트 */
const thumbnailOverlayCss = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colors.grey18['900']};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;
