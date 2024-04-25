import Image from 'next/image';
import { css, Theme } from '@emotion/react';
import { m, Variants } from 'framer-motion';

import { defaultFadeInVariants } from '~/constant/motion';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

type ThumbnailProps = {
  title: string;
  subTitle: string;
  img: string;
  description: string;
  titleTextColor: string;
  showInfoDefault?: boolean;
  backgroundShow?: boolean;
};

const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export function OfflineThumbnail({
  title,
  subTitle,
  img,
  description,
  titleTextColor,
}: ThumbnailProps) {
  return (
    <m.article
      css={articleCss}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
      variants={defaultFadeInVariants}
    >
      <section css={gradientCss} />
      <Image css={imageCss} src={img} alt={title} fill quality={100} />
      <div>
        <h1 css={titleCss(titleTextColor)}>{title}</h1>
        <h3 css={subTitleCss}>{subTitle}</h3>
      </div>
      <div css={contentsCss}>
        <m.p
          css={descriptionCss}
          variants={textVariants}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </m.article>
  );
}

const articleCss = css`
  position: relative;
  width: 100%;
  height: 208px;
  min-width: 160px;
  padding: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: black;

  ${mediaQuery('tablet')} {
    padding: 16px;
  }
  ${mediaQuery('mobile')} {
    padding: 14px;
    height: 158px;
  }
  @media (max-width: 400px) {
    padding: 10px;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover > section {
    opacity: 0;
  }
  &:hover > div {
    opacity: 1;

    h3 {
      color: white;
    }
  }
  &:hover img {
    filter: blur(8px) brightness(0.4);
  }
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

const titleCss = (color: string) => css`
  ${theme.typos.bebas.regular40}
  position: relative;
  color: ${color};
  z-index: 10;

  ${mediaQuery('tablet')} {
    ${theme.typos.bebas.regular32}
  }
  ${mediaQuery('mobile')} {
    ${theme.typos.bebas.regular24}
  }
`;

const subTitleCss = (theme: Theme) => css`
  ${theme.typos.notosans.semibold20}
  position: relative;
  color: black;
  z-index: 10;

  ${mediaQuery('mobile')} {
    ${theme.typos.notosans.semibold14}
  }
`;

const gradientCss = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(255, 255, 255, 0.6) 10%, rgba(255, 255, 255, 1) 100%);
`;

const descriptionCss = css`
  position: relative;
  font-weight: 500;
  font-size: 1rem;
  line-height: 22px;
  color: white;
  z-index: 10;
  letter-spacing: -0.16px;
  white-space: pre-wrap;

  ${mediaQuery('mobile')} {
    line-height: 20px;
    font-size: 0.75rem;
  }
`;

const textVariants: Variants = {
  default: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: defaultEasing,
    },
  },
};
