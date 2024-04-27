import Image from 'next/image';
import Link from 'next/link';
import { css, Theme } from '@emotion/react';
import { m } from 'framer-motion';

import { ArrowIcon } from '~/components/Icons';
import { defaultFadeInVariants } from '~/constant/motion';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';

export type Link = {
  type: 'MEDIUM';
  href: string;
};

type ThumbnailProps = {
  title: string;
  date: string;
  img: string;
  links?: Link[];
  showInfoDefault?: boolean;
  backgroundShow?: boolean;
};

export function BlogPostThumbnail({ title, date, img, links }: ThumbnailProps) {
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
        <h1 css={titleCss} dangerouslySetInnerHTML={{ __html: title as string }} />
        <h3 css={dateCss}>{date}</h3>
      </div>
      <div css={contentsCss}>
        {links && (
          <div css={linkContainerCss}>
            {links.map(link => (
              <Link key={link.type} href={link.href} css={linkCss}>
                {link.type}
                <ArrowIcon direction={'right'} color={colors.mint} width={16} height={16} />
              </Link>
            ))}
          </div>
        )}
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
    height: 180px;
    max-width: 460px;
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
  }
  &:hover img {
    filter: blur(8px) brightness(0.4);
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
  ${theme.typosV2.bebas.regular24}
`;

const titleCss = css`
  position: relative;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 30px;
  color: ${colors.white};
  z-index: 10;
  white-space: pre-line;

  ${mediaQuery('mobile')} {
    font-size: 1rem;
  }
`;

const dateCss = css`
  position: relative;
  font-weight: 500;
  font-size: 1rem;
  line-height: 22px;
  color: ${colors.gray};
  z-index: 10;

  ${mediaQuery('mobile')} {
    line-height: 20px;
    font-size: 0.8rem;
  }
`;
