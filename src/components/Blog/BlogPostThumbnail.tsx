import Image from 'next/image';
import { css, Theme } from '@emotion/react';
import { m } from 'framer-motion';

import { ArrowIcon } from '~/components/Icons';
import { BlogLink } from '~/constant/blog';
import { defaultFadeInVariants } from '~/constant/motion';
import { colors } from '~/styles/colors';
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
      <section css={gradientCss} />
      <Image css={imageCss} src={img} alt={title} fill quality={100} />

      <div css={wrapperCss}>
        <div>
          <h1 css={titleCss} dangerouslySetInnerHTML={{ __html: title as string }} />
          <h3 css={dateCss}>{date}</h3>
        </div>
        <div css={contentsCss}>
          <div css={linkContainerCss}>
            <div css={linkCss}>
              {link.type}
              <ArrowIcon direction={'right'} color={colors.mint} width={16} height={16} />
            </div>
          </div>
        </div>
      </div>
    </m.article>
  );
}

const articleCss = css`
  position: relative;

  width: 100%;
  height: 208px;
  min-width: 160px;

  overflow: hidden;
  border-radius: 12px;
  background-color: black;

  ${mediaQuery('mobile')} {
    height: 220px;
    max-width: 460px;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover img {
    filter: brightness(0.5);
  }
`;

const wrapperCss = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  padding: 24px;

  &:hover {
    backdrop-filter: blur(5px);
  }

  &:hover > section {
    opacity: 0;
  }
  &:hover > div {
    opacity: 1;
  }
`;

const gradientCss = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
`;

const imageCss = css`
  object-fit: cover;
  object-position: center;
  z-index: -1;
`;

const contentsCss = css`
  transition: opacity 0.3s ease;
  opacity: 0;
`;

const linkContainerCss = css`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const linkCss = (theme: Theme) => css`
  margin-right: 2px;
  display: flex;
  gap: 4px;
  align-items: center;
  color: ${colors.mint};
  z-index: 10;
  ${theme.typosV2.pretendard.semibold16}
`;

const titleCss = css`
  ${theme.typosV2.pretendard.semibold20};
  position: relative;
  color: ${theme.colors.white};
  z-index: 10;
  white-space: pre-line;
`;

const dateCss = css`
  ${theme.typosV2.pretendard.regular16}
  position: relative;
  color: ${theme.colors.grey['100']};
  z-index: 10;

  ${mediaQuery('mobile')} {
    line-height: 20px;
    font-size: 0.8rem;
  }
`;
